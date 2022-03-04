/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const feelsLike = document.getElementById("feelsLike");
        const wind = document.getElementById("wind");
        const humidity = document.getElementById("humidity");

        cityName.textContent = `${weatherData.cityName}`;
        temperature.textContent = `${weatherData.temperature} °F`;
        feelsLike.textContent = `Feels like: ${weatherData.feelsLike} °F`;
        wind.textContent = `Wind: ${weatherData.windSpeed} mph`;
        humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    }

    return {setSearchResult};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: {temp: temperature, feels_like: feelsLike, humidity},
            wind: {speed: windSpeed},
        } = data;
        return {cityName, temperature, feelsLike, humidity, windSpeed};
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6484604c5637f71fab3824f5547af2e1`;
        try {
            const response = await fetch(endpoint, {mode:"cors"});
            if (!response.ok) throw new Error(`City ${city} not found`);
            const data = convertData(await response.json());
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return {getData};
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");



const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(searchInput.value);
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(weatherData);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLHFCQUFxQjtBQUN2RCxxQ0FBcUMseUJBQXlCO0FBQzlELCtDQUErQyx1QkFBdUI7QUFDdEUsb0NBQW9DLHVCQUF1QjtBQUMzRCw0Q0FBNEMsc0JBQXNCO0FBQ2xFOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDdkJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBbUQ7QUFDdEUsbUJBQW1CLGlCQUFpQjtBQUNwQyxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0EsOEVBQThFLEtBQUs7QUFDbkY7QUFDQSxvREFBb0QsWUFBWTtBQUNoRSxzREFBc0QsTUFBTTtBQUM1RDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQsaUVBQWUsT0FBTzs7Ozs7O1VDekJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNOOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDhCQUE4Qix3REFBZTtBQUM3QyxJQUFJLDZEQUFvQjtBQUN4QixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2aWV3ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBzZXRTZWFyY2hSZXN1bHQod2VhdGhlckRhdGEpIHtcbiAgICAgICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoUmVzdWx0XCIpO1xuICAgICAgICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eU5hbWVcIik7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wZXJhdHVyZVwiKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcblxuICAgICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmNpdHlOYW1lfWA7XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEudGVtcGVyYXR1cmV9IMKwRmA7XG4gICAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke3dlYXRoZXJEYXRhLmZlZWxzTGlrZX0gwrBGYDtcbiAgICAgICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke3dlYXRoZXJEYXRhLndpbmRTcGVlZH0gbXBoYDtcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEuaHVtaWRpdHl9ICVgO1xuICAgIH1cblxuICAgIHJldHVybiB7c2V0U2VhcmNoUmVzdWx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY29udmVydERhdGEoZGF0YSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lOiBjaXR5TmFtZSxcbiAgICAgICAgICAgIG1haW46IHt0ZW1wOiB0ZW1wZXJhdHVyZSwgZmVlbHNfbGlrZTogZmVlbHNMaWtlLCBodW1pZGl0eX0sXG4gICAgICAgICAgICB3aW5kOiB7c3BlZWQ6IHdpbmRTcGVlZH0sXG4gICAgICAgIH0gPSBkYXRhO1xuICAgICAgICByZXR1cm4ge2NpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZFNwZWVkfTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPTY0ODQ2MDRjNTYzN2Y3MWZhYjM4MjRmNTU0N2FmMmUxYDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHttb2RlOlwiY29yc1wifSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5fSBub3QgZm91bmRgKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb252ZXJ0RGF0YShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2dldERhdGF9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgd2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB3ZWF0aGVyIGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCB2aWV3IGZyb20gXCIuL3ZpZXdcIjtcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoRm9ybVwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldERhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIHZpZXcuc2V0U2VhcmNoUmVzdWx0KHdlYXRoZXJEYXRhKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==