import { createReducer } from "@reduxjs/toolkit";

export const publicationReducer = createReducer(
  { publications: [] },
  {
    PUBLICATION_REQUEST: (state, action) => {
      state.loading = true;
    },
    PUBLICATION_SUCCESS: (state, action) => {
      state.loading = false;
      state.publications = action.payload.publications;
      state.publicationsCount = action.payload.publicationsCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredPublicationsCount =
        action.payload.filteredPublicationsCount;
      state.totalPublications = action.payload.tPub;
      state.countArray = action.payload.countArray;
    },
    PUBLICATION_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);
export const publicationAdminReducer = createReducer(
  { publications: [] },
  {
    PUBLICATION_ADMIN_REQUEST: (state, action) => {
      state.loading = true;
    },
    PUBLICATION_ADMIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.publications = action.payload.publications;
      state.publicationsCount = action.payload.publicationsCount;
      state.countArray = action.payload.countArray;
      state.yearCount = action.payload.yearCount;
      state.yearCountEach = action.payload.yearCountEach;
    },
    PUBLICATION_ADMIN_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);
export const publicationDetailsReducer = createReducer(
  { publication: {} },
  {
    PUBLICATION_DETAILS_REQUEST: (state, action) => {
      state.loading = true;
    },
    PUBLICATION_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.publication = action.payload;
    },
    PUBLICATION_DETAILS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  }
);

export const publicationUploadReducer = createReducer(
  { error: null, loading: false, success: false },
  {
    PUBLICATION_UPLOAD_REQUEST: (state, action) => {
      state.loading = true;
    },
    PUBLICATION_UPLOAD_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    PUBLICATION_UPLOAD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
      state.success = false;
    },
  }
);
export const publicationDeleteReducer = createReducer(
  { error: null, loading: false, success: false,deleted:false },
  {
    PUBLICATION_DELETE_REQUEST: (state, action) => {
      state.loading = true;
    },
    PUBLICATION_DELETE_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = true;
      state.deleted=!state.deleted
    },
    PUBLICATION_DELETE_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
      state.success = false;
    },
  }
);
