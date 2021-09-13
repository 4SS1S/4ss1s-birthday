"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [// OAuth authentication providers...\n  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Apple({\n    clientId: process.env.APPLE_ID,\n    clientSecret: process.env.APPLE_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Facebook({\n    clientId: process.env.FACEBOOK_ID,\n    clientSecret: process.env.FACEBOOK_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET,\n    authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'\n  }), // Passwordless / email sign in\n  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({\n    server: process.env.MAIL_SERVER,\n    from: 'NextAuth.js <no-reply@example.com>'\n  })],\n  // Optional SQL or MongoDB database to persist users\n  database: process.env.DATABASE_URL // Optional session secret\n  // secret: process.env.SECRET,\n  // Optional function to send emails\n  // See\n  //\n  //  * https://nodemailer.com/\n  //  *\n  //  *\n  //  *\n  //  *\n  // email: (to, from, subject, message) => {\n  //   const nodemailer = require('nodemailer')\n  //\n  //   const transporter = nodemailer.createTransport({\n  //     host: process.env.MAIL_SERVER,\n  //     port: 465,\n  //     secure: true,\n  //     auth: {\n  //       user: process.env.MAIL_USER,\n  //       pass: process.env.MAIL_PASS,\n  //     },\n  //   })\n  //\n  //   const mailOptions = {\n  //     from: from,\n  //     to: to,\n  //     subject: subject,\n  //     text: message,\n  //   }\n  //\n  //   transporter.sendMail(mailOptions, (error, info) => {\n  //     if (error) {\n  //       console.error(error)\n  //     }\n  //   })\n  // },\n\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxpRUFBZUEsZ0RBQVEsQ0FBQztBQUN0QkUsRUFBQUEsU0FBUyxFQUFFLENBQ1Q7QUFDQUQsRUFBQUEsZ0VBQUEsQ0FBZ0I7QUFDZEcsSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFEUjtBQUVkQyxJQUFBQSxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQUZaLEdBQWhCLENBRlMsRUFNVFIsbUVBQUEsQ0FBbUI7QUFDakJHLElBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlLLFdBREw7QUFFakJILElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlNO0FBRlQsR0FBbkIsQ0FOUyxFQVVUWCxpRUFBQSxDQUFpQjtBQUNmRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxTQURQO0FBRWZOLElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGFBRlg7QUFHZkMsSUFBQUEsZ0JBQWdCLEVBQ2Q7QUFKYSxHQUFqQixDQVZTLEVBZ0JUO0FBQ0FmLEVBQUFBLGdFQUFBLENBQWdCO0FBQ2RpQixJQUFBQSxNQUFNLEVBQUViLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxXQUROO0FBRWRDLElBQUFBLElBQUksRUFBRTtBQUZRLEdBQWhCLENBakJTLENBRFc7QUF1QnRCO0FBQ0FDLEVBQUFBLFFBQVEsRUFBRWhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsWUF4QkEsQ0EwQnRCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEvRHNCLENBQUQsQ0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly80c3Mxc19iaXJ0aGRheS8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzcyY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycydcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICAvLyBPQXV0aCBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnMuLi5cbiAgICBQcm92aWRlcnMuQXBwbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFQUExFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BUFBMRV9TRUNSRVQsXG4gICAgfSksXG4gICAgUHJvdmlkZXJzLkZhY2Vib29rKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5Hb29nbGUoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6XG4gICAgICAgICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9wcm9tcHQ9Y29uc2VudCZhY2Nlc3NfdHlwZT1vZmZsaW5lJnJlc3BvbnNlX3R5cGU9Y29kZScsXG4gICAgfSksXG4gICAgLy8gUGFzc3dvcmRsZXNzIC8gZW1haWwgc2lnbiBpblxuICAgIFByb3ZpZGVycy5FbWFpbCh7XG4gICAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52Lk1BSUxfU0VSVkVSLFxuICAgICAgZnJvbTogJ05leHRBdXRoLmpzIDxuby1yZXBseUBleGFtcGxlLmNvbT4nLFxuICAgIH0pLFxuICBdLFxuICAvLyBPcHRpb25hbCBTUUwgb3IgTW9uZ29EQiBkYXRhYmFzZSB0byBwZXJzaXN0IHVzZXJzXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG5cbiAgLy8gT3B0aW9uYWwgc2Vzc2lvbiBzZWNyZXRcbiAgLy8gc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG5cbiAgLy8gT3B0aW9uYWwgZnVuY3Rpb24gdG8gc2VuZCBlbWFpbHNcbiAgLy8gU2VlXG4gIC8vXG4gIC8vICAqIGh0dHBzOi8vbm9kZW1haWxlci5jb20vXG4gIC8vICAqXG4gIC8vICAqXG4gIC8vICAqXG4gIC8vICAqXG5cbiAgLy8gZW1haWw6ICh0bywgZnJvbSwgc3ViamVjdCwgbWVzc2FnZSkgPT4ge1xuICAvLyAgIGNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJylcbiAgLy9cbiAgLy8gICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgLy8gICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1BSUxfU0VSVkVSLFxuICAvLyAgICAgcG9ydDogNDY1LFxuICAvLyAgICAgc2VjdXJlOiB0cnVlLFxuICAvLyAgICAgYXV0aDoge1xuICAvLyAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVIsXG4gIC8vICAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BSUxfUEFTUyxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSlcbiAgLy9cbiAgLy8gICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcbiAgLy8gICAgIGZyb206IGZyb20sXG4gIC8vICAgICB0bzogdG8sXG4gIC8vICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAvLyAgICAgdGV4dDogbWVzc2FnZSxcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIChlcnJvciwgaW5mbykgPT4ge1xuICAvLyAgICAgaWYgKGVycm9yKSB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSxcbn0pXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJBcHBsZSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFQUExFX0lEIiwiY2xpZW50U2VjcmV0IiwiQVBQTEVfU0VDUkVUIiwiRmFjZWJvb2siLCJGQUNFQk9PS19JRCIsIkZBQ0VCT09LX1NFQ1JFVCIsIkdvb2dsZSIsIkdPT0dMRV9JRCIsIkdPT0dMRV9TRUNSRVQiLCJhdXRob3JpemF0aW9uVXJsIiwiRW1haWwiLCJzZXJ2ZXIiLCJNQUlMX1NFUlZFUiIsImZyb20iLCJkYXRhYmFzZSIsIkRBVEFCQVNFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();