const { asyncErrorHandler } = require("../middleware/catchAsyncError");
const journal = require("../models/journalModel");
const conference = require("../models/conferenceModel");
const bookChapter = require("../models/bookChapterModel");
const publication = require("../models/publicationModel");
const ApiFeatures = require("../utils/apiFeatures");
//user publication details

exports.getPublicationsOfUser = asyncErrorHandler(async (req, res, next) => {
  const { name } = req.body;
  const resultPerPage = 10;
  // console.log(req.body)
  // const journals=await journal.find({nameOfAuthor:name})
  // const conferences=await conference.find({nameOfAuthor:name})
  // const bookChapters=await bookChapter.find({nameOfAuthor:name})
  // console.log(journals)
  const currentPage = Number(req.query.page) || 1;

  const skip = resultPerPage * (currentPage - 1);
  let publications = await publication.find({ nameOfAuthor: name });
  let publicationsCount = publications.length;
  let tPub = [...publications];
  publications = await publication
    .find({ nameOfAuthor: name })
    .limit(resultPerPage)
    .skip(skip);
  let tempP;
  let countArray=[]
  tempP = await publication.find({
    nameOfAuthor: name,
    typeOfPublication: {
      $regex:"journal",
      $options: "i",
    },
  });
  countArray.push(tempP.length)
  tempP = await publication.find({
    nameOfAuthor: name,
    typeOfPublication: {
      $regex:"book chapter",
      $options: "i",
    },
  });
  countArray.push(tempP.length)
  tempP = await publication.find({
    nameOfAuthor: name,
    typeOfPublication: {
      $regex:"conference",
      $options: "i",
    },
  });
  countArray.push(tempP.length)
  tempP = await publication.find({
    nameOfAuthor: name,
    typeOfPublication: {
      $regex:"patent",
      $options: "i",
    },
  });
  countArray.push(tempP.length)
  tempP = await publication.find({
    nameOfAuthor: name,
    typeOfPublication: {
      $regex:"copyright",
      $options: "i",
    },
  });
  countArray.push(tempP.length)

  // console.log(publications)
  res.status(200).json({
    success: "true",
    publications,
    publicationsCount,
    resultPerPage,
    tPub,
    countArray
  });
});

//get publications

exports.getPublications = asyncErrorHandler(async (req, res, next) => {
  const resultPerPage = req.query.ppp;
  const publicationsCount = await publication.countDocuments();
  const apiFeatures = new ApiFeatures(publication.find(), req.query)
    .search()
    .filter();
  let pub = await apiFeatures.query;
  let filteredPublicationsCount = pub.length;
  // const pubJ=await apiFeatures.queryJ
  // const pubC=await apiFeatures.queryC
  // const pub=[...pubB,...pubJ,...pubC]
  const tPub = [...pub];
  apiFeatures.pagination(resultPerPage);
  pub = await apiFeatures.query.clone();
  res.status(200).json({
    success: true,
    publications: pub,
    publicationsCount,
    resultPerPage,
    filteredPublicationsCount,
    tPub,
  });
});

//get publications for home page
exports.getPublicationHome = asyncErrorHandler(async (req, res, next) => {
  const publications = await publication.find({}).limit(8);
  res.status(200).json({
    success: true,
    publications,
  });
});

//get publication details

exports.getPublicationDetails = asyncErrorHandler(async (req, res, next) => {
  const publicationDetails = await publication.findById(req.params.id);
  res.status(200).json({
    success: true,
    publicationDetails,
  });
});
