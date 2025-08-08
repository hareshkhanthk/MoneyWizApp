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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./src/theme/index.ts\");\n/* harmony import */ var _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/supabaseClient */ \"./src/utils/supabaseClient.ts\");\n/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/useStore */ \"./src/store/useStore.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _theme__WEBPACK_IMPORTED_MODULE_3__, _store_useStore__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _theme__WEBPACK_IMPORTED_MODULE_3__, _store_useStore__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// src/pages/_app.tsx\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const { setUser } = (0,_store_useStore__WEBPACK_IMPORTED_MODULE_5__.useStore)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Get initial session\n        const syncUser = async ()=>{\n            const { data: { session } } = await _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth.getSession();\n            if (session?.user) {\n                setUser({\n                    id: session.user.id,\n                    email: session.user.email || \"\",\n                    family_id: session.user.user_metadata?.family_id || \"demo123\"\n                });\n            } else {\n                setUser(null);\n            }\n        };\n        syncUser();\n        // Set up real-time session listener\n        const { data: listener } = _utils_supabaseClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"].auth.onAuthStateChange((_event, session)=>{\n            if (session?.user) {\n                setUser({\n                    id: session.user.id,\n                    email: session.user.email || \"\",\n                    family_id: session.user.user_metadata?.family_id || \"demo123\"\n                });\n            } else {\n                setUser(null);\n            }\n        });\n        return ()=>{\n            // Cleanup auth listener\n            listener?.subscription?.unsubscribe?.();\n        };\n    }, [\n        setUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/hkhant/Downloads/MoneyWizApp/src/pages/_app.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hkhant/Downloads/MoneyWizApp/src/pages/_app.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUU2QjtBQUNoQjtBQUNMO0FBQ2tCO0FBQ0Y7QUFFOUIsU0FBU0ssTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM5RCxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHSix5REFBUUE7SUFFNUJILGdEQUFTQSxDQUFDO1FBQ1Isc0JBQXNCO1FBQ3RCLE1BQU1RLFdBQVc7WUFDZixNQUFNLEVBQ0pDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQ2xCLEdBQUcsTUFBTVIsa0VBQWEsQ0FBQ1UsVUFBVTtZQUVsQyxJQUFJRixTQUFTRyxNQUFNO2dCQUNqQk4sUUFBUTtvQkFDTk8sSUFBSUosUUFBUUcsSUFBSSxDQUFDQyxFQUFFO29CQUNuQkMsT0FBT0wsUUFBUUcsSUFBSSxDQUFDRSxLQUFLLElBQUk7b0JBQzdCQyxXQUFXTixRQUFRRyxJQUFJLENBQUNJLGFBQWEsRUFBRUQsYUFBYTtnQkFDdEQ7WUFDRixPQUFPO2dCQUNMVCxRQUFRO1lBQ1Y7UUFDRjtRQUVBQztRQUVBLG9DQUFvQztRQUNwQyxNQUFNLEVBQUVDLE1BQU1TLFFBQVEsRUFBRSxHQUFHaEIsa0VBQWEsQ0FBQ2lCLGlCQUFpQixDQUN4RCxDQUFDQyxRQUFRVjtZQUNQLElBQUlBLFNBQVNHLE1BQU07Z0JBQ2pCTixRQUFRO29CQUNOTyxJQUFJSixRQUFRRyxJQUFJLENBQUNDLEVBQUU7b0JBQ25CQyxPQUFPTCxRQUFRRyxJQUFJLENBQUNFLEtBQUssSUFBSTtvQkFDN0JDLFdBQVdOLFFBQVFHLElBQUksQ0FBQ0ksYUFBYSxFQUFFRCxhQUFhO2dCQUN0RDtZQUNGLE9BQU87Z0JBQ0xULFFBQVE7WUFDVjtRQUNGO1FBR0YsT0FBTztZQUNMLHdCQUF3QjtZQUN4QlcsVUFBVUcsY0FBY0M7UUFDMUI7SUFDRixHQUFHO1FBQUNmO0tBQVE7SUFFWixxQkFDRSw4REFBQ1IsNERBQWNBO1FBQUNFLE9BQU9BLDhDQUFLQTtrQkFDMUIsNEVBQUNJO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25leXdpei1maW5hbmNlLWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9fYXBwLnRzeFxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnO1xuaW1wb3J0IHN1cGFiYXNlIGZyb20gJy4uL3V0aWxzL3N1cGFiYXNlQ2xpZW50JztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvdXNlU3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHsgc2V0VXNlciB9ID0gdXNlU3RvcmUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEdldCBpbml0aWFsIHNlc3Npb25cbiAgICBjb25zdCBzeW5jVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YTogeyBzZXNzaW9uIH0sXG4gICAgICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRTZXNzaW9uKCk7XG5cbiAgICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgIGlkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB8fCAnJyxcbiAgICAgICAgICBmYW1pbHlfaWQ6IHNlc3Npb24udXNlci51c2VyX21ldGFkYXRhPy5mYW1pbHlfaWQgfHwgJ2RlbW8xMjMnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN5bmNVc2VyKCk7XG5cbiAgICAvLyBTZXQgdXAgcmVhbC10aW1lIHNlc3Npb24gbGlzdGVuZXJcbiAgICBjb25zdCB7IGRhdGE6IGxpc3RlbmVyIH0gPSBzdXBhYmFzZS5hdXRoLm9uQXV0aFN0YXRlQ2hhbmdlKFxuICAgICAgKF9ldmVudCwgc2Vzc2lvbikgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xuICAgICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgaWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfHwgJycsXG4gICAgICAgICAgICBmYW1pbHlfaWQ6IHNlc3Npb24udXNlci51c2VyX21ldGFkYXRhPy5mYW1pbHlfaWQgfHwgJ2RlbW8xMjMnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIENsZWFudXAgYXV0aCBsaXN0ZW5lclxuICAgICAgbGlzdGVuZXI/LnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmU/LigpO1xuICAgIH07XG4gIH0sIFtzZXRVc2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidXNlRWZmZWN0IiwidGhlbWUiLCJzdXBhYmFzZSIsInVzZVN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRVc2VyIiwic3luY1VzZXIiLCJkYXRhIiwic2Vzc2lvbiIsImF1dGgiLCJnZXRTZXNzaW9uIiwidXNlciIsImlkIiwiZW1haWwiLCJmYW1pbHlfaWQiLCJ1c2VyX21ldGFkYXRhIiwibGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInN1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/useStore.ts":
/*!*******************************!*\
  !*** ./src/store/useStore.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        user: null,\n        setUser: (user)=>set({\n                user\n            })\n    }));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvdXNlU3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFhMUIsTUFBTUMsV0FBV0QsK0NBQU1BLENBQVEsQ0FBQ0UsTUFBUztRQUM5Q0MsTUFBTTtRQUNOQyxTQUFTLENBQUNELE9BQVNELElBQUk7Z0JBQUVDO1lBQUs7SUFDaEMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmV5d2l6LWZpbmFuY2UtYXBwLy4vc3JjL3N0b3JlL3VzZVN0b3JlLnRzPzhmZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCc7XG5cbnR5cGUgVXNlciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgZmFtaWx5X2lkOiBzdHJpbmc7XG59O1xuXG50eXBlIFN0b3JlID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgc2V0VXNlcjogKHVzZXI6IFVzZXIgfCBudWxsKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlPFN0b3JlPigoc2V0KSA9PiAoe1xuICB1c2VyOiBudWxsLFxuICBzZXRVc2VyOiAodXNlcikgPT4gc2V0KHsgdXNlciB9KSxcbn0pKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VTdG9yZSIsInNldCIsInVzZXIiLCJzZXRVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/useStore.ts\n");

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/theme/index.ts\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        brand: {\n            50: \"#f5faff\",\n            500: \"#3182ce\",\n            900: \"#1a365d\"\n        }\n    },\n    initialColorMode: \"light\",\n    useSystemColorMode: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQkFBcUI7QUFDMEI7QUFFL0MsTUFBTUMsUUFBUUQsNkRBQVdBLENBQUM7SUFDeEJFLFFBQVE7UUFDTkMsT0FBTztZQUNMLElBQUk7WUFDSixLQUFLO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsa0JBQWtCO0lBQ2xCQyxvQkFBb0I7QUFDdEI7QUFFQSxpRUFBZUosS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbmV5d2l6LWZpbmFuY2UtYXBwLy4vc3JjL3RoZW1lL2luZGV4LnRzP2NjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3RoZW1lL2luZGV4LnRzXG5pbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29sb3JzOiB7XG4gICAgYnJhbmQ6IHtcbiAgICAgIDUwOiAnI2Y1ZmFmZicsXG4gICAgICA1MDA6ICcjMzE4MmNlJyxcbiAgICAgIDkwMDogJyMxYTM2NWQnLFxuICAgIH0sXG4gIH0sXG4gIGluaXRpYWxDb2xvck1vZGU6ICdsaWdodCcsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme/index.ts\n");

/***/ }),

/***/ "./src/utils/supabaseClient.ts":
/*!*************************************!*\
  !*** ./src/utils/supabaseClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://uxljruwhrvbxmnpztlgy.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4bGpydXdocnZieG1ucHp0bGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1Nzg5NTAsImV4cCI6MjA3MDE1NDk1MH0.AsEHBHIxlkmj7_aitkCW6ppO3by9qpXySaIhC8zQgD0\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc3VwYWJhc2VDbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUVqRSxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUk7QUFFM0MsaUVBQWVFLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25leXdpei1maW5hbmNlLWFwcC8uL3NyYy91dGlscy9zdXBhYmFzZUNsaWVudC50cz9lOGIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMITtcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZITtcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlQW5vbktleSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/supabaseClient.ts\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();