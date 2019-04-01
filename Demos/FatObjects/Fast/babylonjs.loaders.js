(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-loaders", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-loaders"] = factory(require("babylonjs"));
	else
		root["LOADERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), function(__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./legacy/legacy.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./OBJ/index.ts":
/*!**********************!*\
  !*** ./OBJ/index.ts ***!
  \**********************/
/*! exports provided: MTLFileLoader, OBJFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objFileLoader */ "./OBJ/objFileLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MTLFileLoader", function() { return _objFileLoader__WEBPACK_IMPORTED_MODULE_0__["MTLFileLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBJFileLoader", function() { return _objFileLoader__WEBPACK_IMPORTED_MODULE_0__["OBJFileLoader"]; });




/***/ }),

/***/ "./OBJ/objFileLoader.ts":
/*!******************************!*\
  !*** ./OBJ/objFileLoader.ts ***!
  \******************************/
/*! exports provided: MTLFileLoader, OBJFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTLFileLoader", function() { return MTLFileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJFileLoader", function() { return OBJFileLoader; });
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__);









/**
 * Class reading and parsing the MTL file bundled with the obj file.
 */
class MTLFileLoader {
    constructor() {
        /**
         * All material loaded from the mtl will be set here
         */
        this.materials = [];
    }
    /**
     * This function will read the mtl file and create each material described inside
     * This function could be improve by adding :
     * -some component missing (Ni, Tf...)
     * -including the specific options available
     *
     * @param scene defines the scene the material will be created in
     * @param data defines the mtl data to parse
     * @param rootUrl defines the rooturl to use in order to load relative dependencies
     */
    parseMTL(scene, data, rootUrl) {
        if (data instanceof ArrayBuffer) {
            return;
        }
        //Split the lines from the file
        var lines = data.split('\n');
        //Space char
        var delimiter_pattern = /\s+/;
        //Array with RGB colors
        var color;
        //New material
        var material = null;
        //Look at each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            // Blank line or comment
            if (line.length === 0 || line.charAt(0) === '#') {
                continue;
            }
            //Get the first parameter (keyword)
            var pos = line.indexOf(' ');
            var key = (pos >= 0) ? line.substring(0, pos) : line;
            key = key.toLowerCase();
            //Get the data following the key
            var value = (pos >= 0) ? line.substring(pos + 1).trim() : "";
            //This mtl keyword will create the new material
            if (key === "newmtl") {
                //Check if it is the first material.
                // Materials specifications are described after this keyword.
                if (material) {
                    //Add the previous material in the material array.
                    this.materials.push(material);
                }
                //Create a new material.
                // value is the name of the material read in the mtl file
                material = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"](value, scene);
            }
            else if (key === "kd" && material) {
                // Diffuse color (color under white light) using RGB values
                //value  = "r g b"
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.diffuseColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(color);
            }
            else if (key === "ka" && material) {
                // Ambient color (color under shadow) using RGB values
                //value = "r g b"
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.ambientColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(color);
            }
            else if (key === "ks" && material) {
                // Specular color (color when light is reflected from shiny surface) using RGB values
                //value = "r g b"
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set the color into the material
                material.specularColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(color);
            }
            else if (key === "ke" && material) {
                // Emissive color using RGB values
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                material.emissiveColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(color);
            }
            else if (key === "ns" && material) {
                //value = "Integer"
                material.specularPower = parseFloat(value);
            }
            else if (key === "d" && material) {
                //d is dissolve for current material. It mean alpha for BABYLON
                material.alpha = parseFloat(value);
                //Texture
                //This part can be improved by adding the possible options of texture
            }
            else if (key === "map_ka" && material) {
                // ambient texture map with a loaded image
                //We must first get the folder of the image
                material.ambientTexture = MTLFileLoader._getTexture(rootUrl, value, scene);
            }
            else if (key === "map_kd" && material) {
                // Diffuse texture map with a loaded image
                material.diffuseTexture = MTLFileLoader._getTexture(rootUrl, value, scene);
            }
            else if (key === "map_ks" && material) {
                // Specular texture map with a loaded image
                //We must first get the folder of the image
                material.specularTexture = MTLFileLoader._getTexture(rootUrl, value, scene);
            }
            else if (key === "map_ns") {
                //Specular
                //Specular highlight component
                //We must first get the folder of the image
                //
                //Not supported by BABYLON
                //
                //    continue;
            }
            else if (key === "map_bump" && material) {
                //The bump texture
                material.bumpTexture = MTLFileLoader._getTexture(rootUrl, value, scene);
            }
            else if (key === "map_d" && material) {
                // The dissolve of the material
                material.opacityTexture = MTLFileLoader._getTexture(rootUrl, value, scene);
                //Options for illumination
            }
            else if (key === "illum") {
                //Illumination
                if (value === "0") {
                    //That mean Kd == Kd
                }
                else if (value === "1") {
                    //Color on and Ambient on
                }
                else if (value === "2") {
                    //Highlight on
                }
                else if (value === "3") {
                    //Reflection on and Ray trace on
                }
                else if (value === "4") {
                    //Transparency: Glass on, Reflection: Ray trace on
                }
                else if (value === "5") {
                    //Reflection: Fresnel on and Ray trace on
                }
                else if (value === "6") {
                    //Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
                }
                else if (value === "7") {
                    //Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
                }
                else if (value === "8") {
                    //Reflection on and Ray trace off
                }
                else if (value === "9") {
                    //Transparency: Glass on, Reflection: Ray trace off
                }
                else if (value === "10") {
                    //Casts shadows onto invisible surfaces
                }
            }
            else {
                // console.log("Unhandled expression at line : " + i +'\n' + "with value : " + line);
            }
        }
        //At the end of the file, add the last material
        if (material) {
            this.materials.push(material);
        }
    }
    /**
     * Gets the texture for the material.
     *
     * If the material is imported from input file,
     * We sanitize the url to ensure it takes the textre from aside the material.
     *
     * @param rootUrl The root url to load from
     * @param value The value stored in the mtl
     * @return The Texture
     */
    static _getTexture(rootUrl, value, scene) {
        if (!value) {
            return null;
        }
        var url = rootUrl;
        // Load from input file.
        if (rootUrl === "file:") {
            var lastDelimiter = value.lastIndexOf("\\");
            if (lastDelimiter === -1) {
                lastDelimiter = value.lastIndexOf("/");
            }
            if (lastDelimiter > -1) {
                url += value.substr(lastDelimiter + 1);
            }
            else {
                url += value;
            }
        }
        // Not from input file.
        else {
            url += value;
        }
        return new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Texture"](url, scene);
    }
}
/**
 * OBJ file type loader.
 * This is a babylon scene loader plugin.
 */
class OBJFileLoader {
    /**
     * Creates loader for .OBJ files
     *
     * @param meshLoadOptions options for loading and parsing OBJ/MTL files.
     */
    constructor(meshLoadOptions) {
        /**
         * Defines the name of the plugin.
         */
        this.name = "obj";
        /**
         * Defines the extension the plugin is able to load.
         */
        this.extensions = ".obj";
        /** @hidden */
        this.obj = /^o/;
        /** @hidden */
        this.group = /^g/;
        /** @hidden */
        this.mtllib = /^mtllib /;
        /** @hidden */
        this.usemtl = /^usemtl /;
        /** @hidden */
        this.smooth = /^s /;
        /** @hidden */
        this.vertexPattern = /v( +[\d|\.|\+|\-|e|E]+){3,7}/;
        // vn float float float
        /** @hidden */
        this.normalPattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        // vt float float
        /** @hidden */
        this.uvPattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;
        // f vertex vertex vertex ...
        /** @hidden */
        this.facePattern1 = /f\s+(([\d]{1,}[\s]?){3,})+/;
        // f vertex/uvs vertex/uvs vertex/uvs ...
        /** @hidden */
        this.facePattern2 = /f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
        // f vertex/uvs/normal vertex/uvs/normal vertex/uvs/normal ...
        /** @hidden */
        this.facePattern3 = /f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
        // f vertex//normal vertex//normal vertex//normal ...
        /** @hidden */
        this.facePattern4 = /f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/;
        // f -vertex/-uvs/-normal -vertex/-uvs/-normal -vertex/-uvs/-normal ...
        /** @hidden */
        this.facePattern5 = /f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/;
        this._meshLoadOptions = meshLoadOptions || OBJFileLoader.currentMeshLoadOptions;
    }
    static get currentMeshLoadOptions() {
        return {
            ComputeNormals: OBJFileLoader.COMPUTE_NORMALS,
            ImportVertexColors: OBJFileLoader.IMPORT_VERTEX_COLORS,
            InvertY: OBJFileLoader.INVERT_Y,
            MaterialLoadingFailsSilently: OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY,
            OptimizeWithUV: OBJFileLoader.OPTIMIZE_WITH_UV,
            SkipMaterials: OBJFileLoader.SKIP_MATERIALS
        };
    }
    /**
     * Calls synchronously the MTL file attached to this obj.
     * Load function or importMesh function don't enable to load 2 files in the same time asynchronously.
     * Without this function materials are not displayed in the first frame (but displayed after).
     * In consequence it is impossible to get material information in your HTML file
     *
     * @param url The URL of the MTL file
     * @param rootUrl
     * @param onSuccess Callback function to be called when the MTL file is loaded
     * @private
     */
    _loadMTL(url, rootUrl, onSuccess, onFailure) {
        //The complete path to the mtl file
        var pathOfFile = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].BaseUrl + rootUrl + url;
        // Loads through the babylon tools to allow fileInput search.
        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].LoadFile(pathOfFile, onSuccess, undefined, undefined, false, (request, exception) => {
            onFailure(pathOfFile, exception);
        });
    }
    /**
     * Instantiates a OBJ file loader plugin.
     * @returns the created plugin
     */
    createPlugin() {
        return new OBJFileLoader(OBJFileLoader.currentMeshLoadOptions);
    }
    /**
     * If the data string can be loaded directly.
     *
     * @param data string containing the file data
     * @returns if the data can be loaded directly
     */
    canDirectLoad(data) {
        return false;
    }
    /**
     * Imports one or more meshes from the loaded OBJ data and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @param fileName Defines the name of the file to load
     * @returns a promise containg the loaded meshes, particles, skeletons and animations
     */
    importMeshAsync(meshesNames, scene, data, rootUrl, onProgress, fileName) {
        //get the meshes from OBJ file
        return this._parseSolid(meshesNames, scene, data, rootUrl).then((meshes) => {
            return {
                meshes,
                particleSystems: [],
                skeletons: [],
                animationGroups: []
            };
        });
    }
    /**
     * Imports all objects from the loaded OBJ data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @param fileName Defines the name of the file to load
     * @returns a promise which completes when objects have been loaded to the scene
     */
    loadAsync(scene, data, rootUrl, onProgress, fileName) {
        //Get the 3D model
        return this.importMeshAsync(null, scene, data, rootUrl, onProgress).then(() => {
            // return void
        });
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param onProgress The callback when the load progresses
     * @param fileName Defines the name of the file to load
     * @returns The loaded asset container
     */
    loadAssetContainerAsync(scene, data, rootUrl, onProgress, fileName) {
        return this.importMeshAsync(null, scene, data, rootUrl).then((result) => {
            var container = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["AssetContainer"](scene);
            result.meshes.forEach((mesh) => container.meshes.push(mesh));
            result.meshes.forEach((mesh) => {
                var material = mesh.material;
                if (material) {
                    // Materials
                    if (container.materials.indexOf(material) == -1) {
                        container.materials.push(material);
                        // Textures
                        var textures = material.getActiveTextures();
                        textures.forEach((t) => {
                            if (container.textures.indexOf(t) == -1) {
                                container.textures.push(t);
                            }
                        });
                    }
                }
            });
            container.removeAllFromScene();
            return container;
        });
    }
    /**
     * Read the OBJ file and create an Array of meshes.
     * Each mesh contains all information given by the OBJ and the MTL file.
     * i.e. vertices positions and indices, optional normals values, optional UV values, optional material
     *
     * @param meshesNames
     * @param scene Scene The scene where are displayed the data
     * @param data String The content of the obj file
     * @param rootUrl String The path to the folder
     * @returns Array<AbstractMesh>
     * @private
     */
    _parseSolid(meshesNames, scene, data, rootUrl) {
        var positions = []; //values for the positions of vertices
        var normals = []; //Values for the normals
        var uvs = []; //Values for the textures
        var colors = [];
        var meshesFromObj = []; //[mesh] Contains all the obj meshes
        var handledMesh; //The current mesh of meshes array
        var indicesForBabylon = []; //The list of indices for VertexData
        var wrappedPositionForBabylon = []; //The list of position in vectors
        var wrappedUvsForBabylon = []; //Array with all value of uvs to match with the indices
        var wrappedColorsForBabylon = []; // Array with all color values to match with the indices
        var wrappedNormalsForBabylon = []; //Array with all value of normals to match with the indices
        var tuplePosNorm = []; //Create a tuple with indice of Position, Normal, UV  [pos, norm, uvs]
        var curPositionInIndices = 0;
        var hasMeshes = false; //Meshes are defined in the file
        var unwrappedPositionsForBabylon = []; //Value of positionForBabylon w/o Vector3() [x,y,z]
        var unwrappedColorsForBabylon = []; // Value of colorForBabylon w/o Color4() [r,g,b,a]
        var unwrappedNormalsForBabylon = []; //Value of normalsForBabylon w/o Vector3()  [x,y,z]
        var unwrappedUVForBabylon = []; //Value of uvsForBabylon w/o Vector3()      [x,y,z]
        var triangles = []; //Indices from new triangles coming from polygons
        var materialNameFromObj = ""; //The name of the current material
        var fileToLoad = ""; //The name of the mtlFile to load
        var materialsFromMTLFile = new MTLFileLoader();
        var objMeshName = ""; //The name of the current obj mesh
        var increment = 1; //Id for meshes created by the multimaterial
        var isFirstMaterial = true;
        var grayColor = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color4"](0.5, 0.5, 0.5, 1);
        /**
         * Search for obj in the given array.
         * This function is called to check if a couple of data already exists in an array.
         *
         * If found, returns the index of the founded tuple index. Returns -1 if not found
         * @param arr Array<{ normals: Array<number>, idx: Array<number> }>
         * @param obj Array<number>
         * @returns {boolean}
         */
        var isInArray = (arr, obj) => {
            if (!arr[obj[0]]) {
                arr[obj[0]] = { normals: [], idx: [] };
            }
            var idx = arr[obj[0]].normals.indexOf(obj[1]);
            return idx === -1 ? -1 : arr[obj[0]].idx[idx];
        };
        var isInArrayUV = (arr, obj) => {
            if (!arr[obj[0]]) {
                arr[obj[0]] = { normals: [], idx: [], uv: [] };
            }
            var idx = arr[obj[0]].normals.indexOf(obj[1]);
            if (idx != 1 && (obj[2] === arr[obj[0]].uv[idx])) {
                return arr[obj[0]].idx[idx];
            }
            return -1;
        };
        /**
         * This function set the data for each triangle.
         * Data are position, normals and uvs
         * If a tuple of (position, normal) is not set, add the data into the corresponding array
         * If the tuple already exist, add only their indice
         *
         * @param indicePositionFromObj Integer The index in positions array
         * @param indiceUvsFromObj Integer The index in uvs array
         * @param indiceNormalFromObj Integer The index in normals array
         * @param positionVectorFromOBJ Vector3 The value of position at index objIndice
         * @param textureVectorFromOBJ Vector3 The value of uvs
         * @param normalsVectorFromOBJ Vector3 The value of normals at index objNormale
         */
        var setData = (indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, positionVectorFromOBJ, textureVectorFromOBJ, normalsVectorFromOBJ, positionColorsFromOBJ) => {
            //Check if this tuple already exists in the list of tuples
            var _index;
            if (this._meshLoadOptions.OptimizeWithUV) {
                _index = isInArrayUV(tuplePosNorm, [
                    indicePositionFromObj,
                    indiceNormalFromObj,
                    indiceUvsFromObj
                ]);
            }
            else {
                _index = isInArray(tuplePosNorm, [
                    indicePositionFromObj,
                    indiceNormalFromObj
                ]);
            }
            //If it not exists
            if (_index === -1) {
                //Add an new indice.
                //The array of indices is only an array with his length equal to the number of triangles - 1.
                //We add vertices data in this order
                indicesForBabylon.push(wrappedPositionForBabylon.length);
                //Push the position of vertice for Babylon
                //Each element is a Vector3(x,y,z)
                wrappedPositionForBabylon.push(positionVectorFromOBJ);
                //Push the uvs for Babylon
                //Each element is a Vector3(u,v)
                wrappedUvsForBabylon.push(textureVectorFromOBJ);
                //Push the normals for Babylon
                //Each element is a Vector3(x,y,z)
                wrappedNormalsForBabylon.push(normalsVectorFromOBJ);
                if (positionColorsFromOBJ !== undefined) {
                    //Push the colors for Babylon
                    //Each element is a BABYLON.Color4(r,g,b,a)
                    wrappedColorsForBabylon.push(positionColorsFromOBJ);
                }
                //Add the tuple in the comparison list
                tuplePosNorm[indicePositionFromObj].normals.push(indiceNormalFromObj);
                tuplePosNorm[indicePositionFromObj].idx.push(curPositionInIndices++);
                if (this._meshLoadOptions.OptimizeWithUV) {
                    tuplePosNorm[indicePositionFromObj].uv.push(indiceUvsFromObj);
                }
            }
            else {
                //The tuple already exists
                //Add the index of the already existing tuple
                //At this index we can get the value of position, normal, color and uvs of vertex
                indicesForBabylon.push(_index);
            }
        };
        /**
         * Transform Vector() and BABYLON.Color() objects into numbers in an array
         */
        var unwrapData = () => {
            //Every array has the same length
            for (var l = 0; l < wrappedPositionForBabylon.length; l++) {
                //Push the x, y, z values of each element in the unwrapped array
                unwrappedPositionsForBabylon.push(wrappedPositionForBabylon[l].x, wrappedPositionForBabylon[l].y, wrappedPositionForBabylon[l].z);
                unwrappedNormalsForBabylon.push(wrappedNormalsForBabylon[l].x, wrappedNormalsForBabylon[l].y, wrappedNormalsForBabylon[l].z);
                unwrappedUVForBabylon.push(wrappedUvsForBabylon[l].x, wrappedUvsForBabylon[l].y); //z is an optional value not supported by BABYLON
            }
            if (this._meshLoadOptions.ImportVertexColors === true) {
                //Push the r, g, b, a values of each element in the unwrapped array
                unwrappedColorsForBabylon.push(wrappedColorsForBabylon[l].r, wrappedColorsForBabylon[l].g, wrappedColorsForBabylon[l].b, wrappedColorsForBabylon[l].a);
            }
            // Reset arrays for the next new meshes
            wrappedPositionForBabylon = [];
            wrappedNormalsForBabylon = [];
            wrappedUvsForBabylon = [];
            wrappedColorsForBabylon = [];
            tuplePosNorm = [];
            curPositionInIndices = 0;
        };
        /**
         * Create triangles from polygons by recursion
         * The best to understand how it works is to draw it in the same time you get the recursion.
         * It is important to notice that a triangle is a polygon
         * We get 5 patterns of face defined in OBJ File :
         * facePattern1 = ["1","2","3","4","5","6"]
         * facePattern2 = ["1/1","2/2","3/3","4/4","5/5","6/6"]
         * facePattern3 = ["1/1/1","2/2/2","3/3/3","4/4/4","5/5/5","6/6/6"]
         * facePattern4 = ["1//1","2//2","3//3","4//4","5//5","6//6"]
         * facePattern5 = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-4/-4/-4","-5/-5/-5","-6/-6/-6"]
         * Each pattern is divided by the same method
         * @param face Array[String] The indices of elements
         * @param v Integer The variable to increment
         */
        var getTriangles = (face, v) => {
            //Work for each element of the array
            if (v + 1 < face.length) {
                //Add on the triangle variable the indexes to obtain triangles
                triangles.push(face[0], face[v], face[v + 1]);
                //Incrementation for recursion
                v += 1;
                //Recursion
                getTriangles(face, v);
            }
            //Result obtained after 2 iterations:
            //Pattern1 => triangle = ["1","2","3","1","3","4"];
            //Pattern2 => triangle = ["1/1","2/2","3/3","1/1","3/3","4/4"];
            //Pattern3 => triangle = ["1/1/1","2/2/2","3/3/3","1/1/1","3/3/3","4/4/4"];
            //Pattern4 => triangle = ["1//1","2//2","3//3","1//1","3//3","4//4"];
            //Pattern5 => triangle = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-1/-1/-1","-3/-3/-3","-4/-4/-4"];
        };
        /**
         * Create triangles and push the data for each polygon for the pattern 1
         * In this pattern we get vertice positions
         * @param face
         * @param v
         */
        var setDataForCurrentFaceWithPattern1 = (face, v) => {
            //Get the indices of triangles for each polygon
            getTriangles(face, v);
            //For each element in the triangles array.
            //This var could contains 1 to an infinity of triangles
            for (var k = 0; k < triangles.length; k++) {
                // Set position indice
                var indicePositionFromObj = parseInt(triangles[k]) - 1;
                setData(indicePositionFromObj, 0, 0, //In the pattern 1, normals and uvs are not defined
                positions[indicePositionFromObj], //Get the vectors data
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector2"].Zero(), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Up(), //Create default vectors
                this._meshLoadOptions.ImportVertexColors === true ? colors[indicePositionFromObj] : undefined);
            }
            //Reset variable for the next line
            triangles = [];
        };
        /**
         * Create triangles and push the data for each polygon for the pattern 2
         * In this pattern we get vertice positions and uvsu
         * @param face
         * @param v
         */
        var setDataForCurrentFaceWithPattern2 = (face, v) => {
            //Get the indices of triangles for each polygon
            getTriangles(face, v);
            for (var k = 0; k < triangles.length; k++) {
                //triangle[k] = "1/1"
                //Split the data for getting position and uv
                var point = triangles[k].split("/"); // ["1", "1"]
                //Set position indice
                var indicePositionFromObj = parseInt(point[0]) - 1;
                //Set uv indice
                var indiceUvsFromObj = parseInt(point[1]) - 1;
                setData(indicePositionFromObj, indiceUvsFromObj, 0, //Default value for normals
                positions[indicePositionFromObj], //Get the values for each element
                uvs[indiceUvsFromObj], babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Up(), //Default value for normals
                this._meshLoadOptions.ImportVertexColors === true ? colors[indicePositionFromObj] : undefined);
            }
            //Reset variable for the next line
            triangles = [];
        };
        /**
         * Create triangles and push the data for each polygon for the pattern 3
         * In this pattern we get vertice positions, uvs and normals
         * @param face
         * @param v
         */
        var setDataForCurrentFaceWithPattern3 = (face, v) => {
            //Get the indices of triangles for each polygon
            getTriangles(face, v);
            for (var k = 0; k < triangles.length; k++) {
                //triangle[k] = "1/1/1"
                //Split the data for getting position, uv, and normals
                var point = triangles[k].split("/"); // ["1", "1", "1"]
                // Set position indice
                var indicePositionFromObj = parseInt(point[0]) - 1;
                // Set uv indice
                var indiceUvsFromObj = parseInt(point[1]) - 1;
                // Set normal indice
                var indiceNormalFromObj = parseInt(point[2]) - 1;
                setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, positions[indicePositionFromObj], uvs[indiceUvsFromObj], normals[indiceNormalFromObj] //Set the vector for each component
                );
            }
            //Reset variable for the next line
            triangles = [];
        };
        /**
         * Create triangles and push the data for each polygon for the pattern 4
         * In this pattern we get vertice positions and normals
         * @param face
         * @param v
         */
        var setDataForCurrentFaceWithPattern4 = (face, v) => {
            getTriangles(face, v);
            for (var k = 0; k < triangles.length; k++) {
                //triangle[k] = "1//1"
                //Split the data for getting position and normals
                var point = triangles[k].split("//"); // ["1", "1"]
                // We check indices, and normals
                var indicePositionFromObj = parseInt(point[0]) - 1;
                var indiceNormalFromObj = parseInt(point[1]) - 1;
                setData(indicePositionFromObj, 1, //Default value for uv
                indiceNormalFromObj, positions[indicePositionFromObj], //Get each vector of data
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector2"].Zero(), normals[indiceNormalFromObj], this._meshLoadOptions.ImportVertexColors === true ? colors[indicePositionFromObj] : undefined);
            }
            //Reset variable for the next line
            triangles = [];
        };
        /**
         * Create triangles and push the data for each polygon for the pattern 3
         * In this pattern we get vertice positions, uvs and normals
         * @param face
         * @param v
         */
        var setDataForCurrentFaceWithPattern5 = (face, v) => {
            //Get the indices of triangles for each polygon
            getTriangles(face, v);
            for (var k = 0; k < triangles.length; k++) {
                //triangle[k] = "-1/-1/-1"
                //Split the data for getting position, uv, and normals
                var point = triangles[k].split("/"); // ["-1", "-1", "-1"]
                // Set position indice
                var indicePositionFromObj = positions.length + parseInt(point[0]);
                // Set uv indice
                var indiceUvsFromObj = uvs.length + parseInt(point[1]);
                // Set normal indice
                var indiceNormalFromObj = normals.length + parseInt(point[2]);
                setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, positions[indicePositionFromObj], uvs[indiceUvsFromObj], normals[indiceNormalFromObj], //Set the vector for each component
                this._meshLoadOptions.ImportVertexColors === true ? colors[indicePositionFromObj] : undefined);
            }
            //Reset variable for the next line
            triangles = [];
        };
        var addPreviousObjMesh = () => {
            //Check if it is not the first mesh. Otherwise we don't have data.
            if (meshesFromObj.length > 0) {
                //Get the previous mesh for applying the data about the faces
                //=> in obj file, faces definition append after the name of the mesh
                handledMesh = meshesFromObj[meshesFromObj.length - 1];
                //Set the data into Array for the mesh
                unwrapData();
                // Reverse tab. Otherwise face are displayed in the wrong sens
                indicesForBabylon.reverse();
                //Set the information for the mesh
                //Slice the array to avoid rewriting because of the fact this is the same var which be rewrited
                handledMesh.indices = indicesForBabylon.slice();
                handledMesh.positions = unwrappedPositionsForBabylon.slice();
                handledMesh.normals = unwrappedNormalsForBabylon.slice();
                handledMesh.uvs = unwrappedUVForBabylon.slice();
                if (this._meshLoadOptions.ImportVertexColors === true) {
                    handledMesh.colors = unwrappedColorsForBabylon.slice();
                }
                //Reset the array for the next mesh
                indicesForBabylon = [];
                unwrappedPositionsForBabylon = [];
                unwrappedColorsForBabylon = [];
                unwrappedNormalsForBabylon = [];
                unwrappedUVForBabylon = [];
            }
        };
        //Main function
        //Split the file into lines
        var lines = data.split('\n');
        //Look at each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            var result;
            //Comment or newLine
            if (line.length === 0 || line.charAt(0) === '#') {
                continue;
                //Get information about one position possible for the vertices
            }
            else if (this.vertexPattern.test(line)) {
                result = line.match(/[^ ]+/g); // match will return non-null due to passing regex pattern
                // Value of result with line: "v 1.0 2.0 3.0"
                // ["v", "1.0", "2.0", "3.0"]
                // Create a Vector3 with the position x, y, z
                positions.push(new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"](parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
                if (this._meshLoadOptions.ImportVertexColors === true) {
                    if (result.length >= 7) {
                        // TODO: if these numbers are > 1 we can use Color4.FromInts(r,g,b,a)
                        colors.push(new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color4"](parseFloat(result[4]), parseFloat(result[5]), parseFloat(result[6]), (result.length === 7 || result[7] === undefined) ? 1 : parseFloat(result[7])));
                    }
                    else {
                        // TODO: maybe push NULL and if all are NULL to skip (and remove grayColor var).
                        colors.push(grayColor);
                    }
                }
            }
            else if ((result = this.normalPattern.exec(line)) !== null) {
                //Create a Vector3 with the normals x, y, z
                //Value of result
                // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
                //Add the Vector in the list of normals
                normals.push(new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"](parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
            }
            else if ((result = this.uvPattern.exec(line)) !== null) {
                //Create a Vector2 with the normals u, v
                //Value of result
                // ["vt 0.1 0.2 0.3", "0.1", "0.2"]
                //Add the Vector in the list of uvs
                uvs.push(new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector2"](parseFloat(result[1]), parseFloat(result[2])));
                //Identify patterns of faces
                //Face could be defined in different type of pattern
            }
            else if ((result = this.facePattern3.exec(line)) !== null) {
                //Value of result:
                //["f 1/1/1 2/2/2 3/3/3", "1/1/1 2/2/2 3/3/3"...]
                //Set the data for this face
                setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2", "3/3/3"]
                1);
            }
            else if ((result = this.facePattern4.exec(line)) !== null) {
                //Value of result:
                //["f 1//1 2//2 3//3", "1//1 2//2 3//3"...]
                //Set the data for this face
                setDataForCurrentFaceWithPattern4(result[1].trim().split(" "), // ["1//1", "2//2", "3//3"]
                1);
            }
            else if ((result = this.facePattern5.exec(line)) !== null) {
                //Value of result:
                //["f -1/-1/-1 -2/-2/-2 -3/-3/-3", "-1/-1/-1 -2/-2/-2 -3/-3/-3"...]
                //Set the data for this face
                setDataForCurrentFaceWithPattern5(result[1].trim().split(" "), // ["-1/-1/-1", "-2/-2/-2", "-3/-3/-3"]
                1);
            }
            else if ((result = this.facePattern2.exec(line)) !== null) {
                //Value of result:
                //["f 1/1 2/2 3/3", "1/1 2/2 3/3"...]
                //Set the data for this face
                setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2", "3/3"]
                1);
            }
            else if ((result = this.facePattern1.exec(line)) !== null) {
                //Value of result
                //["f 1 2 3", "1 2 3"...]
                //Set the data for this face
                setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2", "3"]
                1);
                //Define a mesh or an object
                //Each time this keyword is analysed, create a new Object with all data for creating a babylonMesh
            }
            else if (this.group.test(line) || this.obj.test(line)) {
                //Create a new mesh corresponding to the name of the group.
                //Definition of the mesh
                var objMesh = {
                    name: line.substring(2).trim(),
                    indices: undefined,
                    positions: undefined,
                    normals: undefined,
                    uvs: undefined,
                    colors: undefined,
                    materialName: ""
                };
                addPreviousObjMesh();
                //Push the last mesh created with only the name
                meshesFromObj.push(objMesh);
                //Set this variable to indicate that now meshesFromObj has objects defined inside
                hasMeshes = true;
                isFirstMaterial = true;
                increment = 1;
                //Keyword for applying a material
            }
            else if (this.usemtl.test(line)) {
                //Get the name of the material
                materialNameFromObj = line.substring(7).trim();
                //If this new material is in the same mesh
                if (!isFirstMaterial) {
                    //Set the data for the previous mesh
                    addPreviousObjMesh();
                    //Create a new mesh
                    var objMesh = 
                    //Set the name of the current obj mesh
                    {
                        name: objMeshName + "_mm" + increment.toString(),
                        indices: undefined,
                        positions: undefined,
                        normals: undefined,
                        uvs: undefined,
                        colors: undefined,
                        materialName: materialNameFromObj
                    };
                    increment++;
                    //If meshes are already defined
                    meshesFromObj.push(objMesh);
                }
                //Set the material name if the previous line define a mesh
                if (hasMeshes && isFirstMaterial) {
                    //Set the material name to the previous mesh (1 material per mesh)
                    meshesFromObj[meshesFromObj.length - 1].materialName = materialNameFromObj;
                    isFirstMaterial = false;
                }
                //Keyword for loading the mtl file
            }
            else if (this.mtllib.test(line)) {
                //Get the name of mtl file
                fileToLoad = line.substring(7).trim();
                //Apply smoothing
            }
            else if (this.smooth.test(line)) {
                // smooth shading => apply smoothing
                //Today I don't know it work with babylon and with obj.
                //With the obj file  an integer is set
            }
            else {
                //If there is another possibility
                console.log("Unhandled expression at line : " + line);
            }
        }
        //At the end of the file, add the last mesh into the meshesFromObj array
        if (hasMeshes) {
            //Set the data for the last mesh
            handledMesh = meshesFromObj[meshesFromObj.length - 1];
            //Reverse indices for displaying faces in the good sense
            indicesForBabylon.reverse();
            //Get the good array
            unwrapData();
            //Set array
            handledMesh.indices = indicesForBabylon;
            handledMesh.positions = unwrappedPositionsForBabylon;
            handledMesh.normals = unwrappedNormalsForBabylon;
            handledMesh.uvs = unwrappedUVForBabylon;
            if (this._meshLoadOptions.ImportVertexColors === true) {
                handledMesh.colors = unwrappedColorsForBabylon;
            }
        }
        //If any o or g keyword found, create a mesh with a random id
        if (!hasMeshes) {
            // reverse tab of indices
            indicesForBabylon.reverse();
            //Get positions normals uvs
            unwrapData();
            //Set data for one mesh
            meshesFromObj.push({
                name: babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Geometry"].RandomId(),
                indices: indicesForBabylon,
                positions: unwrappedPositionsForBabylon,
                colors: unwrappedColorsForBabylon,
                normals: unwrappedNormalsForBabylon,
                uvs: unwrappedUVForBabylon,
                materialName: materialNameFromObj
            });
        }
        //Create a Mesh list
        var babylonMeshesArray = []; //The mesh for babylon
        var materialToUse = new Array();
        //Set data for each mesh
        for (var j = 0; j < meshesFromObj.length; j++) {
            //check meshesNames (stlFileLoader)
            if (meshesNames && meshesFromObj[j].name) {
                if (meshesNames instanceof Array) {
                    if (meshesNames.indexOf(meshesFromObj[j].name) === -1) {
                        continue;
                    }
                }
                else {
                    if (meshesFromObj[j].name !== meshesNames) {
                        continue;
                    }
                }
            }
            //Get the current mesh
            //Set the data with VertexBuffer for each mesh
            handledMesh = meshesFromObj[j];
            //Create a Mesh with the name of the obj mesh
            var babylonMesh = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Mesh"](meshesFromObj[j].name, scene);
            //Push the name of the material to an array
            //This is indispensable for the importMesh function
            materialToUse.push(meshesFromObj[j].materialName);
            var vertexData = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["VertexData"](); //The container for the values
            //Set the data for the babylonMesh
            vertexData.uvs = handledMesh.uvs;
            vertexData.indices = handledMesh.indices;
            vertexData.positions = handledMesh.positions;
            if (this._meshLoadOptions.ComputeNormals === true) {
                let normals = new Array();
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["VertexData"].ComputeNormals(handledMesh.positions, handledMesh.indices, normals);
                vertexData.normals = normals;
            }
            else {
                vertexData.normals = handledMesh.normals;
            }
            if (this._meshLoadOptions.ImportVertexColors === true) {
                vertexData.colors = handledMesh.colors;
            }
            //Set the data from the VertexBuffer to the current Mesh
            vertexData.applyToMesh(babylonMesh);
            if (this._meshLoadOptions.InvertY) {
                babylonMesh.scaling.y *= -1;
            }
            //Push the mesh into an array
            babylonMeshesArray.push(babylonMesh);
        }
        let mtlPromises = [];
        //load the materials
        //Check if we have a file to load
        if (fileToLoad !== "" && this._meshLoadOptions.SkipMaterials === false) {
            //Load the file synchronously
            mtlPromises.push(new Promise((resolve, reject) => {
                this._loadMTL(fileToLoad, rootUrl, (dataLoaded) => {
                    try {
                        //Create materials thanks MTLLoader function
                        materialsFromMTLFile.parseMTL(scene, dataLoaded, rootUrl);
                        //Look at each material loaded in the mtl file
                        for (var n = 0; n < materialsFromMTLFile.materials.length; n++) {
                            //Three variables to get all meshes with the same material
                            var startIndex = 0;
                            var _indices = [];
                            var _index;
                            //The material from MTL file is used in the meshes loaded
                            //Push the indice in an array
                            //Check if the material is not used for another mesh
                            while ((_index = materialToUse.indexOf(materialsFromMTLFile.materials[n].name, startIndex)) > -1) {
                                _indices.push(_index);
                                startIndex = _index + 1;
                            }
                            //If the material is not used dispose it
                            if (_index === -1 && _indices.length === 0) {
                                //If the material is not needed, remove it
                                materialsFromMTLFile.materials[n].dispose();
                            }
                            else {
                                for (var o = 0; o < _indices.length; o++) {
                                    //Apply the material to the Mesh for each mesh with the material
                                    babylonMeshesArray[_indices[o]].material = materialsFromMTLFile.materials[n];
                                }
                            }
                        }
                        resolve();
                    }
                    catch (e) {
                        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`Error processing MTL file: '${fileToLoad}'`);
                        if (this._meshLoadOptions.MaterialLoadingFailsSilently) {
                            resolve();
                        }
                        else {
                            reject(e);
                        }
                    }
                }, (pathOfFile, exception) => {
                    babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`Error downloading MTL file: '${fileToLoad}'`);
                    if (this._meshLoadOptions.MaterialLoadingFailsSilently) {
                        resolve();
                    }
                    else {
                        reject(exception);
                    }
                });
            }));
        }
        //Return an array with all Mesh
        return Promise.all(mtlPromises).then(() => {
            return babylonMeshesArray;
        });
    }
}
/**
 * Defines if UVs are optimized by default during load.
 */
OBJFileLoader.OPTIMIZE_WITH_UV = false;
/**
 * Invert model on y-axis (does a model scaling inversion)
 */
OBJFileLoader.INVERT_Y = false;
/**
 * Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.
 */
OBJFileLoader.IMPORT_VERTEX_COLORS = false;
/**
 * Compute the normals for the model, even if normals are present in the file.
 */
OBJFileLoader.COMPUTE_NORMALS = false;
/**
 * Skip loading the materials even if defined in the OBJ file (materials are ignored).
 */
OBJFileLoader.SKIP_MATERIALS = false;
/**
 * When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.
 *
 * Defaults to true for backwards compatibility.
 */
OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY = true;
if (babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"]) {
    //Add this loader into the register plugin
    babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].RegisterPlugin(new OBJFileLoader());
}


/***/ }),

/***/ "./STL/index.ts":
/*!**********************!*\
  !*** ./STL/index.ts ***!
  \**********************/
/*! exports provided: STLFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stlFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stlFileLoader */ "./STL/stlFileLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STLFileLoader", function() { return _stlFileLoader__WEBPACK_IMPORTED_MODULE_0__["STLFileLoader"]; });




/***/ }),

/***/ "./STL/stlFileLoader.ts":
/*!******************************!*\
  !*** ./STL/stlFileLoader.ts ***!
  \******************************/
/*! exports provided: STLFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STLFileLoader", function() { return STLFileLoader; });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);





/**
 * STL file type loader.
 * This is a babylon scene loader plugin.
 */
class STLFileLoader {
    constructor() {
        /** @hidden */
        this.solidPattern = /solid (\S*)([\S\s]*)endsolid[ ]*(\S*)/g;
        /** @hidden */
        this.facetsPattern = /facet([\s\S]*?)endfacet/g;
        /** @hidden */
        this.normalPattern = /normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;
        /** @hidden */
        this.vertexPattern = /vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;
        /**
         * Defines the name of the plugin.
         */
        this.name = "stl";
        /**
         * Defines the extensions the stl loader is able to load.
         * force data to come in as an ArrayBuffer
         * we'll convert to string if it looks like it's an ASCII .stl
         */
        this.extensions = {
            ".stl": { isBinary: true },
        };
    }
    /**
     * Import meshes into a scene.
     * @param meshesNames An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     * @param scene The scene to import into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param meshes The meshes array to import into
     * @param particleSystems The particle systems array to import into
     * @param skeletons The skeletons array to import into
     * @param onError The callback when import fails
     * @returns True if successful or false otherwise
     */
    importMesh(meshesNames, scene, data, rootUrl, meshes, particleSystems, skeletons) {
        var matches;
        if (typeof data !== "string") {
            if (this._isBinary(data)) {
                // binary .stl
                var babylonMesh = new babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["Mesh"]("stlmesh", scene);
                this._parseBinary(babylonMesh, data);
                if (meshes) {
                    meshes.push(babylonMesh);
                }
                return true;
            }
            // ASCII .stl
            // convert to string
            var array_buffer = new Uint8Array(data);
            var str = '';
            for (var i = 0; i < data.byteLength; i++) {
                str += String.fromCharCode(array_buffer[i]); // implicitly assumes little-endian
            }
            data = str;
        }
        //if arrived here, data is a string, containing the STLA data.
        while (matches = this.solidPattern.exec(data)) {
            var meshName = matches[1];
            var meshNameFromEnd = matches[3];
            if (meshName != meshNameFromEnd) {
                babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["Tools"].Error("Error in STL, solid name != endsolid name");
                return false;
            }
            // check meshesNames
            if (meshesNames && meshName) {
                if (meshesNames instanceof Array) {
                    if (!meshesNames.indexOf(meshName)) {
                        continue;
                    }
                }
                else {
                    if (meshName !== meshesNames) {
                        continue;
                    }
                }
            }
            // stl mesh name can be empty as well
            meshName = meshName || "stlmesh";
            var babylonMesh = new babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["Mesh"](meshName, scene);
            this._parseASCII(babylonMesh, matches[2]);
            if (meshes) {
                meshes.push(babylonMesh);
            }
        }
        return true;
    }
    /**
     * Load into a scene.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param onError The callback when import fails
     * @returns true if successful or false otherwise
     */
    load(scene, data, rootUrl) {
        var result = this.importMesh(null, scene, data, rootUrl, null, null, null);
        if (result) {
            scene.createDefaultLight();
            scene.createDefaultCameraOrLight();
        }
        return result;
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param onError The callback when import fails
     * @returns The loaded asset container
     */
    loadAssetContainer(scene, data, rootUrl, onError) {
        var container = new babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["AssetContainer"](scene);
        this.importMesh(null, scene, data, rootUrl, container.meshes, null, null);
        container.removeAllFromScene();
        return container;
    }
    _isBinary(data) {
        // check if file size is correct for binary stl
        var faceSize, nFaces, reader;
        reader = new DataView(data);
        faceSize = (32 / 8 * 3) + ((32 / 8 * 3) * 3) + (16 / 8);
        nFaces = reader.getUint32(80, true);
        if (80 + (32 / 8) + (nFaces * faceSize) === reader.byteLength) {
            return true;
        }
        // check characters higher than ASCII to confirm binary
        var fileLength = reader.byteLength;
        for (var index = 0; index < fileLength; index++) {
            if (reader.getUint8(index) > 127) {
                return true;
            }
        }
        return false;
    }
    _parseBinary(mesh, data) {
        var reader = new DataView(data);
        var faces = reader.getUint32(80, true);
        var dataOffset = 84;
        var faceLength = 12 * 4 + 2;
        var offset = 0;
        var positions = new Float32Array(faces * 3 * 3);
        var normals = new Float32Array(faces * 3 * 3);
        var indices = new Uint32Array(faces * 3);
        var indicesCount = 0;
        for (var face = 0; face < faces; face++) {
            var start = dataOffset + face * faceLength;
            var normalX = reader.getFloat32(start, true);
            var normalY = reader.getFloat32(start + 4, true);
            var normalZ = reader.getFloat32(start + 8, true);
            for (var i = 1; i <= 3; i++) {
                var vertexstart = start + i * 12;
                // ordering is intentional to match ascii import
                positions[offset] = reader.getFloat32(vertexstart, true);
                positions[offset + 2] = reader.getFloat32(vertexstart + 4, true);
                positions[offset + 1] = reader.getFloat32(vertexstart + 8, true);
                normals[offset] = normalX;
                normals[offset + 2] = normalY;
                normals[offset + 1] = normalZ;
                offset += 3;
            }
            indices[indicesCount] = indicesCount++;
            indices[indicesCount] = indicesCount++;
            indices[indicesCount] = indicesCount++;
        }
        mesh.setVerticesData(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].PositionKind, positions);
        mesh.setVerticesData(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].NormalKind, normals);
        mesh.setIndices(indices);
        mesh.computeWorldMatrix(true);
    }
    _parseASCII(mesh, solidData) {
        var positions = [];
        var normals = [];
        var indices = [];
        var indicesCount = 0;
        //load facets, ignoring loop as the standard doesn't define it can contain more than vertices
        var matches;
        while (matches = this.facetsPattern.exec(solidData)) {
            var facet = matches[1];
            //one normal per face
            var normalMatches = this.normalPattern.exec(facet);
            this.normalPattern.lastIndex = 0;
            if (!normalMatches) {
                continue;
            }
            var normal = [Number(normalMatches[1]), Number(normalMatches[5]), Number(normalMatches[3])];
            var vertexMatch;
            while (vertexMatch = this.vertexPattern.exec(facet)) {
                positions.push(Number(vertexMatch[1]), Number(vertexMatch[5]), Number(vertexMatch[3]));
                normals.push(normal[0], normal[1], normal[2]);
            }
            indices.push(indicesCount++, indicesCount++, indicesCount++);
            this.vertexPattern.lastIndex = 0;
        }
        this.facetsPattern.lastIndex = 0;
        mesh.setVerticesData(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].PositionKind, positions);
        mesh.setVerticesData(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].NormalKind, normals);
        mesh.setIndices(indices);
        mesh.computeWorldMatrix(true);
    }
}
if (babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"]) {
    babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].RegisterPlugin(new STLFileLoader());
}


/***/ }),

/***/ "./glTF/1.0/glTFBinaryExtension.ts":
/*!*****************************************!*\
  !*** ./glTF/1.0/glTFBinaryExtension.ts ***!
  \*****************************************/
/*! exports provided: GLTFBinaryExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFBinaryExtension", function() { return GLTFBinaryExtension; });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "./glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoaderUtils */ "./glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "./glTF/1.0/glTFLoaderInterfaces.ts");




const BinaryExtensionBufferName = "binary_glTF";
/** @hidden */
class GLTFBinaryExtension extends _glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderExtension"] {
    constructor() {
        super("KHR_binary_glTF");
    }
    loadRuntimeAsync(scene, data, rootUrl, onSuccess, onError) {
        var extensionsUsed = data.json.extensionsUsed;
        if (!extensionsUsed || extensionsUsed.indexOf(this.name) === -1 || !data.bin) {
            return false;
        }
        this._bin = data.bin;
        onSuccess(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderBase"].CreateRuntime(data.json, scene, rootUrl));
        return true;
    }
    loadBufferAsync(gltfRuntime, id, onSuccess, onError) {
        if (gltfRuntime.extensionsUsed.indexOf(this.name) === -1) {
            return false;
        }
        if (id !== BinaryExtensionBufferName) {
            return false;
        }
        onSuccess(this._bin);
        return true;
    }
    loadTextureBufferAsync(gltfRuntime, id, onSuccess, onError) {
        var texture = gltfRuntime.textures[id];
        var source = gltfRuntime.images[texture.source];
        if (!source.extensions || !(this.name in source.extensions)) {
            return false;
        }
        var sourceExt = source.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[sourceExt.bufferView];
        var buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__["GLTFUtils"].GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["EComponentType"].UNSIGNED_BYTE);
        onSuccess(buffer);
        return true;
    }
    loadShaderStringAsync(gltfRuntime, id, onSuccess, onError) {
        var shader = gltfRuntime.shaders[id];
        if (!shader.extensions || !(this.name in shader.extensions)) {
            return false;
        }
        var binaryExtensionShader = shader.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[binaryExtensionShader.bufferView];
        var shaderBytes = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__["GLTFUtils"].GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["EComponentType"].UNSIGNED_BYTE);
        setTimeout(() => {
            var shaderString = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__["GLTFUtils"].DecodeBufferToText(shaderBytes);
            onSuccess(shaderString);
        });
        return true;
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoader"].RegisterExtension(new GLTFBinaryExtension());


/***/ }),

/***/ "./glTF/1.0/glTFLoader.ts":
/*!********************************!*\
  !*** ./glTF/1.0/glTFLoader.ts ***!
  \********************************/
/*! exports provided: GLTFLoaderBase, GLTFLoader, GLTFLoaderExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderBase", function() { return GLTFLoaderBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoader", function() { return GLTFLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderExtension", function() { return GLTFLoaderExtension; });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "./glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderUtils */ "./glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFFileLoader */ "./glTF/glTFFileLoader.ts");



























/**
* Tokenizer. Used for shaders compatibility
* Automatically map world, view, projection, worldViewProjection, attributes and so on
*/
var ETokenType;
(function (ETokenType) {
    ETokenType[ETokenType["IDENTIFIER"] = 1] = "IDENTIFIER";
    ETokenType[ETokenType["UNKNOWN"] = 2] = "UNKNOWN";
    ETokenType[ETokenType["END_OF_INPUT"] = 3] = "END_OF_INPUT";
})(ETokenType || (ETokenType = {}));
class Tokenizer {
    constructor(toParse) {
        this._pos = 0;
        this.currentToken = ETokenType.UNKNOWN;
        this.currentIdentifier = "";
        this.currentString = "";
        this.isLetterOrDigitPattern = /^[a-zA-Z0-9]+$/;
        this._toParse = toParse;
        this._maxPos = toParse.length;
    }
    getNextToken() {
        if (this.isEnd()) {
            return ETokenType.END_OF_INPUT;
        }
        this.currentString = this.read();
        this.currentToken = ETokenType.UNKNOWN;
        if (this.currentString === "_" || this.isLetterOrDigitPattern.test(this.currentString)) {
            this.currentToken = ETokenType.IDENTIFIER;
            this.currentIdentifier = this.currentString;
            while (!this.isEnd() && (this.isLetterOrDigitPattern.test(this.currentString = this.peek()) || this.currentString === "_")) {
                this.currentIdentifier += this.currentString;
                this.forward();
            }
        }
        return this.currentToken;
    }
    peek() {
        return this._toParse[this._pos];
    }
    read() {
        return this._toParse[this._pos++];
    }
    forward() {
        this._pos++;
    }
    isEnd() {
        return this._pos >= this._maxPos;
    }
}
/**
* Values
*/
var glTFTransforms = ["MODEL", "VIEW", "PROJECTION", "MODELVIEW", "MODELVIEWPROJECTION", "JOINTMATRIX"];
var babylonTransforms = ["world", "view", "projection", "worldView", "worldViewProjection", "mBones"];
var glTFAnimationPaths = ["translation", "rotation", "scale"];
var babylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
/**
* Parse
*/
var parseBuffers = (parsedBuffers, gltfRuntime) => {
    for (var buf in parsedBuffers) {
        var parsedBuffer = parsedBuffers[buf];
        gltfRuntime.buffers[buf] = parsedBuffer;
        gltfRuntime.buffersCount++;
    }
};
var parseShaders = (parsedShaders, gltfRuntime) => {
    for (var sha in parsedShaders) {
        var parsedShader = parsedShaders[sha];
        gltfRuntime.shaders[sha] = parsedShader;
        gltfRuntime.shaderscount++;
    }
};
var parseObject = (parsedObjects, runtimeProperty, gltfRuntime) => {
    for (var object in parsedObjects) {
        var parsedObject = parsedObjects[object];
        gltfRuntime[runtimeProperty][object] = parsedObject;
    }
};
/**
* Utils
*/
var normalizeUVs = (buffer) => {
    if (!buffer) {
        return;
    }
    for (var i = 0; i < buffer.length / 2; i++) {
        buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
    }
};
var getAttribute = (attributeParameter) => {
    if (attributeParameter.semantic === "NORMAL") {
        return "normal";
    }
    else if (attributeParameter.semantic === "POSITION") {
        return "position";
    }
    else if (attributeParameter.semantic === "JOINT") {
        return "matricesIndices";
    }
    else if (attributeParameter.semantic === "WEIGHT") {
        return "matricesWeights";
    }
    else if (attributeParameter.semantic === "COLOR") {
        return "color";
    }
    else if (attributeParameter.semantic && attributeParameter.semantic.indexOf("TEXCOORD_") !== -1) {
        var channel = Number(attributeParameter.semantic.split("_")[1]);
        return "uv" + (channel === 0 ? "" : channel + 1);
    }
    return null;
};
/**
* Loads and creates animations
*/
var loadAnimations = (gltfRuntime) => {
    for (var anim in gltfRuntime.animations) {
        var animation = gltfRuntime.animations[anim];
        if (!animation.channels || !animation.samplers) {
            continue;
        }
        var lastAnimation = null;
        for (var i = 0; i < animation.channels.length; i++) {
            // Get parameters and load buffers
            var channel = animation.channels[i];
            var sampler = animation.samplers[channel.sampler];
            if (!sampler) {
                continue;
            }
            var inputData = null;
            var outputData = null;
            if (animation.parameters) {
                inputData = animation.parameters[sampler.input];
                outputData = animation.parameters[sampler.output];
            }
            else {
                inputData = sampler.input;
                outputData = sampler.output;
            }
            var bufferInput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[inputData]);
            var bufferOutput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[outputData]);
            var targetID = channel.target.id;
            var targetNode = gltfRuntime.scene.getNodeByID(targetID);
            if (targetNode === null) {
                targetNode = gltfRuntime.scene.getNodeByName(targetID);
            }
            if (targetNode === null) {
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Warn("Creating animation named " + anim + ". But cannot find node named " + targetID + " to attach to");
                continue;
            }
            var isBone = targetNode instanceof babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Bone"];
            // Get target path (position, rotation or scaling)
            var targetPath = channel.target.path;
            var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
            if (targetPathIndex !== -1) {
                targetPath = babylonAnimationPaths[targetPathIndex];
            }
            // Determine animation type
            var animationType = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Animation"].ANIMATIONTYPE_MATRIX;
            if (!isBone) {
                if (targetPath === "rotationQuaternion") {
                    animationType = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Animation"].ANIMATIONTYPE_QUATERNION;
                    targetNode.rotationQuaternion = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"]();
                }
                else {
                    animationType = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Animation"].ANIMATIONTYPE_VECTOR3;
                }
            }
            // Create animation and key frames
            var babylonAnimation = null;
            var keys = [];
            var arrayOffset = 0;
            var modifyKey = false;
            if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                babylonAnimation = lastAnimation;
                modifyKey = true;
            }
            if (!modifyKey) {
                babylonAnimation = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Animation"](anim, isBone ? "_matrix" : targetPath, 1, animationType, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Animation"].ANIMATIONLOOPMODE_CYCLE);
            }
            // For each frame
            for (var j = 0; j < bufferInput.length; j++) {
                var value = null;
                if (targetPath === "rotationQuaternion") { // VEC4
                    value = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"].FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                    arrayOffset += 4;
                }
                else { // Position and scaling are VEC3
                    value = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                    arrayOffset += 3;
                }
                if (isBone) {
                    var bone = targetNode;
                    var translation = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero();
                    var rotationQuaternion = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"]();
                    var scaling = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero();
                    // Warning on decompose
                    var mat = bone.getBaseMatrix();
                    if (modifyKey && lastAnimation) {
                        mat = lastAnimation.getKeys()[j].value;
                    }
                    mat.decompose(scaling, rotationQuaternion, translation);
                    if (targetPath === "position") {
                        translation = value;
                    }
                    else if (targetPath === "rotationQuaternion") {
                        rotationQuaternion = value;
                    }
                    else {
                        scaling = value;
                    }
                    value = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].Compose(scaling, rotationQuaternion, translation);
                }
                if (!modifyKey) {
                    keys.push({
                        frame: bufferInput[j],
                        value: value
                    });
                }
                else if (lastAnimation) {
                    lastAnimation.getKeys()[j].value = value;
                }
            }
            // Finish
            if (!modifyKey && babylonAnimation) {
                babylonAnimation.setKeys(keys);
                targetNode.animations.push(babylonAnimation);
            }
            lastAnimation = babylonAnimation;
            gltfRuntime.scene.stopAnimation(targetNode);
            gltfRuntime.scene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
        }
    }
};
/**
* Returns the bones transformation matrix
*/
var configureBoneTransformation = (node) => {
    var mat = null;
    if (node.translation || node.rotation || node.scale) {
        var scale = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(node.scale || [1, 1, 1]);
        var rotation = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"].FromArray(node.rotation || [0, 0, 0, 1]);
        var position = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(node.translation || [0, 0, 0]);
        mat = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].Compose(scale, rotation, position);
    }
    else {
        mat = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].FromArray(node.matrix);
    }
    return mat;
};
/**
* Returns the parent bone
*/
var getParentBone = (gltfRuntime, skins, jointName, newSkeleton) => {
    // Try to find
    for (var i = 0; i < newSkeleton.bones.length; i++) {
        if (newSkeleton.bones[i].name === jointName) {
            return newSkeleton.bones[i];
        }
    }
    // Not found, search in gltf nodes
    var nodes = gltfRuntime.nodes;
    for (var nde in nodes) {
        var node = nodes[nde];
        if (!node.jointName) {
            continue;
        }
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            var child = gltfRuntime.nodes[children[i]];
            if (!child.jointName) {
                continue;
            }
            if (child.jointName === jointName) {
                var mat = configureBoneTransformation(node);
                var bone = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Bone"](node.name || "", newSkeleton, getParentBone(gltfRuntime, skins, node.jointName, newSkeleton), mat);
                bone.id = nde;
                return bone;
            }
        }
    }
    return null;
};
/**
* Returns the appropriate root node
*/
var getNodeToRoot = (nodesToRoot, id) => {
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        for (var j = 0; j < nodeToRoot.node.children.length; j++) {
            var child = nodeToRoot.node.children[j];
            if (child === id) {
                return nodeToRoot.bone;
            }
        }
    }
    return null;
};
/**
* Returns the node with the joint name
*/
var getJointNode = (gltfRuntime, jointName) => {
    var nodes = gltfRuntime.nodes;
    var node = nodes[jointName];
    if (node) {
        return {
            node: node,
            id: jointName
        };
    }
    for (var nde in nodes) {
        node = nodes[nde];
        if (node.jointName === jointName) {
            return {
                node: node,
                id: nde
            };
        }
    }
    return null;
};
/**
* Checks if a nodes is in joints
*/
var nodeIsInJoints = (skins, id) => {
    for (var i = 0; i < skins.jointNames.length; i++) {
        if (skins.jointNames[i] === id) {
            return true;
        }
    }
    return false;
};
/**
* Fills the nodes to root for bones and builds hierarchy
*/
var getNodesToRoot = (gltfRuntime, newSkeleton, skins, nodesToRoot) => {
    // Creates nodes for root
    for (var nde in gltfRuntime.nodes) {
        var node = gltfRuntime.nodes[nde];
        var id = nde;
        if (!node.jointName || nodeIsInJoints(skins, node.jointName)) {
            continue;
        }
        // Create node to root bone
        var mat = configureBoneTransformation(node);
        var bone = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Bone"](node.name || "", newSkeleton, null, mat);
        bone.id = id;
        nodesToRoot.push({ bone: bone, node: node, id: id });
    }
    // Parenting
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        var children = nodeToRoot.node.children;
        for (var j = 0; j < children.length; j++) {
            var child = null;
            for (var k = 0; k < nodesToRoot.length; k++) {
                if (nodesToRoot[k].id === children[j]) {
                    child = nodesToRoot[k];
                    break;
                }
            }
            if (child) {
                child.bone._parent = nodeToRoot.bone;
                nodeToRoot.bone.children.push(child.bone);
            }
        }
    }
};
/**
* Imports a skeleton
*/
var importSkeleton = (gltfRuntime, skins, mesh, newSkeleton, id) => {
    if (!newSkeleton) {
        newSkeleton = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Skeleton"](skins.name || "", "", gltfRuntime.scene);
    }
    if (!skins.babylonSkeleton) {
        return newSkeleton;
    }
    // Find the root bones
    var nodesToRoot = [];
    var nodesToRootToAdd = [];
    getNodesToRoot(gltfRuntime, newSkeleton, skins, nodesToRoot);
    newSkeleton.bones = [];
    // Joints
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        var node = jointNode.node;
        if (!node) {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Warn("Joint named " + skins.jointNames[i] + " does not exist");
            continue;
        }
        var id = jointNode.id;
        // Optimize, if the bone already exists...
        var existingBone = gltfRuntime.scene.getBoneByID(id);
        if (existingBone) {
            newSkeleton.bones.push(existingBone);
            continue;
        }
        // Search for parent bone
        var foundBone = false;
        var parentBone = null;
        for (var j = 0; j < i; j++) {
            let jointNode = getJointNode(gltfRuntime, skins.jointNames[j]);
            if (!jointNode) {
                continue;
            }
            var joint = jointNode.node;
            if (!joint) {
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Warn("Joint named " + skins.jointNames[j] + " does not exist when looking for parent");
                continue;
            }
            var children = joint.children;
            if (!children) {
                continue;
            }
            foundBone = false;
            for (var k = 0; k < children.length; k++) {
                if (children[k] === id) {
                    parentBone = getParentBone(gltfRuntime, skins, skins.jointNames[j], newSkeleton);
                    foundBone = true;
                    break;
                }
            }
            if (foundBone) {
                break;
            }
        }
        // Create bone
        var mat = configureBoneTransformation(node);
        if (!parentBone && nodesToRoot.length > 0) {
            parentBone = getNodeToRoot(nodesToRoot, id);
            if (parentBone) {
                if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                    nodesToRootToAdd.push(parentBone);
                }
            }
        }
        var bone = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Bone"](node.jointName || "", newSkeleton, parentBone, mat);
        bone.id = id;
    }
    // Polish
    var bones = newSkeleton.bones;
    newSkeleton.bones = [];
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        for (var j = 0; j < bones.length; j++) {
            if (bones[j].id === jointNode.id) {
                newSkeleton.bones.push(bones[j]);
                break;
            }
        }
    }
    newSkeleton.prepare();
    // Finish
    for (var i = 0; i < nodesToRootToAdd.length; i++) {
        newSkeleton.bones.push(nodesToRootToAdd[i]);
    }
    return newSkeleton;
};
/**
* Imports a mesh and its geometries
*/
var importMesh = (gltfRuntime, node, meshes, id, newMesh) => {
    if (!newMesh) {
        newMesh = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Mesh"](node.name || "", gltfRuntime.scene);
        newMesh.id = id;
    }
    if (!node.babylonNode) {
        return newMesh;
    }
    const subMaterials = [];
    var vertexData = null;
    var verticesStarts = new Array();
    var verticesCounts = new Array();
    var indexStarts = new Array();
    var indexCounts = new Array();
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshID = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshID];
        if (!mesh) {
            continue;
        }
        // Positions, normals and UVs
        for (var i = 0; i < mesh.primitives.length; i++) {
            // Temporary vertex data
            var tempVertexData = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["VertexData"]();
            var primitive = mesh.primitives[i];
            if (primitive.mode !== 4) {
                // continue;
            }
            var attributes = primitive.attributes;
            var accessor = null;
            var buffer = null;
            // Set positions, normal and uvs
            for (var semantic in attributes) {
                // Link accessor and buffer view
                accessor = gltfRuntime.accessors[attributes[semantic]];
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetBufferFromAccessor(gltfRuntime, accessor);
                if (semantic === "NORMAL") {
                    tempVertexData.normals = new Float32Array(buffer.length);
                    tempVertexData.normals.set(buffer);
                }
                else if (semantic === "POSITION") {
                    if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFFileLoader"].HomogeneousCoordinates) {
                        tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                        for (var j = 0; j < buffer.length; j += 4) {
                            tempVertexData.positions[j] = buffer[j];
                            tempVertexData.positions[j + 1] = buffer[j + 1];
                            tempVertexData.positions[j + 2] = buffer[j + 2];
                        }
                    }
                    else {
                        tempVertexData.positions = new Float32Array(buffer.length);
                        tempVertexData.positions.set(buffer);
                    }
                    verticesCounts.push(tempVertexData.positions.length);
                }
                else if (semantic.indexOf("TEXCOORD_") !== -1) {
                    var channel = Number(semantic.split("_")[1]);
                    var uvKind = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["VertexBuffer"].UVKind + (channel === 0 ? "" : (channel + 1));
                    var uvs = new Float32Array(buffer.length);
                    uvs.set(buffer);
                    normalizeUVs(uvs);
                    tempVertexData.set(uvs, uvKind);
                }
                else if (semantic === "JOINT") {
                    tempVertexData.matricesIndices = new Float32Array(buffer.length);
                    tempVertexData.matricesIndices.set(buffer);
                }
                else if (semantic === "WEIGHT") {
                    tempVertexData.matricesWeights = new Float32Array(buffer.length);
                    tempVertexData.matricesWeights.set(buffer);
                }
                else if (semantic === "COLOR") {
                    tempVertexData.colors = new Float32Array(buffer.length);
                    tempVertexData.colors.set(buffer);
                }
            }
            // Indices
            accessor = gltfRuntime.accessors[primitive.indices];
            if (accessor) {
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetBufferFromAccessor(gltfRuntime, accessor);
                tempVertexData.indices = new Int32Array(buffer.length);
                tempVertexData.indices.set(buffer);
                indexCounts.push(tempVertexData.indices.length);
            }
            else {
                // Set indices on the fly
                var indices = [];
                for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                    indices.push(j);
                }
                tempVertexData.indices = new Int32Array(indices);
                indexCounts.push(tempVertexData.indices.length);
            }
            if (!vertexData) {
                vertexData = tempVertexData;
            }
            else {
                vertexData.merge(tempVertexData);
            }
            // Sub material
            let material = gltfRuntime.scene.getMaterialByID(primitive.material);
            subMaterials.push(material === null ? _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetDefaultMaterial(gltfRuntime.scene) : material);
            // Update vertices start and index start
            verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
            indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
        }
    }
    let material;
    if (subMaterials.length > 1) {
        material = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["MultiMaterial"]("multimat" + id, gltfRuntime.scene);
        material.subMaterials = subMaterials;
    }
    else {
        material = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]("multimat" + id, gltfRuntime.scene);
    }
    if (subMaterials.length === 1) {
        material = subMaterials[0];
    }
    if (!newMesh.material) {
        newMesh.material = material;
    }
    // Apply geometry
    new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Geometry"](id, gltfRuntime.scene, vertexData, false, newMesh);
    newMesh.computeWorldMatrix(true);
    // Apply submeshes
    newMesh.subMeshes = [];
    var index = 0;
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshID = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshID];
        if (!mesh) {
            continue;
        }
        for (var i = 0; i < mesh.primitives.length; i++) {
            if (mesh.primitives[i].mode !== 4) {
                //continue;
            }
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["SubMesh"].AddToMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], newMesh, newMesh, true);
            index++;
        }
    }
    // Finish
    return newMesh;
};
/**
* Configure node transformation from position, rotation and scaling
*/
var configureNode = (newNode, position, rotation, scaling) => {
    if (newNode.position) {
        newNode.position = position;
    }
    if (newNode.rotationQuaternion || newNode.rotation) {
        newNode.rotationQuaternion = rotation;
    }
    if (newNode.scaling) {
        newNode.scaling = scaling;
    }
};
/**
* Configures node from transformation matrix
*/
var configureNodeFromMatrix = (newNode, node, parent) => {
    if (node.matrix) {
        var position = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
        var rotation = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"]();
        var scaling = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
        var mat = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].FromArray(node.matrix);
        mat.decompose(scaling, rotation, position);
        configureNode(newNode, position, rotation, scaling);
    }
    else if (node.translation && node.rotation && node.scale) {
        configureNode(newNode, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(node.translation), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"].FromArray(node.rotation), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(node.scale));
    }
    newNode.computeWorldMatrix(true);
};
/**
* Imports a node
*/
var importNode = (gltfRuntime, node, id, parent) => {
    var lastNode = null;
    if (gltfRuntime.importOnlyMeshes && (node.skin || node.meshes)) {
        if (gltfRuntime.importMeshesNames && gltfRuntime.importMeshesNames.length > 0 && gltfRuntime.importMeshesNames.indexOf(node.name || "") === -1) {
            return null;
        }
    }
    // Meshes
    if (node.skin) {
        if (node.meshes) {
            var skin = gltfRuntime.skins[node.skin];
            var newMesh = importMesh(gltfRuntime, node, node.meshes, id, node.babylonNode);
            newMesh.skeleton = gltfRuntime.scene.getLastSkeletonByID(node.skin);
            if (newMesh.skeleton === null) {
                newMesh.skeleton = importSkeleton(gltfRuntime, skin, newMesh, skin.babylonSkeleton, node.skin);
                if (!skin.babylonSkeleton) {
                    skin.babylonSkeleton = newMesh.skeleton;
                }
            }
            lastNode = newMesh;
        }
    }
    else if (node.meshes) {
        /**
        * Improve meshes property
        */
        var newMesh = importMesh(gltfRuntime, node, node.mesh ? [node.mesh] : node.meshes, id, node.babylonNode);
        lastNode = newMesh;
    }
    // Lights
    else if (node.light && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var light = gltfRuntime.lights[node.light];
        if (light) {
            if (light.type === "ambient") {
                var ambienLight = light[light.type];
                var hemiLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["HemisphericLight"](node.light, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), gltfRuntime.scene);
                hemiLight.name = node.name || "";
                if (ambienLight.color) {
                    hemiLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(ambienLight.color);
                }
                lastNode = hemiLight;
            }
            else if (light.type === "directional") {
                var directionalLight = light[light.type];
                var dirLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](node.light, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), gltfRuntime.scene);
                dirLight.name = node.name || "";
                if (directionalLight.color) {
                    dirLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(directionalLight.color);
                }
                lastNode = dirLight;
            }
            else if (light.type === "point") {
                var pointLight = light[light.type];
                var ptLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["PointLight"](node.light, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), gltfRuntime.scene);
                ptLight.name = node.name || "";
                if (pointLight.color) {
                    ptLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(pointLight.color);
                }
                lastNode = ptLight;
            }
            else if (light.type === "spot") {
                var spotLight = light[light.type];
                var spLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["SpotLight"](node.light, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), 0, 0, gltfRuntime.scene);
                spLight.name = node.name || "";
                if (spotLight.color) {
                    spLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(spotLight.color);
                }
                if (spotLight.fallOfAngle) {
                    spLight.angle = spotLight.fallOfAngle;
                }
                if (spotLight.fallOffExponent) {
                    spLight.exponent = spotLight.fallOffExponent;
                }
                lastNode = spLight;
            }
        }
    }
    // Cameras
    else if (node.camera && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var camera = gltfRuntime.cameras[node.camera];
        if (camera) {
            if (camera.type === "orthographic") {
                var orthoCamera = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["FreeCamera"](node.camera, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), gltfRuntime.scene, false);
                orthoCamera.name = node.name || "";
                orthoCamera.mode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Camera"].ORTHOGRAPHIC_CAMERA;
                orthoCamera.attachControl(gltfRuntime.scene.getEngine().getRenderingCanvas());
                lastNode = orthoCamera;
            }
            else if (camera.type === "perspective") {
                var perspectiveCamera = camera[camera.type];
                var persCamera = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["FreeCamera"](node.camera, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero(), gltfRuntime.scene, false);
                persCamera.name = node.name || "";
                persCamera.attachControl(gltfRuntime.scene.getEngine().getRenderingCanvas());
                if (!perspectiveCamera.aspectRatio) {
                    perspectiveCamera.aspectRatio = gltfRuntime.scene.getEngine().getRenderWidth() / gltfRuntime.scene.getEngine().getRenderHeight();
                }
                if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                    persCamera.maxZ = perspectiveCamera.zfar;
                    persCamera.minZ = perspectiveCamera.znear;
                }
                lastNode = persCamera;
            }
        }
    }
    // Empty node
    if (!node.jointName) {
        if (node.babylonNode) {
            return node.babylonNode;
        }
        else if (lastNode === null) {
            var dummy = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Mesh"](node.name || "", gltfRuntime.scene);
            node.babylonNode = dummy;
            lastNode = dummy;
        }
    }
    if (lastNode !== null) {
        if (node.matrix && lastNode instanceof babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
            configureNodeFromMatrix(lastNode, node, parent);
        }
        else {
            var translation = node.translation || [0, 0, 0];
            var rotation = node.rotation || [0, 0, 0, 1];
            var scale = node.scale || [1, 1, 1];
            configureNode(lastNode, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(translation), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Quaternion"].FromArray(rotation), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(scale));
        }
        lastNode.updateCache(true);
        node.babylonNode = lastNode;
    }
    return lastNode;
};
/**
* Traverses nodes and creates them
*/
var traverseNodes = (gltfRuntime, id, parent, meshIncluded = false) => {
    var node = gltfRuntime.nodes[id];
    var newNode = null;
    if (gltfRuntime.importOnlyMeshes && !meshIncluded && gltfRuntime.importMeshesNames) {
        if (gltfRuntime.importMeshesNames.indexOf(node.name || "") !== -1 || gltfRuntime.importMeshesNames.length === 0) {
            meshIncluded = true;
        }
        else {
            meshIncluded = false;
        }
    }
    else {
        meshIncluded = true;
    }
    if (!node.jointName && meshIncluded) {
        newNode = importNode(gltfRuntime, node, id, parent);
        if (newNode !== null) {
            newNode.id = id;
            newNode.parent = parent;
        }
    }
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverseNodes(gltfRuntime, node.children[i], newNode, meshIncluded);
        }
    }
};
/**
* do stuff after buffers, shaders are loaded (e.g. hook up materials, load animations, etc.)
*/
var postLoad = (gltfRuntime) => {
    // Nodes
    var currentScene = gltfRuntime.currentScene;
    if (currentScene) {
        for (var i = 0; i < currentScene.nodes.length; i++) {
            traverseNodes(gltfRuntime, currentScene.nodes[i], null);
        }
    }
    else {
        for (var thing in gltfRuntime.scenes) {
            currentScene = gltfRuntime.scenes[thing];
            for (var i = 0; i < currentScene.nodes.length; i++) {
                traverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
    }
    // Set animations
    loadAnimations(gltfRuntime);
    for (var i = 0; i < gltfRuntime.scene.skeletons.length; i++) {
        var skeleton = gltfRuntime.scene.skeletons[i];
        gltfRuntime.scene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
    }
};
/**
* onBind shaderrs callback to set uniforms and matrices
*/
var onBindShaderMaterial = (mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess) => {
    var materialValues = material.values || technique.parameters;
    for (var unif in unTreatedUniforms) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_MAT2 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_MAT3 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_MAT4) {
            if (uniform.semantic && !uniform.source && !uniform.node) {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].SetMatrix(gltfRuntime.scene, mesh, uniform, unif, shaderMaterial.getEffect());
            }
            else if (uniform.semantic && (uniform.source || uniform.node)) {
                var source = gltfRuntime.scene.getNodeByName(uniform.source || uniform.node || "");
                if (source === null) {
                    source = gltfRuntime.scene.getNodeByID(uniform.source || uniform.node || "");
                }
                if (source === null) {
                    continue;
                }
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].SetMatrix(gltfRuntime.scene, source, uniform, unif, shaderMaterial.getEffect());
            }
        }
        else {
            var value = materialValues[technique.uniforms[unif]];
            if (!value) {
                continue;
            }
            if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].SAMPLER_2D) {
                var texture = gltfRuntime.textures[material.values ? value : uniform.value].babylonTexture;
                if (texture === null || texture === undefined) {
                    continue;
                }
                shaderMaterial.getEffect().setTexture(unif, texture);
            }
            else {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].SetUniform((shaderMaterial.getEffect()), unif, value, type);
            }
        }
    }
    onSuccess(shaderMaterial);
};
/**
* Prepare uniforms to send the only one time
* Loads the appropriate textures
*/
var prepareShaderMaterialUniforms = (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms) => {
    var materialValues = material.values || technique.parameters;
    var techniqueUniforms = technique.uniforms;
    /**
    * Prepare values here (not matrices)
    */
    for (var unif in unTreatedUniforms) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        var value = materialValues[techniqueUniforms[unif]];
        if (value === undefined) {
            // In case the value is the same for all materials
            value = uniform.value;
        }
        if (!value) {
            continue;
        }
        var onLoadTexture = (uniformName) => {
            return (texture) => {
                if (uniform.value && uniformName) {
                    // Static uniform
                    shaderMaterial.setTexture(uniformName, texture);
                    delete unTreatedUniforms[uniformName];
                }
            };
        };
        // Texture (sampler2D)
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].SAMPLER_2D) {
            GLTFLoaderExtension.LoadTextureAsync(gltfRuntime, material.values ? value : uniform.value, onLoadTexture(unif), () => onLoadTexture(null));
        }
        // Others
        else {
            if (uniform.value && _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].SetUniform(shaderMaterial, unif, material.values ? value : uniform.value, type)) {
                // Static uniform
                delete unTreatedUniforms[unif];
            }
        }
    }
};
/**
* Shader compilation failed
*/
var onShaderCompileError = (program, shaderMaterial, onError) => {
    return (effect, error) => {
        shaderMaterial.dispose(true);
        onError("Cannot compile program named " + program.name + ". Error: " + error + ". Default material will be applied");
    };
};
/**
* Shader compilation success
*/
var onShaderCompileSuccess = (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess) => {
    return (_) => {
        prepareShaderMaterialUniforms(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms);
        shaderMaterial.onBind = (mesh) => {
            onBindShaderMaterial(mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess);
        };
    };
};
/**
* Returns the appropriate uniform if already handled by babylon
*/
var parseShaderUniforms = (tokenizer, technique, unTreatedUniforms) => {
    for (var unif in technique.uniforms) {
        var uniform = technique.uniforms[unif];
        var uniformParameter = technique.parameters[uniform];
        if (tokenizer.currentIdentifier === unif) {
            if (uniformParameter.semantic && !uniformParameter.source && !uniformParameter.node) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    delete unTreatedUniforms[unif];
                    return babylonTransforms[transformIndex];
                }
            }
        }
    }
    return tokenizer.currentIdentifier;
};
/**
* All shaders loaded. Create materials one by one
*/
var importMaterials = (gltfRuntime) => {
    // Create materials
    for (var mat in gltfRuntime.materials) {
        GLTFLoaderExtension.LoadMaterialAsync(gltfRuntime, mat, (material) => { }, () => { });
    }
};
/**
* Implementation of the base glTF spec
* @hidden
*/
class GLTFLoaderBase {
    static CreateRuntime(parsedData, scene, rootUrl) {
        var gltfRuntime = {
            extensions: {},
            accessors: {},
            buffers: {},
            bufferViews: {},
            meshes: {},
            lights: {},
            cameras: {},
            nodes: {},
            images: {},
            textures: {},
            shaders: {},
            programs: {},
            samplers: {},
            techniques: {},
            materials: {},
            animations: {},
            skins: {},
            extensionsUsed: [],
            scenes: {},
            buffersCount: 0,
            shaderscount: 0,
            scene: scene,
            rootUrl: rootUrl,
            loadedBufferCount: 0,
            loadedBufferViews: {},
            loadedShaderCount: 0,
            importOnlyMeshes: false,
            dummyNodes: []
        };
        // Parse
        if (parsedData.extensions) {
            parseObject(parsedData.extensions, "extensions", gltfRuntime);
        }
        if (parsedData.extensionsUsed) {
            parseObject(parsedData.extensionsUsed, "extensionsUsed", gltfRuntime);
        }
        if (parsedData.buffers) {
            parseBuffers(parsedData.buffers, gltfRuntime);
        }
        if (parsedData.bufferViews) {
            parseObject(parsedData.bufferViews, "bufferViews", gltfRuntime);
        }
        if (parsedData.accessors) {
            parseObject(parsedData.accessors, "accessors", gltfRuntime);
        }
        if (parsedData.meshes) {
            parseObject(parsedData.meshes, "meshes", gltfRuntime);
        }
        if (parsedData.lights) {
            parseObject(parsedData.lights, "lights", gltfRuntime);
        }
        if (parsedData.cameras) {
            parseObject(parsedData.cameras, "cameras", gltfRuntime);
        }
        if (parsedData.nodes) {
            parseObject(parsedData.nodes, "nodes", gltfRuntime);
        }
        if (parsedData.images) {
            parseObject(parsedData.images, "images", gltfRuntime);
        }
        if (parsedData.textures) {
            parseObject(parsedData.textures, "textures", gltfRuntime);
        }
        if (parsedData.shaders) {
            parseShaders(parsedData.shaders, gltfRuntime);
        }
        if (parsedData.programs) {
            parseObject(parsedData.programs, "programs", gltfRuntime);
        }
        if (parsedData.samplers) {
            parseObject(parsedData.samplers, "samplers", gltfRuntime);
        }
        if (parsedData.techniques) {
            parseObject(parsedData.techniques, "techniques", gltfRuntime);
        }
        if (parsedData.materials) {
            parseObject(parsedData.materials, "materials", gltfRuntime);
        }
        if (parsedData.animations) {
            parseObject(parsedData.animations, "animations", gltfRuntime);
        }
        if (parsedData.skins) {
            parseObject(parsedData.skins, "skins", gltfRuntime);
        }
        if (parsedData.scenes) {
            gltfRuntime.scenes = parsedData.scenes;
        }
        if (parsedData.scene && parsedData.scenes) {
            gltfRuntime.currentScene = parsedData.scenes[parsedData.scene];
        }
        return gltfRuntime;
    }
    static LoadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress) {
        var buffer = gltfRuntime.buffers[id];
        if (babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].IsBase64(buffer.uri)) {
            setTimeout(() => onSuccess(new Uint8Array(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].DecodeBase64(buffer.uri))));
        }
        else {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].LoadFile(gltfRuntime.rootUrl + buffer.uri, (data) => onSuccess(new Uint8Array(data)), onProgress, undefined, true, (request) => {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    }
    static LoadTextureBufferAsync(gltfRuntime, id, onSuccess, onError) {
        var texture = gltfRuntime.textures[id];
        if (!texture || !texture.source) {
            onError("");
            return;
        }
        if (texture.babylonTexture) {
            onSuccess(null);
            return;
        }
        var source = gltfRuntime.images[texture.source];
        if (babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].IsBase64(source.uri)) {
            setTimeout(() => onSuccess(new Uint8Array(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].DecodeBase64(source.uri))));
        }
        else {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].LoadFile(gltfRuntime.rootUrl + source.uri, (data) => onSuccess(new Uint8Array(data)), undefined, undefined, true, (request) => {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    }
    static CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError) {
        var texture = gltfRuntime.textures[id];
        if (texture.babylonTexture) {
            onSuccess(texture.babylonTexture);
            return;
        }
        var sampler = gltfRuntime.samplers[texture.sampler];
        var createMipMaps = (sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].NEAREST_MIPMAP_NEAREST) ||
            (sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].NEAREST_MIPMAP_LINEAR) ||
            (sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].LINEAR_MIPMAP_NEAREST) ||
            (sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].LINEAR_MIPMAP_LINEAR);
        var samplingMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].BILINEAR_SAMPLINGMODE;
        var blob = buffer == null ? new Blob() : new Blob([buffer]);
        var blobURL = URL.createObjectURL(blob);
        var revokeBlobURL = () => URL.revokeObjectURL(blobURL);
        var newTexture = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"](blobURL, gltfRuntime.scene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
        if (sampler.wrapS !== undefined) {
            newTexture.wrapU = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetWrapMode(sampler.wrapS);
        }
        if (sampler.wrapT !== undefined) {
            newTexture.wrapV = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__["GLTFUtils"].GetWrapMode(sampler.wrapT);
        }
        newTexture.name = id;
        texture.babylonTexture = newTexture;
        onSuccess(newTexture);
    }
    static LoadShaderStringAsync(gltfRuntime, id, onSuccess, onError) {
        var shader = gltfRuntime.shaders[id];
        if (babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].IsBase64(shader.uri)) {
            var shaderString = atob(shader.uri.split(",")[1]);
            if (onSuccess) {
                onSuccess(shaderString);
            }
        }
        else {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].LoadFile(gltfRuntime.rootUrl + shader.uri, onSuccess, undefined, undefined, false, (request) => {
                if (request && onError) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    }
    static LoadMaterialAsync(gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material.technique) {
            if (onError) {
                onError("No technique found.");
            }
            return;
        }
        var technique = gltfRuntime.techniques[material.technique];
        if (!technique) {
            var defaultMaterial = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](id, gltfRuntime.scene);
            defaultMaterial.diffuseColor = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"](0.5, 0.5, 0.5);
            defaultMaterial.sideOrientation = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Material"].CounterClockWiseSideOrientation;
            onSuccess(defaultMaterial);
            return;
        }
        var program = gltfRuntime.programs[technique.program];
        var states = technique.states;
        var vertexShader = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore[program.vertexShader + "VertexShader"];
        var pixelShader = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore[program.fragmentShader + "PixelShader"];
        var newVertexShader = "";
        var newPixelShader = "";
        var vertexTokenizer = new Tokenizer(vertexShader);
        var pixelTokenizer = new Tokenizer(pixelShader);
        var unTreatedUniforms = {};
        var uniforms = [];
        var attributes = [];
        var samplers = [];
        // Fill uniform, sampler2D and attributes
        for (var unif in technique.uniforms) {
            var uniform = technique.uniforms[unif];
            var uniformParameter = technique.parameters[uniform];
            unTreatedUniforms[unif] = uniformParameter;
            if (uniformParameter.semantic && !uniformParameter.node && !uniformParameter.source) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    uniforms.push(babylonTransforms[transformIndex]);
                    delete unTreatedUniforms[unif];
                }
                else {
                    uniforms.push(unif);
                }
            }
            else if (uniformParameter.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].SAMPLER_2D) {
                samplers.push(unif);
            }
            else {
                uniforms.push(unif);
            }
        }
        for (var attr in technique.attributes) {
            var attribute = technique.attributes[attr];
            var attributeParameter = technique.parameters[attribute];
            if (attributeParameter.semantic) {
                let name = getAttribute(attributeParameter);
                if (name) {
                    attributes.push(name);
                }
            }
        }
        // Configure vertex shader
        while (!vertexTokenizer.isEnd() && vertexTokenizer.getNextToken()) {
            var tokenType = vertexTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newVertexShader += vertexTokenizer.currentString;
                continue;
            }
            var foundAttribute = false;
            for (var attr in technique.attributes) {
                var attribute = technique.attributes[attr];
                var attributeParameter = technique.parameters[attribute];
                if (vertexTokenizer.currentIdentifier === attr && attributeParameter.semantic) {
                    newVertexShader += getAttribute(attributeParameter);
                    foundAttribute = true;
                    break;
                }
            }
            if (foundAttribute) {
                continue;
            }
            newVertexShader += parseShaderUniforms(vertexTokenizer, technique, unTreatedUniforms);
        }
        // Configure pixel shader
        while (!pixelTokenizer.isEnd() && pixelTokenizer.getNextToken()) {
            var tokenType = pixelTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newPixelShader += pixelTokenizer.currentString;
                continue;
            }
            newPixelShader += parseShaderUniforms(pixelTokenizer, technique, unTreatedUniforms);
        }
        // Create shader material
        var shaderPath = {
            vertex: program.vertexShader + id,
            fragment: program.fragmentShader + id
        };
        var options = {
            attributes: attributes,
            uniforms: uniforms,
            samplers: samplers,
            needAlphaBlending: states && states.enable && states.enable.indexOf(3042) !== -1
        };
        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore[program.vertexShader + id + "VertexShader"] = newVertexShader;
        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore[program.fragmentShader + id + "PixelShader"] = newPixelShader;
        var shaderMaterial = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"](id, gltfRuntime.scene, shaderPath, options);
        shaderMaterial.onError = onShaderCompileError(program, shaderMaterial, onError);
        shaderMaterial.onCompiled = onShaderCompileSuccess(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess);
        shaderMaterial.sideOrientation = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Material"].CounterClockWiseSideOrientation;
        if (states && states.functions) {
            var functions = states.functions;
            if (functions.cullFace && functions.cullFace[0] !== _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ECullingType"].BACK) {
                shaderMaterial.backFaceCulling = false;
            }
            var blendFunc = functions.blendFuncSeparate;
            if (blendFunc) {
                if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].SRC_ALPHA && blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE_MINUS_SRC_ALPHA && blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Engine"].ALPHA_COMBINE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ZERO && blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Engine"].ALPHA_ONEONE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].SRC_ALPHA && blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ZERO && blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Engine"].ALPHA_ADD;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ZERO && blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE_MINUS_SRC_COLOR && blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Engine"].ALPHA_SUBTRACT;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].DST_COLOR && blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ZERO && blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Engine"].ALPHA_MULTIPLY;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].SRC_ALPHA && blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE_MINUS_SRC_COLOR && blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE && blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EBlendingFunction"].ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Engine"].ALPHA_MAXIMIZED;
                }
            }
        }
    }
}
/**
* glTF V1 Loader
* @hidden
*/
class GLTFLoader {
    constructor() {
        this.state = null;
    }
    static RegisterExtension(extension) {
        if (GLTFLoader.Extensions[extension.name]) {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("Tool with the same name \"" + extension.name + "\" already exists");
            return;
        }
        GLTFLoader.Extensions[extension.name] = extension;
    }
    dispose() {
        // do nothing
    }
    _importMeshAsync(meshesNames, scene, data, rootUrl, onSuccess, onProgress, onError) {
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, (gltfRuntime) => {
            gltfRuntime.importOnlyMeshes = true;
            if (meshesNames === "") {
                gltfRuntime.importMeshesNames = [];
            }
            else if (typeof meshesNames === "string") {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else if (meshesNames && !(meshesNames instanceof Array)) {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else {
                gltfRuntime.importMeshesNames = [];
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Warn("Argument meshesNames must be of type string or string[]");
            }
            // Create nodes
            this._createNodes(gltfRuntime);
            var meshes = new Array();
            var skeletons = new Array();
            // Fill arrays of meshes and skeletons
            for (var nde in gltfRuntime.nodes) {
                var node = gltfRuntime.nodes[nde];
                if (node.babylonNode instanceof babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["AbstractMesh"]) {
                    meshes.push(node.babylonNode);
                }
            }
            for (var skl in gltfRuntime.skins) {
                var skin = gltfRuntime.skins[skl];
                if (skin.babylonSkeleton instanceof babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Skeleton"]) {
                    skeletons.push(skin.babylonSkeleton);
                }
            }
            // Load buffers, shaders, materials, etc.
            this._loadBuffersAsync(gltfRuntime, () => {
                this._loadShadersAsync(gltfRuntime, () => {
                    importMaterials(gltfRuntime);
                    postLoad(gltfRuntime);
                    if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFFileLoader"].IncrementalLoading && onSuccess) {
                        onSuccess(meshes, skeletons);
                    }
                });
            }, onProgress);
            if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFFileLoader"].IncrementalLoading && onSuccess) {
                onSuccess(meshes, skeletons);
            }
        }, onError);
        return true;
    }
    /**
    * Imports one or more meshes from a loaded gltf file and adds them to the scene
    * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
    * @param scene the scene the meshes should be added to
    * @param data gltf data containing information of the meshes in a loaded file
    * @param rootUrl root url to load from
    * @param onProgress event that fires when loading progress has occured
    * @returns a promise containg the loaded meshes, particles, skeletons and animations
    */
    importMeshAsync(meshesNames, scene, data, rootUrl, onProgress) {
        return new Promise((resolve, reject) => {
            this._importMeshAsync(meshesNames, scene, data, rootUrl, (meshes, skeletons) => {
                resolve({
                    meshes: meshes,
                    particleSystems: [],
                    skeletons: skeletons,
                    animationGroups: []
                });
            }, onProgress, (message) => {
                reject(new Error(message));
            });
        });
    }
    _loadAsync(scene, data, rootUrl, onSuccess, onProgress, onError) {
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, (gltfRuntime) => {
            // Load runtime extensios
            GLTFLoaderExtension.LoadRuntimeExtensionsAsync(gltfRuntime, () => {
                // Create nodes
                this._createNodes(gltfRuntime);
                // Load buffers, shaders, materials, etc.
                this._loadBuffersAsync(gltfRuntime, () => {
                    this._loadShadersAsync(gltfRuntime, () => {
                        importMaterials(gltfRuntime);
                        postLoad(gltfRuntime);
                        if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFFileLoader"].IncrementalLoading) {
                            onSuccess();
                        }
                    });
                });
                if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFFileLoader"].IncrementalLoading) {
                    onSuccess();
                }
            }, onError);
        }, onError);
    }
    /**
    * Imports all objects from a loaded gltf file and adds them to the scene
    * @param scene the scene the objects should be added to
    * @param data gltf data containing information of the meshes in a loaded file
    * @param rootUrl root url to load from
    * @param onProgress event that fires when loading progress has occured
    * @returns a promise which completes when objects have been loaded to the scene
    */
    loadAsync(scene, data, rootUrl, onProgress) {
        return new Promise((resolve, reject) => {
            this._loadAsync(scene, data, rootUrl, () => {
                resolve();
            }, onProgress, (message) => {
                reject(new Error(message));
            });
        });
    }
    _loadShadersAsync(gltfRuntime, onload) {
        var hasShaders = false;
        var processShader = (sha, shader) => {
            GLTFLoaderExtension.LoadShaderStringAsync(gltfRuntime, sha, (shaderString) => {
                if (shaderString instanceof ArrayBuffer) {
                    return;
                }
                gltfRuntime.loadedShaderCount++;
                if (shaderString) {
                    babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore[sha + (shader.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EShaderType"].VERTEX ? "VertexShader" : "PixelShader")] = shaderString;
                }
                if (gltfRuntime.loadedShaderCount === gltfRuntime.shaderscount) {
                    onload();
                }
            }, () => {
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("Error when loading shader program named " + sha + " located at " + shader.uri);
            });
        };
        for (var sha in gltfRuntime.shaders) {
            hasShaders = true;
            var shader = gltfRuntime.shaders[sha];
            if (shader) {
                processShader.bind(this, sha, shader)();
            }
            else {
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("No shader named: " + sha);
            }
        }
        if (!hasShaders) {
            onload();
        }
    }
    _loadBuffersAsync(gltfRuntime, onLoad, onProgress) {
        var hasBuffers = false;
        var processBuffer = (buf, buffer) => {
            GLTFLoaderExtension.LoadBufferAsync(gltfRuntime, buf, (bufferView) => {
                gltfRuntime.loadedBufferCount++;
                if (bufferView) {
                    if (bufferView.byteLength != gltfRuntime.buffers[buf].byteLength) {
                        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("Buffer named " + buf + " is length " + bufferView.byteLength + ". Expected: " + buffer.byteLength); // Improve error message
                    }
                    gltfRuntime.loadedBufferViews[buf] = bufferView;
                }
                if (gltfRuntime.loadedBufferCount === gltfRuntime.buffersCount) {
                    onLoad();
                }
            }, () => {
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("Error when loading buffer named " + buf + " located at " + buffer.uri);
            });
        };
        for (var buf in gltfRuntime.buffers) {
            hasBuffers = true;
            var buffer = gltfRuntime.buffers[buf];
            if (buffer) {
                processBuffer.bind(this, buf, buffer)();
            }
            else {
                babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("No buffer named: " + buf);
            }
        }
        if (!hasBuffers) {
            onLoad();
        }
    }
    _createNodes(gltfRuntime) {
        var currentScene = gltfRuntime.currentScene;
        if (currentScene) {
            // Only one scene even if multiple scenes are defined
            for (var i = 0; i < currentScene.nodes.length; i++) {
                traverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
        else {
            // Load all scenes
            for (var thing in gltfRuntime.scenes) {
                currentScene = gltfRuntime.scenes[thing];
                for (var i = 0; i < currentScene.nodes.length; i++) {
                    traverseNodes(gltfRuntime, currentScene.nodes[i], null);
                }
            }
        }
    }
}
GLTFLoader.Extensions = {};
/** @hidden */
class GLTFLoaderExtension {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    /**
    * Defines an override for loading the runtime
    * Return true to stop further extensions from loading the runtime
    */
    loadRuntimeAsync(scene, data, rootUrl, onSuccess, onError) {
        return false;
    }
    /**
     * Defines an onverride for creating gltf runtime
     * Return true to stop further extensions from creating the runtime
     */
    loadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError) {
        return false;
    }
    /**
    * Defines an override for loading buffers
    * Return true to stop further extensions from loading this buffer
    */
    loadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress) {
        return false;
    }
    /**
    * Defines an override for loading texture buffers
    * Return true to stop further extensions from loading this texture data
    */
    loadTextureBufferAsync(gltfRuntime, id, onSuccess, onError) {
        return false;
    }
    /**
    * Defines an override for creating textures
    * Return true to stop further extensions from loading this texture
    */
    createTextureAsync(gltfRuntime, id, buffer, onSuccess, onError) {
        return false;
    }
    /**
    * Defines an override for loading shader strings
    * Return true to stop further extensions from loading this shader data
    */
    loadShaderStringAsync(gltfRuntime, id, onSuccess, onError) {
        return false;
    }
    /**
    * Defines an override for loading materials
    * Return true to stop further extensions from loading this material
    */
    loadMaterialAsync(gltfRuntime, id, onSuccess, onError) {
        return false;
    }
    // ---------
    // Utilities
    // ---------
    static LoadRuntimeAsync(scene, data, rootUrl, onSuccess, onError) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.loadRuntimeAsync(scene, data, rootUrl, onSuccess, onError);
        }, () => {
            setTimeout(() => {
                if (!onSuccess) {
                    return;
                }
                onSuccess(GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
            });
        });
    }
    static LoadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.loadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError);
        }, () => {
            setTimeout(() => {
                onSuccess();
            });
        });
    }
    static LoadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.loadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        }, () => {
            GLTFLoaderBase.LoadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        });
    }
    static LoadTextureAsync(gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension.LoadTextureBufferAsync(gltfRuntime, id, (buffer) => {
            if (buffer) {
                GLTFLoaderExtension.CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
            }
        }, onError);
    }
    static LoadShaderStringAsync(gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.loadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        }, () => {
            GLTFLoaderBase.LoadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        });
    }
    static LoadMaterialAsync(gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.loadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        }, () => {
            GLTFLoaderBase.LoadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        });
    }
    static LoadTextureBufferAsync(gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.loadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        }, () => {
            GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        });
    }
    static CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError) {
        GLTFLoaderExtension.ApplyExtensions((loaderExtension) => {
            return loaderExtension.createTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
        }, () => {
            GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
        });
    }
    static ApplyExtensions(func, defaultFunc) {
        for (var extensionName in GLTFLoader.Extensions) {
            var loaderExtension = GLTFLoader.Extensions[extensionName];
            if (func(loaderExtension)) {
                return;
            }
        }
        defaultFunc();
    }
}
_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFFileLoader"]._CreateGLTF1Loader = () => new GLTFLoader();


/***/ }),

/***/ "./glTF/1.0/glTFLoaderInterfaces.ts":
/*!******************************************!*\
  !*** ./glTF/1.0/glTFLoaderInterfaces.ts ***!
  \******************************************/
/*! exports provided: EComponentType, EShaderType, EParameterType, ETextureWrapMode, ETextureFilterType, ETextureFormat, ECullingType, EBlendingFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EComponentType", function() { return EComponentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EShaderType", function() { return EShaderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EParameterType", function() { return EParameterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureWrapMode", function() { return ETextureWrapMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureFilterType", function() { return ETextureFilterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETextureFormat", function() { return ETextureFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECullingType", function() { return ECullingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EBlendingFunction", function() { return EBlendingFunction; });
/**
* Enums
* @hidden
*/
var EComponentType;
(function (EComponentType) {
    EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
    EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
    EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
})(EComponentType || (EComponentType = {}));
/** @hidden */
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["FRAGMENT"] = 35632] = "FRAGMENT";
    EShaderType[EShaderType["VERTEX"] = 35633] = "VERTEX";
})(EShaderType || (EShaderType = {}));
/** @hidden */
var EParameterType;
(function (EParameterType) {
    EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
    EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
    EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EParameterType[EParameterType["INT"] = 5124] = "INT";
    EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
    EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
    EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
    EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
    EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
    EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
})(EParameterType || (EParameterType = {}));
/** @hidden */
var ETextureWrapMode;
(function (ETextureWrapMode) {
    ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
})(ETextureWrapMode || (ETextureWrapMode = {}));
/** @hidden */
var ETextureFilterType;
(function (ETextureFilterType) {
    ETextureFilterType[ETextureFilterType["NEAREST"] = 9728] = "NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR"] = 9728] = "LINEAR";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
})(ETextureFilterType || (ETextureFilterType = {}));
/** @hidden */
var ETextureFormat;
(function (ETextureFormat) {
    ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
    ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
    ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
    ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
    ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
})(ETextureFormat || (ETextureFormat = {}));
/** @hidden */
var ECullingType;
(function (ECullingType) {
    ECullingType[ECullingType["FRONT"] = 1028] = "FRONT";
    ECullingType[ECullingType["BACK"] = 1029] = "BACK";
    ECullingType[ECullingType["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
})(ECullingType || (ECullingType = {}));
/** @hidden */
var EBlendingFunction;
(function (EBlendingFunction) {
    EBlendingFunction[EBlendingFunction["ZERO"] = 0] = "ZERO";
    EBlendingFunction[EBlendingFunction["ONE"] = 1] = "ONE";
    EBlendingFunction[EBlendingFunction["SRC_COLOR"] = 768] = "SRC_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
    EBlendingFunction[EBlendingFunction["DST_COLOR"] = 774] = "DST_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA"] = 770] = "SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["DST_ALPHA"] = 772] = "DST_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
    EBlendingFunction[EBlendingFunction["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
})(EBlendingFunction || (EBlendingFunction = {}));


/***/ }),

/***/ "./glTF/1.0/glTFLoaderUtils.ts":
/*!*************************************!*\
  !*** ./glTF/1.0/glTFLoaderUtils.ts ***!
  \*************************************/
/*! exports provided: GLTFUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFUtils", function() { return GLTFUtils; });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "./glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__);





/**
* Utils functions for GLTF
* @hidden
*/
class GLTFUtils {
    /**
     * Sets the given "parameter" matrix
     * @param scene: the Scene object
     * @param source: the source node where to pick the matrix
     * @param parameter: the GLTF technique parameter
     * @param uniformName: the name of the shader's uniform
     * @param shaderMaterial: the shader material
     */
    static SetMatrix(scene, source, parameter, uniformName, shaderMaterial) {
        var mat = null;
        if (parameter.semantic === "MODEL") {
            mat = source.getWorldMatrix();
        }
        else if (parameter.semantic === "PROJECTION") {
            mat = scene.getProjectionMatrix();
        }
        else if (parameter.semantic === "VIEW") {
            mat = scene.getViewMatrix();
        }
        else if (parameter.semantic === "MODELVIEWINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].Transpose(source.getWorldMatrix().multiply(scene.getViewMatrix()).invert());
        }
        else if (parameter.semantic === "MODELVIEW") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix());
        }
        else if (parameter.semantic === "MODELVIEWPROJECTION") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix());
        }
        else if (parameter.semantic === "MODELINVERSE") {
            mat = source.getWorldMatrix().invert();
        }
        else if (parameter.semantic === "VIEWINVERSE") {
            mat = scene.getViewMatrix().invert();
        }
        else if (parameter.semantic === "PROJECTIONINVERSE") {
            mat = scene.getProjectionMatrix().invert();
        }
        else if (parameter.semantic === "MODELVIEWINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix()).invert();
        }
        else if (parameter.semantic === "MODELVIEWPROJECTIONINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix()).invert();
        }
        else if (parameter.semantic === "MODELINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].Transpose(source.getWorldMatrix().invert());
        }
        else {
            debugger;
        }
        if (mat) {
            switch (parameter.type) {
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_MAT2:
                    shaderMaterial.setMatrix2x2(uniformName, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].GetAsMatrix2x2(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_MAT3:
                    shaderMaterial.setMatrix3x3(uniformName, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"].GetAsMatrix3x3(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_MAT4:
                    shaderMaterial.setMatrix(uniformName, mat);
                    break;
                default: break;
            }
        }
    }
    /**
     * Sets the given "parameter" matrix
     * @param shaderMaterial: the shader material
     * @param uniform: the name of the shader's uniform
     * @param value: the value of the uniform
     * @param type: the uniform's type (EParameterType FLOAT, VEC2, VEC3 or VEC4)
     */
    static SetUniform(shaderMaterial, uniform, value, type) {
        switch (type) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT:
                shaderMaterial.setFloat(uniform, value);
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_VEC2:
                shaderMaterial.setVector2(uniform, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector2"].FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_VEC3:
                shaderMaterial.setVector3(uniform, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EParameterType"].FLOAT_VEC4:
                shaderMaterial.setVector4(uniform, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector4"].FromArray(value));
                return true;
            default: return false;
        }
    }
    /**
    * Returns the wrap mode of the texture
    * @param mode: the mode value
    */
    static GetWrapMode(mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureWrapMode"].CLAMP_TO_EDGE: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].CLAMP_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureWrapMode"].MIRRORED_REPEAT: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].MIRROR_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureWrapMode"].REPEAT: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].WRAP_ADDRESSMODE;
            default: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].WRAP_ADDRESSMODE;
        }
    }
    /**
     * Returns the byte stride giving an accessor
     * @param accessor: the GLTF accessor objet
     */
    static GetByteStrideFromType(accessor) {
        // Needs this function since "byteStride" isn't requiered in glTF format
        var type = accessor.type;
        switch (type) {
            case "VEC2": return 2;
            case "VEC3": return 3;
            case "VEC4": return 4;
            case "MAT2": return 4;
            case "MAT3": return 9;
            case "MAT4": return 16;
            default: return 1;
        }
    }
    /**
     * Returns the texture filter mode giving a mode value
     * @param mode: the filter mode value
     */
    static GetTextureFilterMode(mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].LINEAR:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].LINEAR_MIPMAP_NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].LINEAR_MIPMAP_LINEAR: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].TRILINEAR_SAMPLINGMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["ETextureFilterType"].NEAREST_MIPMAP_NEAREST: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].NEAREST_SAMPLINGMODE;
            default: return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Texture"].BILINEAR_SAMPLINGMODE;
        }
    }
    static GetBufferFromBufferView(gltfRuntime, bufferView, byteOffset, byteLength, componentType) {
        var byteOffset = bufferView.byteOffset + byteOffset;
        var loadedBufferView = gltfRuntime.loadedBufferViews[bufferView.buffer];
        if (byteOffset + byteLength > loadedBufferView.byteLength) {
            throw new Error("Buffer access is out of range");
        }
        var buffer = loadedBufferView.buffer;
        byteOffset += loadedBufferView.byteOffset;
        switch (componentType) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EComponentType"].BYTE: return new Int8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EComponentType"].UNSIGNED_BYTE: return new Uint8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EComponentType"].SHORT: return new Int16Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__["EComponentType"].UNSIGNED_SHORT: return new Uint16Array(buffer, byteOffset, byteLength);
            default: return new Float32Array(buffer, byteOffset, byteLength);
        }
    }
    /**
     * Returns a buffer from its accessor
     * @param gltfRuntime: the GLTF runtime
     * @param accessor: the GLTF accessor
     */
    static GetBufferFromAccessor(gltfRuntime, accessor) {
        var bufferView = gltfRuntime.bufferViews[accessor.bufferView];
        var byteLength = accessor.count * GLTFUtils.GetByteStrideFromType(accessor);
        return GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, accessor.byteOffset, byteLength, accessor.componentType);
    }
    /**
     * Decodes a buffer view into a string
     * @param view: the buffer view
     */
    static DecodeBufferToText(view) {
        var result = "";
        var length = view.byteLength;
        for (var i = 0; i < length; ++i) {
            result += String.fromCharCode(view[i]);
        }
        return result;
    }
    /**
     * Returns the default material of gltf. Related to
     * https://github.com/KhronosGroup/glTF/tree/master/specification/1.0#appendix-a-default-material
     * @param scene: the Babylon.js scene
     */
    static GetDefaultMaterial(scene) {
        if (!GLTFUtils._DefaultMaterial) {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore["GLTFDefaultMaterialVertexShader"] = [
                "precision highp float;",
                "",
                "uniform mat4 worldView;",
                "uniform mat4 projection;",
                "",
                "attribute vec3 position;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = projection * worldView * vec4(position, 1.0);",
                "}"
            ].join("\n");
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Effect"].ShadersStore["GLTFDefaultMaterialPixelShader"] = [
                "precision highp float;",
                "",
                "uniform vec4 u_emission;",
                "",
                "void main(void)",
                "{",
                "    gl_FragColor = u_emission;",
                "}"
            ].join("\n");
            var shaderPath = {
                vertex: "GLTFDefaultMaterial",
                fragment: "GLTFDefaultMaterial"
            };
            var options = {
                attributes: ["position"],
                uniforms: ["worldView", "projection", "u_emission"],
                samplers: new Array(),
                needAlphaBlending: false
            };
            GLTFUtils._DefaultMaterial = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"]("GLTFDefaultMaterial", scene, shaderPath, options);
            GLTFUtils._DefaultMaterial.setColor4("u_emission", new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color4"](0.5, 0.5, 0.5, 1.0));
        }
        return GLTFUtils._DefaultMaterial;
    }
}
// The GLTF default material
GLTFUtils._DefaultMaterial = null;


/***/ }),

/***/ "./glTF/1.0/glTFMaterialsCommonExtension.ts":
/*!**************************************************!*\
  !*** ./glTF/1.0/glTFMaterialsCommonExtension.ts ***!
  \**************************************************/
/*! exports provided: GLTFMaterialsCommonExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFMaterialsCommonExtension", function() { return GLTFMaterialsCommonExtension; });
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "./glTF/1.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__);











/** @hidden */
class GLTFMaterialsCommonExtension extends _glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderExtension"] {
    constructor() {
        super("KHR_materials_common");
    }
    loadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError) {
        if (!gltfRuntime.extensions) {
            return false;
        }
        var extension = gltfRuntime.extensions[this.name];
        if (!extension) {
            return false;
        }
        // Create lights
        var lights = extension.lights;
        if (lights) {
            for (var thing in lights) {
                var light = lights[thing];
                switch (light.type) {
                    case "ambient":
                        var ambientLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["HemisphericLight"](light.name, new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 1, 0), gltfRuntime.scene);
                        var ambient = light.ambient;
                        if (ambient) {
                            ambientLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(ambient.color || [1, 1, 1]);
                        }
                        break;
                    case "point":
                        var pointLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["PointLight"](light.name, new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](10, 10, 10), gltfRuntime.scene);
                        var point = light.point;
                        if (point) {
                            pointLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(point.color || [1, 1, 1]);
                        }
                        break;
                    case "directional":
                        var dirLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](light.name, new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, -1, 0), gltfRuntime.scene);
                        var directional = light.directional;
                        if (directional) {
                            dirLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(directional.color || [1, 1, 1]);
                        }
                        break;
                    case "spot":
                        var spot = light.spot;
                        if (spot) {
                            var spotLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["SpotLight"](light.name, new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 10, 0), new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, -1, 0), spot.fallOffAngle || Math.PI, spot.fallOffExponent || 0.0, gltfRuntime.scene);
                            spotLight.diffuse = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(spot.color || [1, 1, 1]);
                        }
                        break;
                    default:
                        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Tools"].Warn("GLTF Material Common extension: light type \"" + light.type + "\” not supported");
                        break;
                }
            }
        }
        return false;
    }
    loadMaterialAsync(gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material || !material.extensions) {
            return false;
        }
        var extension = material.extensions[this.name];
        if (!extension) {
            return false;
        }
        var standardMaterial = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](id, gltfRuntime.scene);
        standardMaterial.sideOrientation = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Material"].CounterClockWiseSideOrientation;
        if (extension.technique === "CONSTANT") {
            standardMaterial.disableLighting = true;
        }
        standardMaterial.backFaceCulling = extension.doubleSided === undefined ? false : !extension.doubleSided;
        standardMaterial.alpha = extension.values.transparency === undefined ? 1.0 : extension.values.transparency;
        standardMaterial.specularPower = extension.values.shininess === undefined ? 0.0 : extension.values.shininess;
        // Ambient
        if (typeof extension.values.ambient === "string") {
            this._loadTexture(gltfRuntime, extension.values.ambient, standardMaterial, "ambientTexture", onError);
        }
        else {
            standardMaterial.ambientColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(extension.values.ambient || [0, 0, 0]);
        }
        // Diffuse
        if (typeof extension.values.diffuse === "string") {
            this._loadTexture(gltfRuntime, extension.values.diffuse, standardMaterial, "diffuseTexture", onError);
        }
        else {
            standardMaterial.diffuseColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(extension.values.diffuse || [0, 0, 0]);
        }
        // Emission
        if (typeof extension.values.emission === "string") {
            this._loadTexture(gltfRuntime, extension.values.emission, standardMaterial, "emissiveTexture", onError);
        }
        else {
            standardMaterial.emissiveColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(extension.values.emission || [0, 0, 0]);
        }
        // Specular
        if (typeof extension.values.specular === "string") {
            this._loadTexture(gltfRuntime, extension.values.specular, standardMaterial, "specularTexture", onError);
        }
        else {
            standardMaterial.specularColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_1__["Color3"].FromArray(extension.values.specular || [0, 0, 0]);
        }
        return true;
    }
    _loadTexture(gltfRuntime, id, material, propertyPath, onError) {
        // Create buffer from texture url
        _glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderBase"].LoadTextureBufferAsync(gltfRuntime, id, (buffer) => {
            // Create texture from buffer
            _glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderBase"].CreateTextureAsync(gltfRuntime, id, buffer, (texture) => material[propertyPath] = texture, onError);
        }, onError);
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoader"].RegisterExtension(new GLTFMaterialsCommonExtension());


/***/ }),

/***/ "./glTF/1.0/index.ts":
/*!***************************!*\
  !*** ./glTF/1.0/index.ts ***!
  \***************************/
/*! exports provided: GLTFBinaryExtension, GLTFLoaderBase, GLTFLoader, GLTFLoaderExtension, EComponentType, EShaderType, EParameterType, ETextureWrapMode, ETextureFilterType, ETextureFormat, ECullingType, EBlendingFunction, GLTFUtils, GLTFMaterialsCommonExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFBinaryExtension */ "./glTF/1.0/glTFBinaryExtension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFBinaryExtension", function() { return _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__["GLTFBinaryExtension"]; });

/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoader */ "./glTF/1.0/glTFLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderBase", function() { return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoader", function() { return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderExtension", function() { return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderExtension"]; });

/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "./glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EComponentType", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["EComponentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EShaderType", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["EShaderType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EParameterType", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["EParameterType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETextureWrapMode", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["ETextureWrapMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETextureFilterType", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["ETextureFilterType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETextureFormat", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["ETextureFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ECullingType", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["ECullingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EBlendingFunction", function() { return _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__["EBlendingFunction"]; });

/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFLoaderUtils */ "./glTF/1.0/glTFLoaderUtils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFUtils", function() { return _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__["GLTFUtils"]; });

/* harmony import */ var _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialsCommonExtension */ "./glTF/1.0/glTFMaterialsCommonExtension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFMaterialsCommonExtension", function() { return _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__["GLTFMaterialsCommonExtension"]; });








/***/ }),

/***/ "./glTF/2.0/Extensions/EXT_lights_image_based.ts":
/*!*******************************************************!*\
  !*** ./glTF/2.0/Extensions/EXT_lights_image_based.ts ***!
  \*******************************************************/
/*! exports provided: EXT_lights_image_based */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXT_lights_image_based", function() { return EXT_lights_image_based; });
/* harmony import */ var babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math.scalar */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");





const NAME = "EXT_lights_image_based";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/eb3e32332042e04691a5f35103f8c261e50d8f1e/extensions/2.0/Khronos/EXT_lights_image_based/README.md) (Experimental)
 */
class EXT_lights_image_based {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
        delete this._lights;
    }
    /** @hidden */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._lights = extension.lights;
        }
    }
    /** @hidden */
    loadSceneAsync(context, scene) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, scene, this.name, (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadSceneAsync(context, scene));
            this._loader.logOpen(`${extensionContext}`);
            const light = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(`${extensionContext}/light`, this._lights, extension.light);
            promises.push(this._loadLightAsync(`#/extensions/${this.name}/lights/${extension.light}`, light).then((texture) => {
                this._loader.babylonScene.environmentTexture = texture;
            }));
            this._loader.logClose();
            return Promise.all(promises).then(() => { });
        });
    }
    _loadLightAsync(context, light) {
        if (!light._loaded) {
            const promises = new Array();
            this._loader.logOpen(`${context}`);
            const imageData = new Array(light.specularImages.length);
            for (let mipmap = 0; mipmap < light.specularImages.length; mipmap++) {
                const faces = light.specularImages[mipmap];
                imageData[mipmap] = new Array(faces.length);
                for (let face = 0; face < faces.length; face++) {
                    const specularImageContext = `${context}/specularImages/${mipmap}/${face}`;
                    this._loader.logOpen(`${specularImageContext}`);
                    const index = faces[face];
                    const image = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(specularImageContext, this._loader.gltf.images, index);
                    promises.push(this._loader.loadImageAsync(`#/images/${index}`, image).then((data) => {
                        imageData[mipmap][face] = data;
                    }));
                    this._loader.logClose();
                }
            }
            this._loader.logClose();
            light._loaded = Promise.all(promises).then(() => {
                const babylonTexture = new babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["RawCubeTexture"](this._loader.babylonScene, null, light.specularImageSize);
                light._babylonTexture = babylonTexture;
                if (light.intensity != undefined) {
                    babylonTexture.level = light.intensity;
                }
                if (light.rotation) {
                    let rotation = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].FromArray(light.rotation);
                    // Invert the rotation so that positive rotation is counter-clockwise.
                    if (!this._loader.babylonScene.useRightHandedSystem) {
                        rotation = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Inverse(rotation);
                    }
                    babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["Matrix"].FromQuaternionToRef(rotation, babylonTexture.getReflectionTextureMatrix());
                }
                const sphericalHarmonics = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["SphericalHarmonics"].FromArray(light.irradianceCoefficients);
                sphericalHarmonics.scale(light.intensity);
                sphericalHarmonics.convertIrradianceToLambertianRadiance();
                const sphericalPolynomial = babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["SphericalPolynomial"].FromHarmonics(sphericalHarmonics);
                // Compute the lod generation scale to fit exactly to the number of levels available.
                const lodGenerationScale = (imageData.length - 1) / babylonjs_Maths_math_scalar__WEBPACK_IMPORTED_MODULE_0__["Scalar"].Log2(light.specularImageSize);
                return babylonTexture.updateRGBDAsync(imageData, sphericalPolynomial, lodGenerationScale);
            });
        }
        return light._loaded.then(() => {
            return light._babylonTexture;
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new EXT_lights_image_based(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/KHR_draco_mesh_compression.ts":
/*!***********************************************************!*\
  !*** ./glTF/2.0/Extensions/KHR_draco_mesh_compression.ts ***!
  \***********************************************************/
/*! exports provided: KHR_draco_mesh_compression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHR_draco_mesh_compression", function() { return KHR_draco_mesh_compression; });
/* harmony import */ var babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Meshes/Compression/dracoCompression */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");




const NAME = "KHR_draco_mesh_compression";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression)
 */
class KHR_draco_mesh_compression {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["DracoCompression"].DecoderAvailable;
        this._dracoCompressionOwned = false;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        if (this.dracoCompression && this._dracoCompressionOwned) {
            this.dracoCompression.dispose();
            delete this.dracoCompression;
        }
        delete this._loader;
    }
    /** @hidden */
    _loadVertexDataAsync(context, primitive, babylonMesh) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, primitive, this.name, (extensionContext, extension) => {
            if (primitive.mode != undefined) {
                if (primitive.mode !== 5 /* TRIANGLE_STRIP */ &&
                    primitive.mode !== 4 /* TRIANGLES */) {
                    throw new Error(`${context}: Unsupported mode ${primitive.mode}`);
                }
                // TODO: handle triangle strips
                if (primitive.mode === 5 /* TRIANGLE_STRIP */) {
                    throw new Error(`${context}: Mode ${primitive.mode} is not currently supported`);
                }
            }
            const attributes = {};
            const loadAttribute = (name, kind) => {
                const uniqueId = extension.attributes[name];
                if (uniqueId == undefined) {
                    return;
                }
                babylonMesh._delayInfo = babylonMesh._delayInfo || [];
                if (babylonMesh._delayInfo.indexOf(kind) === -1) {
                    babylonMesh._delayInfo.push(kind);
                }
                attributes[kind] = uniqueId;
            };
            loadAttribute("POSITION", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].PositionKind);
            loadAttribute("NORMAL", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].NormalKind);
            loadAttribute("TANGENT", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].TangentKind);
            loadAttribute("TEXCOORD_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].UVKind);
            loadAttribute("TEXCOORD_1", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].UV2Kind);
            loadAttribute("JOINTS_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].MatricesIndicesKind);
            loadAttribute("WEIGHTS_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].MatricesWeightsKind);
            loadAttribute("COLOR_0", babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].ColorKind);
            var bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(extensionContext, this._loader.gltf.bufferViews, extension.bufferView);
            if (!bufferView._dracoBabylonGeometry) {
                bufferView._dracoBabylonGeometry = this._loader.loadBufferViewAsync(`#/bufferViews/${bufferView.index}`, bufferView).then((data) => {
                    if (!this.dracoCompression) {
                        this.dracoCompression = new babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["DracoCompression"]();
                        this._dracoCompressionOwned = true;
                    }
                    return this.dracoCompression.decodeMeshAsync(data, attributes).then((babylonVertexData) => {
                        const babylonGeometry = new babylonjs_Meshes_Compression_dracoCompression__WEBPACK_IMPORTED_MODULE_0__["Geometry"](babylonMesh.name, this._loader.babylonScene);
                        babylonVertexData.applyToGeometry(babylonGeometry);
                        return babylonGeometry;
                    }).catch((error) => {
                        throw new Error(`${context}: ${error.message}`);
                    });
                });
            }
            return bufferView._dracoBabylonGeometry;
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new KHR_draco_mesh_compression(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/KHR_lights_punctual.ts":
/*!****************************************************!*\
  !*** ./glTF/2.0/Extensions/KHR_lights_punctual.ts ***!
  \****************************************************/
/*! exports provided: KHR_lights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHR_lights", function() { return KHR_lights; });
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");






const NAME = "KHR_lights_punctual";
var LightType;
(function (LightType) {
    LightType["DIRECTIONAL"] = "directional";
    LightType["POINT"] = "point";
    LightType["SPOT"] = "spot";
})(LightType || (LightType = {}));
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/1048d162a44dbcb05aefc1874bfd423cf60135a6/extensions/2.0/Khronos/KHR_lights_punctual/README.md) (Experimental)
 */
class KHR_lights {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
        delete this._lights;
    }
    /** @hidden */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._lights = extension.lights;
        }
    }
    /** @hidden */
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, node, this.name, (extensionContext, extension) => {
            return this._loader.loadNodeAsync(context, node, (babylonMesh) => {
                let babylonLight;
                const light = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(extensionContext, this._lights, extension.light);
                const name = light.name || babylonMesh.name;
                switch (light.type) {
                    case LightType.DIRECTIONAL: {
                        babylonLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](name, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Backward(), this._loader.babylonScene);
                        break;
                    }
                    case LightType.POINT: {
                        babylonLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["PointLight"](name, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero(), this._loader.babylonScene);
                        break;
                    }
                    case LightType.SPOT: {
                        const babylonSpotLight = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["SpotLight"](name, babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero(), babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Backward(), 0, 1, this._loader.babylonScene);
                        babylonSpotLight.angle = ((light.spot && light.spot.outerConeAngle) || Math.PI / 4) * 2;
                        babylonSpotLight.innerAngle = ((light.spot && light.spot.innerConeAngle) || 0) * 2;
                        babylonLight = babylonSpotLight;
                        break;
                    }
                    default: {
                        throw new Error(`${extensionContext}: Invalid light type (${light.type})`);
                    }
                }
                babylonLight.falloffType = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Light"].FALLOFF_GLTF;
                babylonLight.diffuse = light.color ? babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(light.color) : babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].White();
                babylonLight.intensity = light.intensity == undefined ? 1 : light.intensity;
                babylonLight.range = light.range == undefined ? Number.MAX_VALUE : light.range;
                babylonLight.parent = babylonMesh;
                _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].AddPointerMetadata(babylonLight, extensionContext);
                assign(babylonMesh);
            });
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new KHR_lights(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.ts":
/*!********************************************************************!*\
  !*** ./glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.ts ***!
  \********************************************************************/
/*! exports provided: KHR_materials_pbrSpecularGlossiness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHR_materials_pbrSpecularGlossiness", function() { return KHR_materials_pbrSpecularGlossiness; });
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");



const NAME = "KHR_materials_pbrSpecularGlossiness";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness)
 */
class KHR_materials_pbrSpecularGlossiness {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
    }
    /** @hidden */
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, material, this.name, (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
            promises.push(this._loadSpecularGlossinessPropertiesAsync(extensionContext, material, extension, babylonMaterial));
            this._loader.loadMaterialAlphaProperties(context, material, babylonMaterial);
            return Promise.all(promises).then(() => { });
        });
    }
    _loadSpecularGlossinessPropertiesAsync(context, material, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
            throw new Error(`${context}: Material type not supported`);
        }
        const promises = new Array();
        babylonMaterial.metallic = null;
        babylonMaterial.roughness = null;
        if (properties.diffuseFactor) {
            babylonMaterial.albedoColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(properties.diffuseFactor);
            babylonMaterial.alpha = properties.diffuseFactor[3];
        }
        else {
            babylonMaterial.albedoColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].White();
        }
        babylonMaterial.reflectivityColor = properties.specularFactor ? babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(properties.specularFactor) : babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].White();
        babylonMaterial.microSurface = properties.glossinessFactor == undefined ? 1 : properties.glossinessFactor;
        if (properties.diffuseTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/diffuseTexture`, properties.diffuseTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Diffuse)`;
                babylonMaterial.albedoTexture = texture;
            }));
        }
        if (properties.specularGlossinessTexture) {
            promises.push(this._loader.loadTextureInfoAsync(`${context}/specularGlossinessTexture`, properties.specularGlossinessTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Specular Glossiness)`;
                babylonMaterial.reflectivityTexture = texture;
            }));
            babylonMaterial.reflectivityTexture.hasAlpha = true;
            babylonMaterial.useMicroSurfaceFromReflectivityMapAlpha = true;
        }
        return Promise.all(promises).then(() => { });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new KHR_materials_pbrSpecularGlossiness(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/KHR_materials_unlit.ts":
/*!****************************************************!*\
  !*** ./glTF/2.0/Extensions/KHR_materials_unlit.ts ***!
  \****************************************************/
/*! exports provided: KHR_materials_unlit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHR_materials_unlit", function() { return KHR_materials_unlit; });
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");



const NAME = "KHR_materials_unlit";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit)
 */
class KHR_materials_unlit {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
    }
    /** @hidden */
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, material, this.name, () => {
            return this._loadUnlitPropertiesAsync(context, material, babylonMaterial);
        });
    }
    _loadUnlitPropertiesAsync(context, material, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
            throw new Error(`${context}: Material type not supported`);
        }
        const promises = new Array();
        babylonMaterial.unlit = true;
        const properties = material.pbrMetallicRoughness;
        if (properties) {
            if (properties.baseColorFactor) {
                babylonMaterial.albedoColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(properties.baseColorFactor);
                babylonMaterial.alpha = properties.baseColorFactor[3];
            }
            else {
                babylonMaterial.albedoColor = babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Color3"].White();
            }
            if (properties.baseColorTexture) {
                promises.push(this._loader.loadTextureInfoAsync(`${context}/baseColorTexture`, properties.baseColorTexture, (texture) => {
                    texture.name = `${babylonMaterial.name} (Base Color)`;
                    babylonMaterial.albedoTexture = texture;
                }));
            }
        }
        if (material.doubleSided) {
            babylonMaterial.backFaceCulling = false;
            babylonMaterial.twoSidedLighting = true;
        }
        this._loader.loadMaterialAlphaProperties(context, material, babylonMaterial);
        return Promise.all(promises).then(() => { });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new KHR_materials_unlit(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/KHR_texture_transform.ts":
/*!******************************************************!*\
  !*** ./glTF/2.0/Extensions/KHR_texture_transform.ts ***!
  \******************************************************/
/*! exports provided: KHR_texture_transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KHR_texture_transform", function() { return KHR_texture_transform; });
/* harmony import */ var babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/Textures/texture */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");


const NAME = "KHR_texture_transform";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_texture_transform/README.md)
 */
class KHR_texture_transform {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
    }
    /** @hidden */
    loadTextureInfoAsync(context, textureInfo, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, textureInfo, this.name, (extensionContext, extension) => {
            return this._loader.loadTextureInfoAsync(context, textureInfo, (babylonTexture) => {
                if (!(babylonTexture instanceof babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__["Texture"])) {
                    throw new Error(`${extensionContext}: Texture type not supported`);
                }
                if (extension.offset) {
                    babylonTexture.uOffset = extension.offset[0];
                    babylonTexture.vOffset = extension.offset[1];
                }
                // Always rotate around the origin.
                babylonTexture.uRotationCenter = 0;
                babylonTexture.vRotationCenter = 0;
                if (extension.rotation) {
                    babylonTexture.wAng = -extension.rotation;
                }
                if (extension.scale) {
                    babylonTexture.uScale = extension.scale[0];
                    babylonTexture.vScale = extension.scale[1];
                }
                if (extension.texCoord != undefined) {
                    babylonTexture.coordinatesIndex = extension.texCoord;
                }
                assign(babylonTexture);
            });
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new KHR_texture_transform(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/MSFT_audio_emitter.ts":
/*!***************************************************!*\
  !*** ./glTF/2.0/Extensions/MSFT_audio_emitter.ts ***!
  \***************************************************/
/*! exports provided: MSFT_audio_emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFT_audio_emitter", function() { return MSFT_audio_emitter; });
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/math */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");






const NAME = "MSFT_audio_emitter";
/**
 * [Specification](https://github.com/najadojo/glTF/tree/MSFT_audio_emitter/extensions/2.0/Vendor/MSFT_audio_emitter)
 */
class MSFT_audio_emitter {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
        delete this._clips;
        delete this._emitters;
    }
    /** @hidden */
    onLoading() {
        const extensions = this._loader.gltf.extensions;
        if (extensions && extensions[this.name]) {
            const extension = extensions[this.name];
            this._clips = extension.clips;
            this._emitters = extension.emitters;
            _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Assign(this._clips);
            _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Assign(this._emitters);
        }
    }
    /** @hidden */
    loadSceneAsync(context, scene) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, scene, this.name, (extensionContext, extension) => {
            const promises = new Array();
            promises.push(this._loader.loadSceneAsync(context, scene));
            for (const emitterIndex of extension.emitters) {
                const emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(`${extensionContext}/emitters`, this._emitters, emitterIndex);
                if (emitter.refDistance != undefined || emitter.maxDistance != undefined || emitter.rolloffFactor != undefined ||
                    emitter.distanceModel != undefined || emitter.innerAngle != undefined || emitter.outerAngle != undefined) {
                    throw new Error(`${extensionContext}: Direction or Distance properties are not allowed on emitters attached to a scene`);
                }
                promises.push(this._loadEmitterAsync(`${extensionContext}/emitters/${emitter.index}`, emitter));
            }
            return Promise.all(promises).then(() => { });
        });
    }
    /** @hidden */
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, node, this.name, (extensionContext, extension) => {
            const promises = new Array();
            return this._loader.loadNodeAsync(extensionContext, node, (babylonMesh) => {
                for (const emitterIndex of extension.emitters) {
                    const emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(`${extensionContext}/emitters`, this._emitters, emitterIndex);
                    promises.push(this._loadEmitterAsync(`${extensionContext}/emitters/${emitter.index}`, emitter).then(() => {
                        for (const sound of emitter._babylonSounds) {
                            sound.attachToMesh(babylonMesh);
                            if (emitter.innerAngle != undefined || emitter.outerAngle != undefined) {
                                sound.setLocalDirectionToMesh(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Forward());
                                sound.setDirectionalCone(2 * babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].ToDegrees(emitter.innerAngle == undefined ? Math.PI : emitter.innerAngle), 2 * babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].ToDegrees(emitter.outerAngle == undefined ? Math.PI : emitter.outerAngle), 0);
                            }
                        }
                    }));
                }
                assign(babylonMesh);
            }).then((babylonMesh) => {
                return Promise.all(promises).then(() => {
                    return babylonMesh;
                });
            });
        });
    }
    /** @hidden */
    loadAnimationAsync(context, animation) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, animation, this.name, (extensionContext, extension) => {
            return this._loader.loadAnimationAsync(context, animation).then((babylonAnimationGroup) => {
                const promises = new Array();
                _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Assign(extension.events);
                for (const event of extension.events) {
                    promises.push(this._loadAnimationEventAsync(`${extensionContext}/events/${event.index}`, context, animation, event, babylonAnimationGroup));
                }
                return Promise.all(promises).then(() => {
                    return babylonAnimationGroup;
                });
            });
        });
    }
    _loadClipAsync(context, clip) {
        if (clip._objectURL) {
            return clip._objectURL;
        }
        let promise;
        if (clip.uri) {
            promise = this._loader.loadUriAsync(context, clip, clip.uri);
        }
        else {
            const bufferView = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(`${context}/bufferView`, this._loader.gltf.bufferViews, clip.bufferView);
            promise = this._loader.loadBufferViewAsync(`#/bufferViews/${bufferView.index}`, bufferView);
        }
        clip._objectURL = promise.then((data) => {
            return URL.createObjectURL(new Blob([data], { type: clip.mimeType }));
        });
        return clip._objectURL;
    }
    _loadEmitterAsync(context, emitter) {
        emitter._babylonSounds = emitter._babylonSounds || [];
        if (!emitter._babylonData) {
            const clipPromises = new Array();
            const name = emitter.name || `emitter${emitter.index}`;
            const options = {
                loop: false,
                autoplay: false,
                volume: emitter.volume == undefined ? 1 : emitter.volume,
            };
            for (let i = 0; i < emitter.clips.length; i++) {
                const clipContext = `#/extensions/${this.name}/clips`;
                const clip = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(clipContext, this._clips, emitter.clips[i].clip);
                clipPromises.push(this._loadClipAsync(`${clipContext}/${emitter.clips[i].clip}`, clip).then((objectURL) => {
                    const sound = emitter._babylonSounds[i] = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Sound"](name, objectURL, this._loader.babylonScene, null, options);
                    sound.refDistance = emitter.refDistance || 1;
                    sound.maxDistance = emitter.maxDistance || 256;
                    sound.rolloffFactor = emitter.rolloffFactor || 1;
                    sound.distanceModel = emitter.distanceModel || 'exponential';
                    sound._positionInEmitterSpace = true;
                }));
            }
            const promise = Promise.all(clipPromises).then(() => {
                const weights = emitter.clips.map((clip) => { return clip.weight || 1; });
                const weightedSound = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["WeightedSound"](emitter.loop || false, emitter._babylonSounds, weights);
                if (emitter.innerAngle) {
                    weightedSound.directionalConeInnerAngle = 2 * babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].ToDegrees(emitter.innerAngle);
                }
                if (emitter.outerAngle) {
                    weightedSound.directionalConeOuterAngle = 2 * babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["Tools"].ToDegrees(emitter.outerAngle);
                }
                if (emitter.volume) {
                    weightedSound.volume = emitter.volume;
                }
                emitter._babylonData.sound = weightedSound;
            });
            emitter._babylonData = {
                loaded: promise
            };
        }
        return emitter._babylonData.loaded;
    }
    _getEventAction(context, sound, action, time, startOffset) {
        switch (action) {
            case "play" /* play */: {
                return (currentFrame) => {
                    const frameOffset = (startOffset || 0) + (currentFrame - time);
                    sound.play(frameOffset);
                };
            }
            case "stop" /* stop */: {
                return (currentFrame) => {
                    sound.stop();
                };
            }
            case "pause" /* pause */: {
                return (currentFrame) => {
                    sound.pause();
                };
            }
            default: {
                throw new Error(`${context}: Unsupported action ${action}`);
            }
        }
    }
    _loadAnimationEventAsync(context, animationContext, animation, event, babylonAnimationGroup) {
        if (babylonAnimationGroup.targetedAnimations.length == 0) {
            return Promise.resolve();
        }
        const babylonAnimation = babylonAnimationGroup.targetedAnimations[0];
        const emitterIndex = event.emitter;
        const emitter = _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(`#/extensions/${this.name}/emitters`, this._emitters, emitterIndex);
        return this._loadEmitterAsync(context, emitter).then(() => {
            const sound = emitter._babylonData.sound;
            if (sound) {
                var babylonAnimationEvent = new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__["AnimationEvent"](event.time, this._getEventAction(context, sound, event.action, event.time, event.startOffset));
                babylonAnimation.animation.addEvent(babylonAnimationEvent);
                // Make sure all started audio stops when this animation is terminated.
                babylonAnimationGroup.onAnimationGroupEndObservable.add(() => {
                    sound.stop();
                });
                babylonAnimationGroup.onAnimationGroupPauseObservable.add(() => {
                    sound.pause();
                });
            }
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new MSFT_audio_emitter(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/MSFT_lod.ts":
/*!*****************************************!*\
  !*** ./glTF/2.0/Extensions/MSFT_lod.ts ***!
  \*****************************************/
/*! exports provided: MSFT_lod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFT_lod", function() { return MSFT_lod; });
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/observable */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");



const NAME = "MSFT_lod";
/**
 * [Specification](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_lod)
 */
class MSFT_lod {
    /** @hidden */
    constructor(loader) {
        /** The name of this extension. */
        this.name = NAME;
        /** Defines whether this extension is enabled. */
        this.enabled = true;
        /**
         * Maximum number of LODs to load, starting from the lowest LOD.
         */
        this.maxLODsToLoad = Number.MAX_VALUE;
        /**
         * Observable raised when all node LODs of one level are loaded.
         * The event data is the index of the loaded LOD starting from zero.
         * Dispose the loader to cancel the loading of the next level of LODs.
         */
        this.onNodeLODsLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised when all material LODs of one level are loaded.
         * The event data is the index of the loaded LOD starting from zero.
         * Dispose the loader to cancel the loading of the next level of LODs.
         */
        this.onMaterialLODsLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this._nodeIndexLOD = null;
        this._nodeSignalLODs = new Array();
        this._nodePromiseLODs = new Array();
        this._materialIndexLOD = null;
        this._materialSignalLODs = new Array();
        this._materialPromiseLODs = new Array();
        this._loader = loader;
    }
    /** @hidden */
    dispose() {
        delete this._loader;
        this._nodeIndexLOD = null;
        this._nodeSignalLODs.length = 0;
        this._nodePromiseLODs.length = 0;
        this._materialIndexLOD = null;
        this._materialSignalLODs.length = 0;
        this._materialPromiseLODs.length = 0;
        this.onMaterialLODsLoadedObservable.clear();
        this.onNodeLODsLoadedObservable.clear();
    }
    /** @hidden */
    onReady() {
        for (let indexLOD = 0; indexLOD < this._nodePromiseLODs.length; indexLOD++) {
            const promise = Promise.all(this._nodePromiseLODs[indexLOD]).then(() => {
                if (indexLOD !== 0) {
                    this._loader.endPerformanceCounter(`Node LOD ${indexLOD}`);
                }
                this._loader.log(`Loaded node LOD ${indexLOD}`);
                this.onNodeLODsLoadedObservable.notifyObservers(indexLOD);
                if (indexLOD !== this._nodePromiseLODs.length - 1) {
                    this._loader.startPerformanceCounter(`Node LOD ${indexLOD + 1}`);
                    if (this._nodeSignalLODs[indexLOD]) {
                        this._nodeSignalLODs[indexLOD].resolve();
                    }
                }
            });
            this._loader._completePromises.push(promise);
        }
        for (let indexLOD = 0; indexLOD < this._materialPromiseLODs.length; indexLOD++) {
            const promise = Promise.all(this._materialPromiseLODs[indexLOD]).then(() => {
                if (indexLOD !== 0) {
                    this._loader.endPerformanceCounter(`Material LOD ${indexLOD}`);
                }
                this._loader.log(`Loaded material LOD ${indexLOD}`);
                this.onMaterialLODsLoadedObservable.notifyObservers(indexLOD);
                if (indexLOD !== this._materialPromiseLODs.length - 1) {
                    this._loader.startPerformanceCounter(`Material LOD ${indexLOD + 1}`);
                    if (this._materialSignalLODs[indexLOD]) {
                        this._materialSignalLODs[indexLOD].resolve();
                    }
                }
            });
            this._loader._completePromises.push(promise);
        }
    }
    /** @hidden */
    loadNodeAsync(context, node, assign) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, node, this.name, (extensionContext, extension) => {
            let firstPromise;
            const nodeLODs = this._getLODs(extensionContext, node, this._loader.gltf.nodes, extension.ids);
            this._loader.logOpen(`${extensionContext}`);
            for (let indexLOD = 0; indexLOD < nodeLODs.length; indexLOD++) {
                const nodeLOD = nodeLODs[indexLOD];
                if (indexLOD !== 0) {
                    this._nodeIndexLOD = indexLOD;
                    this._nodeSignalLODs[indexLOD] = this._nodeSignalLODs[indexLOD] || new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Deferred"]();
                }
                const assign = (babylonTransformNode) => { babylonTransformNode.setEnabled(false); };
                const promise = this._loader.loadNodeAsync(`#/nodes/${nodeLOD.index}`, nodeLOD, assign).then((babylonMesh) => {
                    if (indexLOD !== 0) {
                        // TODO: should not rely on _babylonMesh
                        const previousNodeLOD = nodeLODs[indexLOD - 1];
                        if (previousNodeLOD._babylonTransformNode) {
                            previousNodeLOD._babylonTransformNode.dispose();
                            delete previousNodeLOD._babylonTransformNode;
                            this._disposeUnusedMaterials();
                        }
                    }
                    babylonMesh.setEnabled(true);
                    return babylonMesh;
                });
                if (indexLOD === 0) {
                    firstPromise = promise;
                }
                else {
                    this._nodeIndexLOD = null;
                }
                this._nodePromiseLODs[indexLOD] = this._nodePromiseLODs[indexLOD] || [];
                this._nodePromiseLODs[indexLOD].push(promise);
            }
            this._loader.logClose();
            return firstPromise;
        });
    }
    /** @hidden */
    _loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign) {
        // Don't load material LODs if already loading a node LOD.
        if (this._nodeIndexLOD) {
            return null;
        }
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtensionAsync(context, material, this.name, (extensionContext, extension) => {
            let firstPromise;
            const materialLODs = this._getLODs(extensionContext, material, this._loader.gltf.materials, extension.ids);
            this._loader.logOpen(`${extensionContext}`);
            for (let indexLOD = 0; indexLOD < materialLODs.length; indexLOD++) {
                const materialLOD = materialLODs[indexLOD];
                if (indexLOD !== 0) {
                    this._materialIndexLOD = indexLOD;
                }
                const promise = this._loader._loadMaterialAsync(`#/materials/${materialLOD.index}`, materialLOD, babylonMesh, babylonDrawMode, (babylonMaterial) => {
                    if (indexLOD === 0) {
                        assign(babylonMaterial);
                    }
                }).then((babylonMaterial) => {
                    if (indexLOD !== 0) {
                        assign(babylonMaterial);
                        // TODO: should not rely on _data
                        const previousDataLOD = materialLODs[indexLOD - 1]._data;
                        if (previousDataLOD[babylonDrawMode]) {
                            previousDataLOD[babylonDrawMode].babylonMaterial.dispose();
                            delete previousDataLOD[babylonDrawMode];
                        }
                    }
                    return babylonMaterial;
                });
                if (indexLOD === 0) {
                    firstPromise = promise;
                }
                else {
                    this._materialIndexLOD = null;
                }
                this._materialPromiseLODs[indexLOD] = this._materialPromiseLODs[indexLOD] || [];
                this._materialPromiseLODs[indexLOD].push(promise);
            }
            this._loader.logClose();
            return firstPromise;
        });
    }
    /** @hidden */
    _loadUriAsync(context, property, uri) {
        // Defer the loading of uris if loading a material or node LOD.
        if (this._materialIndexLOD !== null) {
            this._loader.log(`deferred`);
            const previousIndexLOD = this._materialIndexLOD - 1;
            this._materialSignalLODs[previousIndexLOD] = this._materialSignalLODs[previousIndexLOD] || new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Deferred"]();
            return this._materialSignalLODs[previousIndexLOD].promise.then(() => {
                return this._loader.loadUriAsync(context, property, uri);
            });
        }
        else if (this._nodeIndexLOD !== null) {
            this._loader.log(`deferred`);
            const previousIndexLOD = this._nodeIndexLOD - 1;
            this._nodeSignalLODs[previousIndexLOD] = this._nodeSignalLODs[previousIndexLOD] || new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Deferred"]();
            return this._nodeSignalLODs[this._nodeIndexLOD - 1].promise.then(() => {
                return this._loader.loadUriAsync(context, property, uri);
            });
        }
        return null;
    }
    /**
     * Gets an array of LOD properties from lowest to highest.
     */
    _getLODs(context, property, array, ids) {
        if (this.maxLODsToLoad <= 0) {
            throw new Error("maxLODsToLoad must be greater than zero");
        }
        const properties = new Array();
        for (let i = ids.length - 1; i >= 0; i--) {
            properties.push(_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["ArrayItem"].Get(`${context}/ids/${ids[i]}`, array, ids[i]));
            if (properties.length === this.maxLODsToLoad) {
                return properties;
            }
        }
        properties.push(property);
        return properties;
    }
    _disposeUnusedMaterials() {
        // TODO: should not rely on _data
        const materials = this._loader.gltf.materials;
        if (materials) {
            for (const material of materials) {
                if (material._data) {
                    for (const drawMode in material._data) {
                        const data = material._data[drawMode];
                        if (data.babylonMeshes.length === 0) {
                            data.babylonMaterial.dispose(false, true);
                            delete material._data[drawMode];
                        }
                    }
                }
            }
        }
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new MSFT_lod(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/MSFT_minecraftMesh.ts":
/*!***************************************************!*\
  !*** ./glTF/2.0/Extensions/MSFT_minecraftMesh.ts ***!
  \***************************************************/
/*! exports provided: MSFT_minecraftMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFT_minecraftMesh", function() { return MSFT_minecraftMesh; });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");


const NAME = "MSFT_minecraftMesh";
/** @hidden */
class MSFT_minecraftMesh {
    constructor(loader) {
        this.name = NAME;
        this.enabled = true;
        this._loader = loader;
    }
    dispose() {
        delete this._loader;
    }
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtraAsync(context, material, this.name, (extraContext, extra) => {
            if (extra) {
                if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
                    throw new Error(`${extraContext}: Material type not supported`);
                }
                const promise = this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial);
                if (babylonMaterial.needAlphaBlending()) {
                    babylonMaterial.forceDepthWrite = true;
                    babylonMaterial.separateCullingPass = true;
                }
                babylonMaterial.backFaceCulling = babylonMaterial.forceDepthWrite;
                babylonMaterial.twoSidedLighting = true;
                return promise;
            }
            return null;
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new MSFT_minecraftMesh(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/MSFT_sRGBFactors.ts":
/*!*************************************************!*\
  !*** ./glTF/2.0/Extensions/MSFT_sRGBFactors.ts ***!
  \*************************************************/
/*! exports provided: MSFT_sRGBFactors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSFT_sRGBFactors", function() { return MSFT_sRGBFactors; });
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/PBR/pbrMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFLoader */ "./glTF/2.0/glTFLoader.ts");


const NAME = "MSFT_sRGBFactors";
/** @hidden */
class MSFT_sRGBFactors {
    constructor(loader) {
        this.name = NAME;
        this.enabled = true;
        this._loader = loader;
    }
    dispose() {
        delete this._loader;
    }
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return _glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].LoadExtraAsync(context, material, this.name, (extraContext, extra) => {
            if (extra) {
                if (!(babylonMaterial instanceof babylonjs_Materials_PBR_pbrMaterial__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
                    throw new Error(`${extraContext}: Material type not supported`);
                }
                const promise = this._loader.loadMaterialPropertiesAsync(context, material, babylonMaterial);
                if (!babylonMaterial.albedoTexture) {
                    babylonMaterial.albedoColor.toLinearSpaceToRef(babylonMaterial.albedoColor);
                }
                if (!babylonMaterial.reflectivityTexture) {
                    babylonMaterial.reflectivityColor.toLinearSpaceToRef(babylonMaterial.reflectivityColor);
                }
                return promise;
            }
            return null;
        });
    }
}
_glTFLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].RegisterExtension(NAME, (loader) => new MSFT_sRGBFactors(loader));


/***/ }),

/***/ "./glTF/2.0/Extensions/index.ts":
/*!**************************************!*\
  !*** ./glTF/2.0/Extensions/index.ts ***!
  \**************************************/
/*! exports provided: EXT_lights_image_based, KHR_draco_mesh_compression, KHR_lights, KHR_materials_pbrSpecularGlossiness, KHR_materials_unlit, KHR_texture_transform, MSFT_audio_emitter, MSFT_lod, MSFT_minecraftMesh, MSFT_sRGBFactors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EXT_lights_image_based__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EXT_lights_image_based */ "./glTF/2.0/Extensions/EXT_lights_image_based.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXT_lights_image_based", function() { return _EXT_lights_image_based__WEBPACK_IMPORTED_MODULE_0__["EXT_lights_image_based"]; });

/* harmony import */ var _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KHR_draco_mesh_compression */ "./glTF/2.0/Extensions/KHR_draco_mesh_compression.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_draco_mesh_compression", function() { return _KHR_draco_mesh_compression__WEBPACK_IMPORTED_MODULE_1__["KHR_draco_mesh_compression"]; });

/* harmony import */ var _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KHR_lights_punctual */ "./glTF/2.0/Extensions/KHR_lights_punctual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_lights", function() { return _KHR_lights_punctual__WEBPACK_IMPORTED_MODULE_2__["KHR_lights"]; });

/* harmony import */ var _KHR_materials_pbrSpecularGlossiness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KHR_materials_pbrSpecularGlossiness */ "./glTF/2.0/Extensions/KHR_materials_pbrSpecularGlossiness.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_materials_pbrSpecularGlossiness", function() { return _KHR_materials_pbrSpecularGlossiness__WEBPACK_IMPORTED_MODULE_3__["KHR_materials_pbrSpecularGlossiness"]; });

/* harmony import */ var _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KHR_materials_unlit */ "./glTF/2.0/Extensions/KHR_materials_unlit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_materials_unlit", function() { return _KHR_materials_unlit__WEBPACK_IMPORTED_MODULE_4__["KHR_materials_unlit"]; });

/* harmony import */ var _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KHR_texture_transform */ "./glTF/2.0/Extensions/KHR_texture_transform.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_texture_transform", function() { return _KHR_texture_transform__WEBPACK_IMPORTED_MODULE_5__["KHR_texture_transform"]; });

/* harmony import */ var _MSFT_audio_emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MSFT_audio_emitter */ "./glTF/2.0/Extensions/MSFT_audio_emitter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_audio_emitter", function() { return _MSFT_audio_emitter__WEBPACK_IMPORTED_MODULE_6__["MSFT_audio_emitter"]; });

/* harmony import */ var _MSFT_lod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MSFT_lod */ "./glTF/2.0/Extensions/MSFT_lod.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_lod", function() { return _MSFT_lod__WEBPACK_IMPORTED_MODULE_7__["MSFT_lod"]; });

/* harmony import */ var _MSFT_minecraftMesh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MSFT_minecraftMesh */ "./glTF/2.0/Extensions/MSFT_minecraftMesh.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_minecraftMesh", function() { return _MSFT_minecraftMesh__WEBPACK_IMPORTED_MODULE_8__["MSFT_minecraftMesh"]; });

/* harmony import */ var _MSFT_sRGBFactors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MSFT_sRGBFactors */ "./glTF/2.0/Extensions/MSFT_sRGBFactors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_sRGBFactors", function() { return _MSFT_sRGBFactors__WEBPACK_IMPORTED_MODULE_9__["MSFT_sRGBFactors"]; });













/***/ }),

/***/ "./glTF/2.0/glTFLoader.ts":
/*!********************************!*\
  !*** ./glTF/2.0/glTFLoader.ts ***!
  \********************************/
/*! exports provided: ArrayItem, GLTFLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayItem", function() { return ArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoader", function() { return GLTFLoader; });
/* harmony import */ var babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/deferred */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTFFileLoader */ "./glTF/glTFFileLoader.ts");





















/**
 * Helper class for working with arrays when loading the glTF asset
 */
class ArrayItem {
    /**
     * Gets an item from the given array.
     * @param context The context when loading the asset
     * @param array The array to get the item from
     * @param index The index to the array
     * @returns The array item
     */
    static Get(context, array, index) {
        if (!array || index == undefined || !array[index]) {
            throw new Error(`${context}: Failed to find index (${index})`);
        }
        return array[index];
    }
    /**
     * Assign an `index` field to each item of the given array.
     * @param array The array of items
     */
    static Assign(array) {
        if (array) {
            for (let index = 0; index < array.length; index++) {
                array[index].index = index;
            }
        }
    }
}
/**
 * The glTF 2.0 loader
 */
class GLTFLoader {
    /** @hidden */
    constructor(parent) {
        /** @hidden */
        this._completePromises = new Array();
        this._disposed = false;
        this._state = null;
        this._extensions = {};
        this._defaultBabylonMaterialData = {};
        this._requests = new Array();
        this._parent = parent;
    }
    /**
     * Registers a loader extension.
     * @param name The name of the loader extension.
     * @param factory The factory function that creates the loader extension.
     */
    static RegisterExtension(name, factory) {
        if (GLTFLoader.UnregisterExtension(name)) {
            babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`Extension with the name '${name}' already exists`);
        }
        GLTFLoader._ExtensionFactories[name] = factory;
        // Keep the order of registration so that extensions registered first are called first.
        GLTFLoader._ExtensionNames.push(name);
    }
    /**
     * Unregisters a loader extension.
     * @param name The name of the loader extenion.
     * @returns A boolean indicating whether the extension has been unregistered
     */
    static UnregisterExtension(name) {
        if (!GLTFLoader._ExtensionFactories[name]) {
            return false;
        }
        delete GLTFLoader._ExtensionFactories[name];
        const index = GLTFLoader._ExtensionNames.indexOf(name);
        if (index !== -1) {
            GLTFLoader._ExtensionNames.splice(index, 1);
        }
        return true;
    }
    /**
     * Gets the loader state.
     */
    get state() {
        return this._state;
    }
    /**
     * The glTF object parsed from the JSON.
     */
    get gltf() {
        return this._gltf;
    }
    /**
     * The Babylon scene when loading the asset.
     */
    get babylonScene() {
        return this._babylonScene;
    }
    /**
     * The root Babylon mesh when loading the asset.
     */
    get rootBabylonMesh() {
        return this._rootBabylonMesh;
    }
    /** @hidden */
    dispose() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        for (const request of this._requests) {
            request.abort();
        }
        this._requests.length = 0;
        this._completePromises.length = 0;
        for (const name in this._extensions) {
            const extension = this._extensions[name];
            if (extension.dispose) {
                this._extensions[name].dispose();
            }
        }
        this._extensions = {};
        delete this._gltf;
        delete this._babylonScene;
        delete this._rootBabylonMesh;
        delete this._progressCallback;
        this._parent._clear();
    }
    /** @hidden */
    importMeshAsync(meshesNames, scene, data, rootUrl, onProgress, fileName) {
        return Promise.resolve().then(() => {
            this._babylonScene = scene;
            this._rootUrl = rootUrl;
            this._fileName = fileName || "scene";
            this._progressCallback = onProgress;
            this._loadData(data);
            let nodes = null;
            if (meshesNames) {
                const nodeMap = {};
                if (this._gltf.nodes) {
                    for (const node of this._gltf.nodes) {
                        if (node.name) {
                            nodeMap[node.name] = node.index;
                        }
                    }
                }
                const names = (meshesNames instanceof Array) ? meshesNames : [meshesNames];
                nodes = names.map((name) => {
                    const node = nodeMap[name];
                    if (node === undefined) {
                        throw new Error(`Failed to find node '${name}'`);
                    }
                    return node;
                });
            }
            return this._loadAsync(nodes, () => {
                return {
                    meshes: this._getMeshes(),
                    particleSystems: [],
                    skeletons: this._getSkeletons(),
                    animationGroups: this._getAnimationGroups()
                };
            });
        });
    }
    /** @hidden */
    loadAsync(scene, data, rootUrl, onProgress, fileName) {
        return Promise.resolve().then(() => {
            this._babylonScene = scene;
            this._rootUrl = rootUrl;
            this._fileName = fileName || "scene";
            this._progressCallback = onProgress;
            this._loadData(data);
            return this._loadAsync(null, () => undefined);
        });
    }
    _loadAsync(nodes, resultFunc) {
        return Promise.resolve().then(() => {
            this._uniqueRootUrl = (this._rootUrl.indexOf("file:") === -1 && this._fileName) ? this._rootUrl : `${this._rootUrl}${Date.now()}/`;
            this._loadExtensions();
            this._checkExtensions();
            const loadingToReadyCounterName = `${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"][_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].LOADING]} => ${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"][_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].READY]}`;
            const loadingToCompleteCounterName = `${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"][_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].LOADING]} => ${_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"][_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].COMPLETE]}`;
            this._parent._startPerformanceCounter(loadingToReadyCounterName);
            this._parent._startPerformanceCounter(loadingToCompleteCounterName);
            this._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].LOADING);
            this._extensionsOnLoading();
            const promises = new Array();
            // Block the marking of materials dirty until the scene is loaded.
            const oldBlockMaterialDirtyMechanism = this._babylonScene.blockMaterialDirtyMechanism;
            this._babylonScene.blockMaterialDirtyMechanism = true;
            if (nodes) {
                promises.push(this.loadSceneAsync("/nodes", { nodes: nodes, index: -1 }));
            }
            else if (this._gltf.scene != undefined || (this._gltf.scenes && this._gltf.scenes[0])) {
                const scene = ArrayItem.Get(`/scene`, this._gltf.scenes, this._gltf.scene || 0);
                promises.push(this.loadSceneAsync(`/scenes/${scene.index}`, scene));
            }
            // Restore the blocking of material dirty.
            this._babylonScene.blockMaterialDirtyMechanism = oldBlockMaterialDirtyMechanism;
            if (this._parent.compileMaterials) {
                promises.push(this._compileMaterialsAsync());
            }
            if (this._parent.compileShadowGenerators) {
                promises.push(this._compileShadowGeneratorsAsync());
            }
            const resultPromise = Promise.all(promises).then(() => {
                if (this._rootBabylonMesh) {
                    this._rootBabylonMesh.setEnabled(true);
                }
                this._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].READY);
                this._extensionsOnReady();
                this._startAnimations();
                return resultFunc();
            });
            resultPromise.then(() => {
                this._parent._endPerformanceCounter(loadingToReadyCounterName);
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].SetImmediate(() => {
                    if (!this._disposed) {
                        Promise.all(this._completePromises).then(() => {
                            this._parent._endPerformanceCounter(loadingToCompleteCounterName);
                            this._setState(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].COMPLETE);
                            this._parent.onCompleteObservable.notifyObservers(undefined);
                            this._parent.onCompleteObservable.clear();
                            this.dispose();
                        }, (error) => {
                            this._parent.onErrorObservable.notifyObservers(error);
                            this._parent.onErrorObservable.clear();
                            this.dispose();
                        });
                    }
                });
            });
            return resultPromise;
        }, (error) => {
            if (!this._disposed) {
                this._parent.onErrorObservable.notifyObservers(error);
                this._parent.onErrorObservable.clear();
                this.dispose();
            }
            throw error;
        });
    }
    _loadData(data) {
        this._gltf = data.json;
        this._setupData();
        if (data.bin) {
            const buffers = this._gltf.buffers;
            if (buffers && buffers[0] && !buffers[0].uri) {
                const binaryBuffer = buffers[0];
                if (binaryBuffer.byteLength < data.bin.byteLength - 3 || binaryBuffer.byteLength > data.bin.byteLength) {
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`Binary buffer length (${binaryBuffer.byteLength}) from JSON does not match chunk length (${data.bin.byteLength})`);
                }
                binaryBuffer._data = Promise.resolve(data.bin);
            }
            else {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn("Unexpected BIN chunk");
            }
        }
    }
    _setupData() {
        ArrayItem.Assign(this._gltf.accessors);
        ArrayItem.Assign(this._gltf.animations);
        ArrayItem.Assign(this._gltf.buffers);
        ArrayItem.Assign(this._gltf.bufferViews);
        ArrayItem.Assign(this._gltf.cameras);
        ArrayItem.Assign(this._gltf.images);
        ArrayItem.Assign(this._gltf.materials);
        ArrayItem.Assign(this._gltf.meshes);
        ArrayItem.Assign(this._gltf.nodes);
        ArrayItem.Assign(this._gltf.samplers);
        ArrayItem.Assign(this._gltf.scenes);
        ArrayItem.Assign(this._gltf.skins);
        ArrayItem.Assign(this._gltf.textures);
        if (this._gltf.nodes) {
            const nodeParents = {};
            for (const node of this._gltf.nodes) {
                if (node.children) {
                    for (const index of node.children) {
                        nodeParents[index] = node.index;
                    }
                }
            }
            const rootNode = this._createRootNode();
            for (const node of this._gltf.nodes) {
                const parentIndex = nodeParents[node.index];
                node.parent = parentIndex === undefined ? rootNode : this._gltf.nodes[parentIndex];
            }
        }
    }
    _loadExtensions() {
        for (const name of GLTFLoader._ExtensionNames) {
            const extension = GLTFLoader._ExtensionFactories[name](this);
            this._extensions[name] = extension;
            this._parent.onExtensionLoadedObservable.notifyObservers(extension);
        }
        this._parent.onExtensionLoadedObservable.clear();
    }
    _checkExtensions() {
        if (this._gltf.extensionsRequired) {
            for (const name of this._gltf.extensionsRequired) {
                const extension = this._extensions[name];
                if (!extension || !extension.enabled) {
                    throw new Error(`Require extension ${name} is not available`);
                }
            }
        }
    }
    _setState(state) {
        this._state = state;
        this.log(_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"][this._state]);
    }
    _createRootNode() {
        this._rootBabylonMesh = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Mesh"]("__root__", this._babylonScene);
        this._rootBabylonMesh.setEnabled(false);
        const rootNode = {
            _babylonTransformNode: this._rootBabylonMesh,
            index: -1
        };
        switch (this._parent.coordinateSystemMode) {
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderCoordinateSystemMode"].AUTO: {
                if (!this._babylonScene.useRightHandedSystem) {
                    rootNode.rotation = [0, 1, 0, 0];
                    rootNode.scale = [1, 1, -1];
                    GLTFLoader._LoadTransform(rootNode, this._rootBabylonMesh);
                }
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderCoordinateSystemMode"].FORCE_RIGHT_HANDED: {
                this._babylonScene.useRightHandedSystem = true;
                break;
            }
            default: {
                throw new Error(`Invalid coordinate system mode (${this._parent.coordinateSystemMode})`);
            }
        }
        this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh);
        return rootNode;
    }
    /**
     * Loads a glTF scene.
     * @param context The context when loading the asset
     * @param scene The glTF scene property
     * @returns A promise that resolves when the load is complete
     */
    loadSceneAsync(context, scene) {
        const extensionPromise = this._extensionsLoadSceneAsync(context, scene);
        if (extensionPromise) {
            return extensionPromise;
        }
        const promises = new Array();
        this.logOpen(`${context} ${scene.name || ""}`);
        if (scene.nodes) {
            for (let index of scene.nodes) {
                const node = ArrayItem.Get(`${context}/nodes/${index}`, this._gltf.nodes, index);
                promises.push(this.loadNodeAsync(`/nodes/${node.index}`, node, (babylonMesh) => {
                    babylonMesh.parent = this._rootBabylonMesh;
                }));
            }
        }
        // Link all Babylon bones for each glTF node with the corresponding Babylon transform node.
        // A glTF joint is a pointer to a glTF node in the glTF node hierarchy similar to Unity3D.
        if (this._gltf.nodes) {
            for (const node of this._gltf.nodes) {
                if (node._babylonTransformNode && node._babylonBones) {
                    for (const babylonBone of node._babylonBones) {
                        babylonBone.linkTransformNode(node._babylonTransformNode);
                    }
                }
            }
        }
        promises.push(this._loadAnimationsAsync());
        this.logClose();
        return Promise.all(promises).then(() => { });
    }
    _forEachPrimitive(node, callback) {
        if (node._primitiveBabylonMeshes) {
            for (const babylonMesh of node._primitiveBabylonMeshes) {
                callback(babylonMesh);
            }
        }
    }
    _getMeshes() {
        const meshes = new Array();
        // Root mesh is always first.
        meshes.push(this._rootBabylonMesh);
        const nodes = this._gltf.nodes;
        if (nodes) {
            for (const node of nodes) {
                this._forEachPrimitive(node, (babylonMesh) => {
                    meshes.push(babylonMesh);
                });
            }
        }
        return meshes;
    }
    _getSkeletons() {
        const skeletons = new Array();
        const skins = this._gltf.skins;
        if (skins) {
            for (const skin of skins) {
                if (skin._data) {
                    skeletons.push(skin._data.babylonSkeleton);
                }
            }
        }
        return skeletons;
    }
    _getAnimationGroups() {
        const animationGroups = new Array();
        const animations = this._gltf.animations;
        if (animations) {
            for (const animation of animations) {
                if (animation._babylonAnimationGroup) {
                    animationGroups.push(animation._babylonAnimationGroup);
                }
            }
        }
        return animationGroups;
    }
    _startAnimations() {
        switch (this._parent.animationStartMode) {
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderAnimationStartMode"].NONE: {
                // do nothing
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderAnimationStartMode"].FIRST: {
                const babylonAnimationGroups = this._getAnimationGroups();
                if (babylonAnimationGroups.length !== 0) {
                    babylonAnimationGroups[0].start(true);
                }
                break;
            }
            case _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderAnimationStartMode"].ALL: {
                const babylonAnimationGroups = this._getAnimationGroups();
                for (const babylonAnimationGroup of babylonAnimationGroups) {
                    babylonAnimationGroup.start(true);
                }
                break;
            }
            default: {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Error(`Invalid animation start mode (${this._parent.animationStartMode})`);
                return;
            }
        }
    }
    /**
     * Loads a glTF node.
     * @param context The context when loading the asset
     * @param node The glTF node property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon mesh when the load is complete
     */
    loadNodeAsync(context, node, assign = () => { }) {
        const extensionPromise = this._extensionsLoadNodeAsync(context, node, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (node._babylonTransformNode) {
            throw new Error(`${context}: Invalid recursive node hierarchy`);
        }
        const promises = new Array();
        this.logOpen(`${context} ${node.name || ""}`);
        const loadNode = (babylonTransformNode) => {
            GLTFLoader.AddPointerMetadata(babylonTransformNode, context);
            GLTFLoader._LoadTransform(node, babylonTransformNode);
            if (node.camera != undefined) {
                const camera = ArrayItem.Get(`${context}/camera`, this._gltf.cameras, node.camera);
                promises.push(this.loadCameraAsync(`/cameras/${camera.index}`, camera, (babylonCamera) => {
                    babylonCamera.parent = babylonTransformNode;
                }));
            }
            if (node.children) {
                for (const index of node.children) {
                    const childNode = ArrayItem.Get(`${context}/children/${index}`, this._gltf.nodes, index);
                    promises.push(this.loadNodeAsync(`/nodes/${childNode.index}`, childNode, (childBabylonMesh) => {
                        childBabylonMesh.parent = babylonTransformNode;
                    }));
                }
            }
            assign(babylonTransformNode);
        };
        if (node.mesh == undefined) {
            const nodeName = node.name || `node${node.index}`;
            node._babylonTransformNode = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["TransformNode"](nodeName, this._babylonScene);
            loadNode(node._babylonTransformNode);
        }
        else {
            const mesh = ArrayItem.Get(`${context}/mesh`, this._gltf.meshes, node.mesh);
            promises.push(this._loadMeshAsync(`/meshes/${mesh.index}`, node, mesh, loadNode));
        }
        this.logClose();
        return Promise.all(promises).then(() => {
            this._forEachPrimitive(node, (babylonMesh) => {
                babylonMesh.refreshBoundingInfo(true);
            });
            return node._babylonTransformNode;
        });
    }
    _loadMeshAsync(context, node, mesh, assign) {
        const primitives = mesh.primitives;
        if (!primitives || !primitives.length) {
            throw new Error(`${context}: Primitives are missing`);
        }
        if (primitives[0].index == undefined) {
            ArrayItem.Assign(primitives);
        }
        const promises = new Array();
        this.logOpen(`${context} ${mesh.name || ""}`);
        const name = node.name || `node${node.index}`;
        if (primitives.length === 1) {
            const primitive = mesh.primitives[0];
            promises.push(this._loadMeshPrimitiveAsync(`${context}/primitives/${primitive.index}`, name, node, mesh, primitive, (babylonMesh) => {
                node._babylonTransformNode = babylonMesh;
                node._primitiveBabylonMeshes = [babylonMesh];
            }));
        }
        else {
            node._babylonTransformNode = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["TransformNode"](name, this._babylonScene);
            node._primitiveBabylonMeshes = [];
            for (const primitive of primitives) {
                promises.push(this._loadMeshPrimitiveAsync(`${context}/primitives/${primitive.index}`, `${name}_primitive${primitive.index}`, node, mesh, primitive, (babylonMesh) => {
                    babylonMesh.parent = node._babylonTransformNode;
                    node._primitiveBabylonMeshes.push(babylonMesh);
                }));
            }
        }
        if (node.skin != undefined) {
            const skin = ArrayItem.Get(`${context}/skin`, this._gltf.skins, node.skin);
            promises.push(this._loadSkinAsync(`/skins/${skin.index}`, node, skin));
        }
        assign(node._babylonTransformNode);
        this.logClose();
        return Promise.all(promises).then(() => {
            return node._babylonTransformNode;
        });
    }
    _loadMeshPrimitiveAsync(context, name, node, mesh, primitive, assign) {
        this.logOpen(`${context}`);
        const canInstance = (node.skin == undefined && !mesh.primitives[0].targets);
        let babylonAbstractMesh;
        let promise;
        const instanceData = primitive._instanceData;
        if (canInstance && instanceData) {
            babylonAbstractMesh = instanceData.babylonSourceMesh.createInstance(name);
            promise = instanceData.promise;
        }
        else {
            const promises = new Array();
            const babylonMesh = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Mesh"](name, this._babylonScene);
            this._createMorphTargets(context, node, mesh, primitive, babylonMesh);
            promises.push(this._loadVertexDataAsync(context, primitive, babylonMesh).then((babylonGeometry) => {
                return this._loadMorphTargetsAsync(context, primitive, babylonMesh, babylonGeometry).then(() => {
                    babylonGeometry.applyToMesh(babylonMesh);
                });
            }));
            const babylonDrawMode = GLTFLoader._GetDrawMode(context, primitive.mode);
            if (primitive.material == undefined) {
                let babylonMaterial = this._defaultBabylonMaterialData[babylonDrawMode];
                if (!babylonMaterial) {
                    babylonMaterial = this._createDefaultMaterial("__GLTFLoader._default", babylonDrawMode);
                    this._parent.onMaterialLoadedObservable.notifyObservers(babylonMaterial);
                    this._defaultBabylonMaterialData[babylonDrawMode] = babylonMaterial;
                }
                babylonMesh.material = babylonMaterial;
            }
            else {
                const material = ArrayItem.Get(`${context}/material`, this._gltf.materials, primitive.material);
                promises.push(this._loadMaterialAsync(`/materials/${material.index}`, material, babylonMesh, babylonDrawMode, (babylonMaterial) => {
                    babylonMesh.material = babylonMaterial;
                }));
            }
            promise = Promise.all(promises);
            if (canInstance) {
                primitive._instanceData = {
                    babylonSourceMesh: babylonMesh,
                    promise: promise
                };
            }
            babylonAbstractMesh = babylonMesh;
        }
        GLTFLoader.AddPointerMetadata(babylonAbstractMesh, context);
        this._parent.onMeshLoadedObservable.notifyObservers(babylonAbstractMesh);
        assign(babylonAbstractMesh);
        this.logClose();
        return promise.then(() => {
            return babylonAbstractMesh;
        });
    }
    _loadVertexDataAsync(context, primitive, babylonMesh) {
        const extensionPromise = this._extensionsLoadVertexDataAsync(context, primitive, babylonMesh);
        if (extensionPromise) {
            return extensionPromise;
        }
        const attributes = primitive.attributes;
        if (!attributes) {
            throw new Error(`${context}: Attributes are missing`);
        }
        const promises = new Array();
        const babylonGeometry = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Geometry"](babylonMesh.name, this._babylonScene);
        if (primitive.indices == undefined) {
            babylonMesh.isUnIndexed = true;
        }
        else {
            const accessor = ArrayItem.Get(`${context}/indices`, this._gltf.accessors, primitive.indices);
            promises.push(this._loadIndicesAccessorAsync(`/accessors/${accessor.index}`, accessor).then((data) => {
                babylonGeometry.setIndices(data);
            }));
        }
        const loadAttribute = (attribute, kind, callback) => {
            if (attributes[attribute] == undefined) {
                return;
            }
            babylonMesh._delayInfo = babylonMesh._delayInfo || [];
            if (babylonMesh._delayInfo.indexOf(kind) === -1) {
                babylonMesh._delayInfo.push(kind);
            }
            const accessor = ArrayItem.Get(`${context}/attributes/${attribute}`, this._gltf.accessors, attributes[attribute]);
            promises.push(this._loadVertexAccessorAsync(`/accessors/${accessor.index}`, accessor, kind).then((babylonVertexBuffer) => {
                babylonGeometry.setVerticesBuffer(babylonVertexBuffer, accessor.count);
            }));
            if (callback) {
                callback(accessor);
            }
        };
        loadAttribute("POSITION", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].PositionKind);
        loadAttribute("NORMAL", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].NormalKind);
        loadAttribute("TANGENT", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].TangentKind);
        loadAttribute("TEXCOORD_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].UVKind);
        loadAttribute("TEXCOORD_1", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].UV2Kind);
        loadAttribute("JOINTS_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].MatricesIndicesKind);
        loadAttribute("WEIGHTS_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].MatricesWeightsKind);
        loadAttribute("COLOR_0", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].ColorKind, (accessor) => {
            if (accessor.type === "VEC4" /* VEC4 */) {
                babylonMesh.hasVertexAlpha = true;
            }
        });
        return Promise.all(promises).then(() => {
            return babylonGeometry;
        });
    }
    _createMorphTargets(context, node, mesh, primitive, babylonMesh) {
        if (!primitive.targets) {
            return;
        }
        if (node._numMorphTargets == undefined) {
            node._numMorphTargets = primitive.targets.length;
        }
        else if (primitive.targets.length !== node._numMorphTargets) {
            throw new Error(`${context}: Primitives do not have the same number of targets`);
        }
        babylonMesh.morphTargetManager = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["MorphTargetManager"]();
        for (let index = 0; index < primitive.targets.length; index++) {
            const weight = node.weights ? node.weights[index] : mesh.weights ? mesh.weights[index] : 0;
            babylonMesh.morphTargetManager.addTarget(new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["MorphTarget"](`morphTarget${index}`, weight));
            // TODO: tell the target whether it has positions, normals, tangents
        }
    }
    _loadMorphTargetsAsync(context, primitive, babylonMesh, babylonGeometry) {
        if (!primitive.targets) {
            return Promise.resolve();
        }
        const promises = new Array();
        const morphTargetManager = babylonMesh.morphTargetManager;
        for (let index = 0; index < morphTargetManager.numTargets; index++) {
            const babylonMorphTarget = morphTargetManager.getTarget(index);
            promises.push(this._loadMorphTargetVertexDataAsync(`${context}/targets/${index}`, babylonGeometry, primitive.targets[index], babylonMorphTarget));
        }
        return Promise.all(promises).then(() => { });
    }
    _loadMorphTargetVertexDataAsync(context, babylonGeometry, attributes, babylonMorphTarget) {
        const promises = new Array();
        const loadAttribute = (attribute, kind, setData) => {
            if (attributes[attribute] == undefined) {
                return;
            }
            const babylonVertexBuffer = babylonGeometry.getVertexBuffer(kind);
            if (!babylonVertexBuffer) {
                return;
            }
            const accessor = ArrayItem.Get(`${context}/${attribute}`, this._gltf.accessors, attributes[attribute]);
            promises.push(this._loadFloatAccessorAsync(`/accessors/${accessor.index}`, accessor).then((data) => {
                setData(babylonVertexBuffer, data);
            }));
        };
        loadAttribute("POSITION", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].PositionKind, (babylonVertexBuffer, data) => {
            babylonVertexBuffer.forEach(data.length, (value, index) => {
                data[index] += value;
            });
            babylonMorphTarget.setPositions(data);
        });
        loadAttribute("NORMAL", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].NormalKind, (babylonVertexBuffer, data) => {
            babylonVertexBuffer.forEach(data.length, (value, index) => {
                data[index] += value;
            });
            babylonMorphTarget.setNormals(data);
        });
        loadAttribute("TANGENT", babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].TangentKind, (babylonVertexBuffer, data) => {
            let dataIndex = 0;
            babylonVertexBuffer.forEach(data.length / 3 * 4, (value, index) => {
                // Tangent data for morph targets is stored as xyz delta.
                // The vertexData.tangent is stored as xyzw.
                // So we need to skip every fourth vertexData.tangent.
                if (((index + 1) % 4) !== 0) {
                    data[dataIndex++] += value;
                }
            });
            babylonMorphTarget.setTangents(data);
        });
        return Promise.all(promises).then(() => { });
    }
    static _LoadTransform(node, babylonNode) {
        // Ignore the TRS of skinned nodes.
        // See https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins (second implementation note)
        if (node.skin != undefined) {
            return;
        }
        let position = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        let rotation = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity();
        let scaling = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].One();
        if (node.matrix) {
            const matrix = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Matrix"].FromArray(node.matrix);
            matrix.decompose(scaling, rotation, position);
        }
        else {
            if (node.translation) {
                position = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(node.translation);
            }
            if (node.rotation) {
                rotation = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].FromArray(node.rotation);
            }
            if (node.scale) {
                scaling = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(node.scale);
            }
        }
        babylonNode.position = position;
        babylonNode.rotationQuaternion = rotation;
        babylonNode.scaling = scaling;
    }
    _loadSkinAsync(context, node, skin) {
        const extensionPromise = this._extensionsLoadSkinAsync(context, node, skin);
        if (extensionPromise) {
            return extensionPromise;
        }
        const assignSkeleton = (skeleton) => {
            this._forEachPrimitive(node, (babylonMesh) => {
                babylonMesh.skeleton = skeleton;
            });
        };
        if (skin._data) {
            assignSkeleton(skin._data.babylonSkeleton);
            return skin._data.promise;
        }
        const skeletonId = `skeleton${skin.index}`;
        const babylonSkeleton = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Skeleton"](skin.name || skeletonId, skeletonId, this._babylonScene);
        // See https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins (second implementation note)
        babylonSkeleton.overrideMesh = this._rootBabylonMesh;
        this._loadBones(context, skin, babylonSkeleton);
        assignSkeleton(babylonSkeleton);
        const promise = this._loadSkinInverseBindMatricesDataAsync(context, skin).then((inverseBindMatricesData) => {
            this._updateBoneMatrices(babylonSkeleton, inverseBindMatricesData);
        });
        skin._data = {
            babylonSkeleton: babylonSkeleton,
            promise: promise
        };
        return promise;
    }
    _loadBones(context, skin, babylonSkeleton) {
        const babylonBones = {};
        for (const index of skin.joints) {
            const node = ArrayItem.Get(`${context}/joints/${index}`, this._gltf.nodes, index);
            this._loadBone(node, skin, babylonSkeleton, babylonBones);
        }
    }
    _loadBone(node, skin, babylonSkeleton, babylonBones) {
        let babylonBone = babylonBones[node.index];
        if (babylonBone) {
            return babylonBone;
        }
        let babylonParentBone = null;
        if (node.parent && node.parent._babylonTransformNode !== this._rootBabylonMesh) {
            babylonParentBone = this._loadBone(node.parent, skin, babylonSkeleton, babylonBones);
        }
        const boneIndex = skin.joints.indexOf(node.index);
        babylonBone = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Bone"](node.name || `joint${node.index}`, babylonSkeleton, babylonParentBone, this._getNodeMatrix(node), null, null, boneIndex);
        babylonBones[node.index] = babylonBone;
        node._babylonBones = node._babylonBones || [];
        node._babylonBones.push(babylonBone);
        return babylonBone;
    }
    _loadSkinInverseBindMatricesDataAsync(context, skin) {
        if (skin.inverseBindMatrices == undefined) {
            return Promise.resolve(null);
        }
        const accessor = ArrayItem.Get(`${context}/inverseBindMatrices`, this._gltf.accessors, skin.inverseBindMatrices);
        return this._loadFloatAccessorAsync(`/accessors/${accessor.index}`, accessor);
    }
    _updateBoneMatrices(babylonSkeleton, inverseBindMatricesData) {
        for (const babylonBone of babylonSkeleton.bones) {
            let baseMatrix = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Identity();
            const boneIndex = babylonBone._index;
            if (inverseBindMatricesData && boneIndex !== -1) {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Matrix"].FromArrayToRef(inverseBindMatricesData, boneIndex * 16, baseMatrix);
                baseMatrix.invertToRef(baseMatrix);
            }
            const babylonParentBone = babylonBone.getParent();
            if (babylonParentBone) {
                baseMatrix.multiplyToRef(babylonParentBone.getInvertedAbsoluteTransform(), baseMatrix);
            }
            babylonBone.updateMatrix(baseMatrix, false, false);
            babylonBone._updateDifferenceMatrix(undefined, false);
        }
    }
    _getNodeMatrix(node) {
        return node.matrix ?
            babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Matrix"].FromArray(node.matrix) :
            babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Matrix"].Compose(node.scale ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(node.scale) : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].One(), node.rotation ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].FromArray(node.rotation) : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].Identity(), node.translation ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(node.translation) : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero());
    }
    /**
     * Loads a glTF camera.
     * @param context The context when loading the asset
     * @param camera The glTF camera property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon camera when the load is complete
     */
    loadCameraAsync(context, camera, assign = () => { }) {
        const extensionPromise = this._extensionsLoadCameraAsync(context, camera, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        const promises = new Array();
        this.logOpen(`${context} ${camera.name || ""}`);
        const babylonCamera = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["FreeCamera"](camera.name || `camera${camera.index}`, babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero(), this._babylonScene, false);
        babylonCamera.rotation = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, Math.PI, 0);
        switch (camera.type) {
            case "perspective" /* PERSPECTIVE */: {
                const perspective = camera.perspective;
                if (!perspective) {
                    throw new Error(`${context}: Camera perspective properties are missing`);
                }
                babylonCamera.fov = perspective.yfov;
                babylonCamera.minZ = perspective.znear;
                babylonCamera.maxZ = perspective.zfar || Number.MAX_VALUE;
                break;
            }
            case "orthographic" /* ORTHOGRAPHIC */: {
                if (!camera.orthographic) {
                    throw new Error(`${context}: Camera orthographic properties are missing`);
                }
                babylonCamera.mode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Camera"].ORTHOGRAPHIC_CAMERA;
                babylonCamera.orthoLeft = -camera.orthographic.xmag;
                babylonCamera.orthoRight = camera.orthographic.xmag;
                babylonCamera.orthoBottom = -camera.orthographic.ymag;
                babylonCamera.orthoTop = camera.orthographic.ymag;
                babylonCamera.minZ = camera.orthographic.znear;
                babylonCamera.maxZ = camera.orthographic.zfar;
                break;
            }
            default: {
                throw new Error(`${context}: Invalid camera type (${camera.type})`);
            }
        }
        GLTFLoader.AddPointerMetadata(babylonCamera, context);
        this._parent.onCameraLoadedObservable.notifyObservers(babylonCamera);
        assign(babylonCamera);
        return Promise.all(promises).then(() => {
            return babylonCamera;
        });
    }
    _loadAnimationsAsync() {
        const animations = this._gltf.animations;
        if (!animations) {
            return Promise.resolve();
        }
        const promises = new Array();
        for (let index = 0; index < animations.length; index++) {
            const animation = animations[index];
            promises.push(this.loadAnimationAsync(`/animations/${animation.index}`, animation));
        }
        return Promise.all(promises).then(() => { });
    }
    /**
     * Loads a glTF animation.
     * @param context The context when loading the asset
     * @param animation The glTF animation property
     * @returns A promise that resolves with the loaded Babylon animation group when the load is complete
     */
    loadAnimationAsync(context, animation) {
        const promise = this._extensionsLoadAnimationAsync(context, animation);
        if (promise) {
            return promise;
        }
        const babylonAnimationGroup = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["AnimationGroup"](animation.name || `animation${animation.index}`, this._babylonScene);
        animation._babylonAnimationGroup = babylonAnimationGroup;
        const promises = new Array();
        ArrayItem.Assign(animation.channels);
        ArrayItem.Assign(animation.samplers);
        for (const channel of animation.channels) {
            promises.push(this._loadAnimationChannelAsync(`${context}/channels/${channel.index}`, context, animation, channel, babylonAnimationGroup));
        }
        return Promise.all(promises).then(() => {
            babylonAnimationGroup.normalize(0);
            return babylonAnimationGroup;
        });
    }
    _loadAnimationChannelAsync(context, animationContext, animation, channel, babylonAnimationGroup) {
        if (channel.target.node == undefined) {
            return Promise.resolve();
        }
        const targetNode = ArrayItem.Get(`${context}/target/node`, this._gltf.nodes, channel.target.node);
        // Ignore animations that have no animation targets.
        if ((channel.target.path === "weights" /* WEIGHTS */ && !targetNode._numMorphTargets) ||
            (channel.target.path !== "weights" /* WEIGHTS */ && !targetNode._babylonTransformNode)) {
            return Promise.resolve();
        }
        const sampler = ArrayItem.Get(`${context}/sampler`, animation.samplers, channel.sampler);
        return this._loadAnimationSamplerAsync(`${animationContext}/samplers/${channel.sampler}`, sampler).then((data) => {
            let targetPath;
            let animationType;
            switch (channel.target.path) {
                case "translation" /* TRANSLATION */: {
                    targetPath = "_position";
                    animationType = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Animation"].ANIMATIONTYPE_VECTOR3;
                    break;
                }
                case "rotation" /* ROTATION */: {
                    targetPath = "_rotationQuaternion";
                    animationType = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Animation"].ANIMATIONTYPE_QUATERNION;
                    break;
                }
                case "scale" /* SCALE */: {
                    targetPath = "_scaling";
                    animationType = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Animation"].ANIMATIONTYPE_VECTOR3;
                    break;
                }
                case "weights" /* WEIGHTS */: {
                    targetPath = "influence";
                    animationType = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Animation"].ANIMATIONTYPE_FLOAT;
                    break;
                }
                default: {
                    throw new Error(`${context}/target/path: Invalid value (${channel.target.path})`);
                }
            }
            let outputBufferOffset = 0;
            let getNextOutputValue;
            switch (targetPath) {
                case "_position": {
                    getNextOutputValue = () => {
                        const value = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(data.output, outputBufferOffset);
                        outputBufferOffset += 3;
                        return value;
                    };
                    break;
                }
                case "_rotationQuaternion": {
                    getNextOutputValue = () => {
                        const value = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].FromArray(data.output, outputBufferOffset);
                        outputBufferOffset += 4;
                        return value;
                    };
                    break;
                }
                case "_scaling": {
                    getNextOutputValue = () => {
                        const value = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(data.output, outputBufferOffset);
                        outputBufferOffset += 3;
                        return value;
                    };
                    break;
                }
                case "influence": {
                    getNextOutputValue = () => {
                        const value = new Array(targetNode._numMorphTargets);
                        for (let i = 0; i < targetNode._numMorphTargets; i++) {
                            value[i] = data.output[outputBufferOffset++];
                        }
                        return value;
                    };
                    break;
                }
            }
            let getNextKey;
            switch (data.interpolation) {
                case "STEP" /* STEP */: {
                    getNextKey = (frameIndex) => ({
                        frame: data.input[frameIndex],
                        value: getNextOutputValue(),
                        interpolation: babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["AnimationKeyInterpolation"].STEP
                    });
                    break;
                }
                case "LINEAR" /* LINEAR */: {
                    getNextKey = (frameIndex) => ({
                        frame: data.input[frameIndex],
                        value: getNextOutputValue()
                    });
                    break;
                }
                case "CUBICSPLINE" /* CUBICSPLINE */: {
                    getNextKey = (frameIndex) => ({
                        frame: data.input[frameIndex],
                        inTangent: getNextOutputValue(),
                        value: getNextOutputValue(),
                        outTangent: getNextOutputValue()
                    });
                    break;
                }
            }
            const keys = new Array(data.input.length);
            for (let frameIndex = 0; frameIndex < data.input.length; frameIndex++) {
                keys[frameIndex] = getNextKey(frameIndex);
            }
            if (targetPath === "influence") {
                for (let targetIndex = 0; targetIndex < targetNode._numMorphTargets; targetIndex++) {
                    const animationName = `${babylonAnimationGroup.name}_channel${babylonAnimationGroup.targetedAnimations.length}`;
                    const babylonAnimation = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Animation"](animationName, targetPath, 1, animationType);
                    babylonAnimation.setKeys(keys.map((key) => ({
                        frame: key.frame,
                        inTangent: key.inTangent ? key.inTangent[targetIndex] : undefined,
                        value: key.value[targetIndex],
                        outTangent: key.outTangent ? key.outTangent[targetIndex] : undefined
                    })));
                    this._forEachPrimitive(targetNode, (babylonAbstractMesh) => {
                        const babylonMesh = babylonAbstractMesh;
                        const morphTarget = babylonMesh.morphTargetManager.getTarget(targetIndex);
                        const babylonAnimationClone = babylonAnimation.clone();
                        morphTarget.animations.push(babylonAnimationClone);
                        babylonAnimationGroup.addTargetedAnimation(babylonAnimationClone, morphTarget);
                    });
                }
            }
            else {
                const animationName = `${babylonAnimationGroup.name}_channel${babylonAnimationGroup.targetedAnimations.length}`;
                const babylonAnimation = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Animation"](animationName, targetPath, 1, animationType);
                babylonAnimation.setKeys(keys);
                targetNode._babylonTransformNode.animations.push(babylonAnimation);
                babylonAnimationGroup.addTargetedAnimation(babylonAnimation, targetNode._babylonTransformNode);
            }
        });
    }
    _loadAnimationSamplerAsync(context, sampler) {
        if (sampler._data) {
            return sampler._data;
        }
        const interpolation = sampler.interpolation || "LINEAR" /* LINEAR */;
        switch (interpolation) {
            case "STEP" /* STEP */:
            case "LINEAR" /* LINEAR */:
            case "CUBICSPLINE" /* CUBICSPLINE */: {
                break;
            }
            default: {
                throw new Error(`${context}/interpolation: Invalid value (${sampler.interpolation})`);
            }
        }
        const inputAccessor = ArrayItem.Get(`${context}/input`, this._gltf.accessors, sampler.input);
        const outputAccessor = ArrayItem.Get(`${context}/output`, this._gltf.accessors, sampler.output);
        sampler._data = Promise.all([
            this._loadFloatAccessorAsync(`/accessors/${inputAccessor.index}`, inputAccessor),
            this._loadFloatAccessorAsync(`/accessors/${outputAccessor.index}`, outputAccessor)
        ]).then(([inputData, outputData]) => {
            return {
                input: inputData,
                interpolation: interpolation,
                output: outputData,
            };
        });
        return sampler._data;
    }
    _loadBufferAsync(context, buffer) {
        if (buffer._data) {
            return buffer._data;
        }
        if (!buffer.uri) {
            throw new Error(`${context}/uri: Value is missing`);
        }
        buffer._data = this.loadUriAsync(`${context}/uri`, buffer, buffer.uri);
        return buffer._data;
    }
    /**
     * Loads a glTF buffer view.
     * @param context The context when loading the asset
     * @param bufferView The glTF buffer view property
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadBufferViewAsync(context, bufferView) {
        if (bufferView._data) {
            return bufferView._data;
        }
        const buffer = ArrayItem.Get(`${context}/buffer`, this._gltf.buffers, bufferView.buffer);
        bufferView._data = this._loadBufferAsync(`/buffers/${buffer.index}`, buffer).then((data) => {
            try {
                return new Uint8Array(data.buffer, data.byteOffset + (bufferView.byteOffset || 0), bufferView.byteLength);
            }
            catch (e) {
                throw new Error(`${context}: ${e.message}`);
            }
        });
        return bufferView._data;
    }
    _loadIndicesAccessorAsync(context, accessor) {
        if (accessor.type !== "SCALAR" /* SCALAR */) {
            throw new Error(`${context}/type: Invalid value ${accessor.type}`);
        }
        if (accessor.componentType !== 5121 /* UNSIGNED_BYTE */ &&
            accessor.componentType !== 5123 /* UNSIGNED_SHORT */ &&
            accessor.componentType !== 5125 /* UNSIGNED_INT */) {
            throw new Error(`${context}/componentType: Invalid value ${accessor.componentType}`);
        }
        if (accessor._data) {
            return accessor._data;
        }
        const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, accessor.bufferView);
        accessor._data = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then((data) => {
            return GLTFLoader._GetTypedArray(context, accessor.componentType, data, accessor.byteOffset, accessor.count);
        });
        return accessor._data;
    }
    _loadFloatAccessorAsync(context, accessor) {
        // TODO: support normalized and stride
        if (accessor.componentType !== 5126 /* FLOAT */) {
            throw new Error(`Invalid component type ${accessor.componentType}`);
        }
        if (accessor._data) {
            return accessor._data;
        }
        const numComponents = GLTFLoader._GetNumComponents(context, accessor.type);
        const length = numComponents * accessor.count;
        if (accessor.bufferView == undefined) {
            accessor._data = Promise.resolve(new Float32Array(length));
        }
        else {
            const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, accessor.bufferView);
            accessor._data = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then((data) => {
                return GLTFLoader._GetTypedArray(context, accessor.componentType, data, accessor.byteOffset, length);
            });
        }
        if (accessor.sparse) {
            const sparse = accessor.sparse;
            accessor._data = accessor._data.then((view) => {
                const data = view;
                const indicesBufferView = ArrayItem.Get(`${context}/sparse/indices/bufferView`, this._gltf.bufferViews, sparse.indices.bufferView);
                const valuesBufferView = ArrayItem.Get(`${context}/sparse/values/bufferView`, this._gltf.bufferViews, sparse.values.bufferView);
                return Promise.all([
                    this.loadBufferViewAsync(`/bufferViews/${indicesBufferView.index}`, indicesBufferView),
                    this.loadBufferViewAsync(`/bufferViews/${valuesBufferView.index}`, valuesBufferView)
                ]).then(([indicesData, valuesData]) => {
                    const indices = GLTFLoader._GetTypedArray(`${context}/sparse/indices`, sparse.indices.componentType, indicesData, sparse.indices.byteOffset, sparse.count);
                    const values = GLTFLoader._GetTypedArray(`${context}/sparse/values`, accessor.componentType, valuesData, sparse.values.byteOffset, numComponents * sparse.count);
                    let valuesIndex = 0;
                    for (let indicesIndex = 0; indicesIndex < indices.length; indicesIndex++) {
                        let dataIndex = indices[indicesIndex] * numComponents;
                        for (let componentIndex = 0; componentIndex < numComponents; componentIndex++) {
                            data[dataIndex++] = values[valuesIndex++];
                        }
                    }
                    return data;
                });
            });
        }
        return accessor._data;
    }
    _loadVertexBufferViewAsync(bufferView, kind) {
        if (bufferView._babylonBuffer) {
            return bufferView._babylonBuffer;
        }
        bufferView._babylonBuffer = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView).then((data) => {
            return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Buffer"](this._babylonScene.getEngine(), data, false);
        });
        return bufferView._babylonBuffer;
    }
    _loadVertexAccessorAsync(context, accessor, kind) {
        if (accessor._babylonVertexBuffer) {
            return accessor._babylonVertexBuffer;
        }
        if (accessor.sparse) {
            accessor._babylonVertexBuffer = this._loadFloatAccessorAsync(`/accessors/${accessor.index}`, accessor).then((data) => {
                return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"](this._babylonScene.getEngine(), data, kind, false);
            });
        }
        // HACK: If byte offset is not a multiple of component type byte length then load as a float array instead of using Babylon buffers.
        else if (accessor.byteOffset && accessor.byteOffset % babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"].GetTypeByteLength(accessor.componentType) !== 0) {
            babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn("Accessor byte offset is not a multiple of component type byte length");
            accessor._babylonVertexBuffer = this._loadFloatAccessorAsync(`/accessors/${accessor.index}`, accessor).then((data) => {
                return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"](this._babylonScene.getEngine(), data, kind, false);
            });
        }
        else {
            const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, accessor.bufferView);
            accessor._babylonVertexBuffer = this._loadVertexBufferViewAsync(bufferView, kind).then((babylonBuffer) => {
                const size = GLTFLoader._GetNumComponents(context, accessor.type);
                return new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"](this._babylonScene.getEngine(), babylonBuffer, kind, false, false, bufferView.byteStride, false, accessor.byteOffset, size, accessor.componentType, accessor.normalized, true);
            });
        }
        return accessor._babylonVertexBuffer;
    }
    _loadMaterialMetallicRoughnessPropertiesAsync(context, properties, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
            throw new Error(`${context}: Material type not supported`);
        }
        const promises = new Array();
        if (properties) {
            if (properties.baseColorFactor) {
                babylonMaterial.albedoColor = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(properties.baseColorFactor);
                babylonMaterial.alpha = properties.baseColorFactor[3];
            }
            else {
                babylonMaterial.albedoColor = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Color3"].White();
            }
            babylonMaterial.metallic = properties.metallicFactor == undefined ? 1 : properties.metallicFactor;
            babylonMaterial.roughness = properties.roughnessFactor == undefined ? 1 : properties.roughnessFactor;
            if (properties.baseColorTexture) {
                promises.push(this.loadTextureInfoAsync(`${context}/baseColorTexture`, properties.baseColorTexture, (texture) => {
                    texture.name = `${babylonMaterial.name} (Base Color)`;
                    babylonMaterial.albedoTexture = texture;
                }));
            }
            if (properties.metallicRoughnessTexture) {
                promises.push(this.loadTextureInfoAsync(`${context}/metallicRoughnessTexture`, properties.metallicRoughnessTexture, (texture) => {
                    texture.name = `${babylonMaterial.name} (Metallic Roughness)`;
                    babylonMaterial.metallicTexture = texture;
                }));
                babylonMaterial.useMetallnessFromMetallicTextureBlue = true;
                babylonMaterial.useRoughnessFromMetallicTextureGreen = true;
                babylonMaterial.useRoughnessFromMetallicTextureAlpha = false;
            }
        }
        return Promise.all(promises).then(() => { });
    }
    /** @hidden */
    _loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign = () => { }) {
        const extensionPromise = this._extensionsLoadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        material._data = material._data || {};
        let babylonData = material._data[babylonDrawMode];
        if (!babylonData) {
            this.logOpen(`${context} ${material.name || ""}`);
            const babylonMaterial = this.createMaterial(context, material, babylonDrawMode);
            babylonData = {
                babylonMaterial: babylonMaterial,
                babylonMeshes: [],
                promise: this.loadMaterialPropertiesAsync(context, material, babylonMaterial)
            };
            material._data[babylonDrawMode] = babylonData;
            GLTFLoader.AddPointerMetadata(babylonMaterial, context);
            this._parent.onMaterialLoadedObservable.notifyObservers(babylonMaterial);
            this.logClose();
        }
        babylonData.babylonMeshes.push(babylonMesh);
        babylonMesh.onDisposeObservable.addOnce(() => {
            const index = babylonData.babylonMeshes.indexOf(babylonMesh);
            if (index !== -1) {
                babylonData.babylonMeshes.splice(index, 1);
            }
        });
        assign(babylonData.babylonMaterial);
        return babylonData.promise.then(() => {
            return babylonData.babylonMaterial;
        });
    }
    _createDefaultMaterial(name, babylonDrawMode) {
        const babylonMaterial = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"](name, this._babylonScene);
        babylonMaterial.sideOrientation = this._babylonScene.useRightHandedSystem ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].CounterClockWiseSideOrientation : babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].ClockWiseSideOrientation;
        babylonMaterial.fillMode = babylonDrawMode;
        babylonMaterial.enableSpecularAntiAliasing = true;
        babylonMaterial.useRadianceOverAlpha = !this._parent.transparencyAsCoverage;
        babylonMaterial.useSpecularOverAlpha = !this._parent.transparencyAsCoverage;
        babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"].PBRMATERIAL_OPAQUE;
        babylonMaterial.metallic = 1;
        babylonMaterial.roughness = 1;
        return babylonMaterial;
    }
    /**
     * Creates a Babylon material from a glTF material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonDrawMode The draw mode for the Babylon material
     * @returns The Babylon material
     */
    createMaterial(context, material, babylonDrawMode) {
        const extensionPromise = this._extensionsCreateMaterial(context, material, babylonDrawMode);
        if (extensionPromise) {
            return extensionPromise;
        }
        const name = material.name || `material${material.index}`;
        const babylonMaterial = this._createDefaultMaterial(name, babylonDrawMode);
        return babylonMaterial;
    }
    /**
     * Loads properties from a glTF material into a Babylon material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     * @returns A promise that resolves when the load is complete
     */
    loadMaterialPropertiesAsync(context, material, babylonMaterial) {
        const extensionPromise = this._extensionsLoadMaterialPropertiesAsync(context, material, babylonMaterial);
        if (extensionPromise) {
            return extensionPromise;
        }
        const promises = new Array();
        promises.push(this.loadMaterialBasePropertiesAsync(context, material, babylonMaterial));
        if (material.pbrMetallicRoughness) {
            promises.push(this._loadMaterialMetallicRoughnessPropertiesAsync(`${context}/pbrMetallicRoughness`, material.pbrMetallicRoughness, babylonMaterial));
        }
        this.loadMaterialAlphaProperties(context, material, babylonMaterial);
        return Promise.all(promises).then(() => { });
    }
    /**
     * Loads the normal, occlusion, and emissive properties from a glTF material into a Babylon material.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     * @returns A promise that resolves when the load is complete
     */
    loadMaterialBasePropertiesAsync(context, material, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
            throw new Error(`${context}: Material type not supported`);
        }
        const promises = new Array();
        babylonMaterial.emissiveColor = material.emissiveFactor ? babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Color3"].FromArray(material.emissiveFactor) : new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Color3"](0, 0, 0);
        if (material.doubleSided) {
            babylonMaterial.backFaceCulling = false;
            babylonMaterial.twoSidedLighting = true;
        }
        if (material.normalTexture) {
            promises.push(this.loadTextureInfoAsync(`${context}/normalTexture`, material.normalTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Normal)`;
                babylonMaterial.bumpTexture = texture;
            }));
            babylonMaterial.invertNormalMapX = !this._babylonScene.useRightHandedSystem;
            babylonMaterial.invertNormalMapY = this._babylonScene.useRightHandedSystem;
            if (material.normalTexture.scale != undefined) {
                babylonMaterial.bumpTexture.level = material.normalTexture.scale;
            }
            babylonMaterial.forceIrradianceInFragment = true;
        }
        if (material.occlusionTexture) {
            promises.push(this.loadTextureInfoAsync(`${context}/occlusionTexture`, material.occlusionTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Occlusion)`;
                babylonMaterial.ambientTexture = texture;
            }));
            babylonMaterial.useAmbientInGrayScale = true;
            if (material.occlusionTexture.strength != undefined) {
                babylonMaterial.ambientTextureStrength = material.occlusionTexture.strength;
            }
        }
        if (material.emissiveTexture) {
            promises.push(this.loadTextureInfoAsync(`${context}/emissiveTexture`, material.emissiveTexture, (texture) => {
                texture.name = `${babylonMaterial.name} (Emissive)`;
                babylonMaterial.emissiveTexture = texture;
            }));
        }
        return Promise.all(promises).then(() => { });
    }
    /**
     * Loads the alpha properties from a glTF material into a Babylon material.
     * Must be called after the setting the albedo texture of the Babylon material when the material has an albedo texture.
     * @param context The context when loading the asset
     * @param material The glTF material property
     * @param babylonMaterial The Babylon material
     */
    loadMaterialAlphaProperties(context, material, babylonMaterial) {
        if (!(babylonMaterial instanceof babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"])) {
            throw new Error(`${context}: Material type not supported`);
        }
        const alphaMode = material.alphaMode || "OPAQUE" /* OPAQUE */;
        switch (alphaMode) {
            case "OPAQUE" /* OPAQUE */: {
                babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"].PBRMATERIAL_OPAQUE;
                break;
            }
            case "MASK" /* MASK */: {
                babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"].PBRMATERIAL_ALPHATEST;
                babylonMaterial.alphaCutOff = (material.alphaCutoff == undefined ? 0.5 : material.alphaCutoff);
                if (babylonMaterial.albedoTexture) {
                    babylonMaterial.albedoTexture.hasAlpha = true;
                }
                break;
            }
            case "BLEND" /* BLEND */: {
                babylonMaterial.transparencyMode = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"].PBRMATERIAL_ALPHABLEND;
                if (babylonMaterial.albedoTexture) {
                    babylonMaterial.albedoTexture.hasAlpha = true;
                    babylonMaterial.useAlphaFromAlbedoTexture = true;
                }
                break;
            }
            default: {
                throw new Error(`${context}/alphaMode: Invalid value (${material.alphaMode})`);
            }
        }
    }
    /**
     * Loads a glTF texture info.
     * @param context The context when loading the asset
     * @param textureInfo The glTF texture info property
     * @param assign A function called synchronously after parsing the glTF properties
     * @returns A promise that resolves with the loaded Babylon texture when the load is complete
     */
    loadTextureInfoAsync(context, textureInfo, assign = () => { }) {
        const extensionPromise = this._extensionsLoadTextureInfoAsync(context, textureInfo, assign);
        if (extensionPromise) {
            return extensionPromise;
        }
        this.logOpen(`${context}`);
        const texture = ArrayItem.Get(`${context}/index`, this._gltf.textures, textureInfo.index);
        const promise = this._loadTextureAsync(`/textures/${textureInfo.index}`, texture, (babylonTexture) => {
            babylonTexture.coordinatesIndex = textureInfo.texCoord || 0;
            GLTFLoader.AddPointerMetadata(babylonTexture, context);
            this._parent.onTextureLoadedObservable.notifyObservers(babylonTexture);
            assign(babylonTexture);
        });
        this.logClose();
        return promise;
    }
    _loadTextureAsync(context, texture, assign = () => { }) {
        const promises = new Array();
        this.logOpen(`${context} ${texture.name || ""}`);
        const sampler = (texture.sampler == undefined ? GLTFLoader._DefaultSampler : ArrayItem.Get(`${context}/sampler`, this._gltf.samplers, texture.sampler));
        const samplerData = this._loadSampler(`/samplers/${sampler.index}`, sampler);
        const image = ArrayItem.Get(`${context}/source`, this._gltf.images, texture.source);
        let url = null;
        if (image.uri) {
            if (babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].IsBase64(image.uri)) {
                url = image.uri;
            }
            else if (this._babylonScene.getEngine().textureFormatInUse) {
                // If an image uri and a texture format is set like (eg. KTX) load from url instead of blob to support texture format and fallback
                url = this._rootUrl + image.uri;
            }
        }
        const deferred = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Deferred"]();
        const babylonTexture = new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"](url, this._babylonScene, samplerData.noMipMaps, false, samplerData.samplingMode, () => {
            if (!this._disposed) {
                deferred.resolve();
            }
        }, (message, exception) => {
            if (!this._disposed) {
                deferred.reject(new Error(`${context}: ${(exception && exception.message) ? exception.message : message || "Failed to load texture"}`));
            }
        });
        promises.push(deferred.promise);
        if (!url) {
            promises.push(this.loadImageAsync(`/images/${image.index}`, image).then((data) => {
                const name = image.uri || `${this._fileName}#image${image.index}`;
                const dataUrl = `data:${this._uniqueRootUrl}${name}`;
                babylonTexture.updateURL(dataUrl, new Blob([data], { type: image.mimeType }));
            }));
        }
        babylonTexture.wrapU = samplerData.wrapU;
        babylonTexture.wrapV = samplerData.wrapV;
        assign(babylonTexture);
        this.logClose();
        return Promise.all(promises).then(() => {
            return babylonTexture;
        });
    }
    _loadSampler(context, sampler) {
        if (!sampler._data) {
            sampler._data = {
                noMipMaps: (sampler.minFilter === 9728 /* NEAREST */ || sampler.minFilter === 9729 /* LINEAR */),
                samplingMode: GLTFLoader._GetTextureSamplingMode(context, sampler),
                wrapU: GLTFLoader._GetTextureWrapMode(`${context}/wrapS`, sampler.wrapS),
                wrapV: GLTFLoader._GetTextureWrapMode(`${context}/wrapT`, sampler.wrapT)
            };
        }
        return sampler._data;
    }
    /**
     * Loads a glTF image.
     * @param context The context when loading the asset
     * @param image The glTF image property
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadImageAsync(context, image) {
        if (!image._data) {
            this.logOpen(`${context} ${image.name || ""}`);
            if (image.uri) {
                image._data = this.loadUriAsync(`${context}/uri`, image, image.uri);
            }
            else {
                const bufferView = ArrayItem.Get(`${context}/bufferView`, this._gltf.bufferViews, image.bufferView);
                image._data = this.loadBufferViewAsync(`/bufferViews/${bufferView.index}`, bufferView);
            }
            this.logClose();
        }
        return image._data;
    }
    /**
     * Loads a glTF uri.
     * @param context The context when loading the asset
     * @param property The glTF property associated with the uri
     * @param uri The base64 or relative uri
     * @returns A promise that resolves with the loaded data when the load is complete
     */
    loadUriAsync(context, property, uri) {
        const extensionPromise = this._extensionsLoadUriAsync(context, property, uri);
        if (extensionPromise) {
            return extensionPromise;
        }
        if (!GLTFLoader._ValidateUri(uri)) {
            throw new Error(`${context}: '${uri}' is invalid`);
        }
        if (babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].IsBase64(uri)) {
            const data = new Uint8Array(babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].DecodeBase64(uri));
            this.log(`Decoded ${uri.substr(0, 64)}... (${data.length} bytes)`);
            return Promise.resolve(data);
        }
        this.log(`Loading ${uri}`);
        return this._parent.preprocessUrlAsync(this._rootUrl + uri).then((url) => {
            return new Promise((resolve, reject) => {
                if (!this._disposed) {
                    const request = babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].LoadFile(url, (fileData) => {
                        if (!this._disposed) {
                            const data = new Uint8Array(fileData);
                            this.log(`Loaded ${uri} (${data.length} bytes)`);
                            resolve(data);
                        }
                    }, (event) => {
                        if (!this._disposed) {
                            if (request) {
                                request._lengthComputable = event.lengthComputable;
                                request._loaded = event.loaded;
                                request._total = event.total;
                            }
                            if (this._state === _glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"].LOADING) {
                                try {
                                    this._onProgress();
                                }
                                catch (e) {
                                    reject(e);
                                }
                            }
                        }
                    }, this._babylonScene.offlineProvider, true, (request, exception) => {
                        if (!this._disposed) {
                            reject(new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["LoadFileError"](`${context}: Failed to load '${uri}'${request ? ": " + request.status + " " + request.statusText : ""}`, request));
                        }
                    });
                    this._requests.push(request);
                }
            });
        });
    }
    _onProgress() {
        if (!this._progressCallback) {
            return;
        }
        let lengthComputable = true;
        let loaded = 0;
        let total = 0;
        for (let request of this._requests) {
            if (request._lengthComputable === undefined || request._loaded === undefined || request._total === undefined) {
                return;
            }
            lengthComputable = lengthComputable && request._lengthComputable;
            loaded += request._loaded;
            total += request._total;
        }
        this._progressCallback(new babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["SceneLoaderProgressEvent"](lengthComputable, loaded, lengthComputable ? total : 0));
    }
    /**
     * Adds a JSON pointer to the metadata of the Babylon object at `<object>.metadata.gltf.pointers`.
     * @param babylonObject the Babylon object with metadata
     * @param pointer the JSON pointer
     */
    static AddPointerMetadata(babylonObject, pointer) {
        const metadata = (babylonObject.metadata = babylonObject.metadata || {});
        const gltf = (metadata.gltf = metadata.gltf || {});
        const pointers = (gltf.pointers = gltf.pointers || []);
        pointers.push(pointer);
    }
    static _GetTextureWrapMode(context, mode) {
        // Set defaults if undefined
        mode = mode == undefined ? 10497 /* REPEAT */ : mode;
        switch (mode) {
            case 33071 /* CLAMP_TO_EDGE */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].CLAMP_ADDRESSMODE;
            case 33648 /* MIRRORED_REPEAT */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].MIRROR_ADDRESSMODE;
            case 10497 /* REPEAT */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].WRAP_ADDRESSMODE;
            default:
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`${context}: Invalid value (${mode})`);
                return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].WRAP_ADDRESSMODE;
        }
    }
    static _GetTextureSamplingMode(context, sampler) {
        // Set defaults if undefined
        const magFilter = sampler.magFilter == undefined ? 9729 /* LINEAR */ : sampler.magFilter;
        const minFilter = sampler.minFilter == undefined ? 9987 /* LINEAR_MIPMAP_LINEAR */ : sampler.minFilter;
        if (magFilter === 9729 /* LINEAR */) {
            switch (minFilter) {
                case 9728 /* NEAREST */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_NEAREST;
                case 9729 /* LINEAR */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_LINEAR;
                case 9984 /* NEAREST_MIPMAP_NEAREST */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_NEAREST_MIPNEAREST;
                case 9985 /* LINEAR_MIPMAP_NEAREST */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_LINEAR_MIPNEAREST;
                case 9986 /* NEAREST_MIPMAP_LINEAR */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_NEAREST_MIPLINEAR;
                case 9987 /* LINEAR_MIPMAP_LINEAR */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_LINEAR_MIPLINEAR;
                default:
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`${context}/minFilter: Invalid value (${minFilter})`);
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].LINEAR_LINEAR_MIPLINEAR;
            }
        }
        else {
            if (magFilter !== 9728 /* NEAREST */) {
                babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`${context}/magFilter: Invalid value (${magFilter})`);
            }
            switch (minFilter) {
                case 9728 /* NEAREST */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_NEAREST;
                case 9729 /* LINEAR */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_LINEAR;
                case 9984 /* NEAREST_MIPMAP_NEAREST */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_NEAREST_MIPNEAREST;
                case 9985 /* LINEAR_MIPMAP_NEAREST */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_LINEAR_MIPNEAREST;
                case 9986 /* NEAREST_MIPMAP_LINEAR */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_NEAREST_MIPLINEAR;
                case 9987 /* LINEAR_MIPMAP_LINEAR */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_LINEAR_MIPLINEAR;
                default:
                    babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`${context}/minFilter: Invalid value (${minFilter})`);
                    return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Texture"].NEAREST_NEAREST_MIPNEAREST;
            }
        }
    }
    static _GetTypedArray(context, componentType, bufferView, byteOffset, length) {
        const buffer = bufferView.buffer;
        byteOffset = bufferView.byteOffset + (byteOffset || 0);
        try {
            switch (componentType) {
                case 5120 /* BYTE */: return new Int8Array(buffer, byteOffset, length);
                case 5121 /* UNSIGNED_BYTE */: return new Uint8Array(buffer, byteOffset, length);
                case 5122 /* SHORT */: return new Int16Array(buffer, byteOffset, length);
                case 5123 /* UNSIGNED_SHORT */: return new Uint16Array(buffer, byteOffset, length);
                case 5125 /* UNSIGNED_INT */: return new Uint32Array(buffer, byteOffset, length);
                case 5126 /* FLOAT */: return new Float32Array(buffer, byteOffset, length);
                default: throw new Error(`Invalid component type ${componentType}`);
            }
        }
        catch (e) {
            throw new Error(`${context}: ${e}`);
        }
    }
    static _GetNumComponents(context, type) {
        switch (type) {
            case "SCALAR": return 1;
            case "VEC2": return 2;
            case "VEC3": return 3;
            case "VEC4": return 4;
            case "MAT2": return 4;
            case "MAT3": return 9;
            case "MAT4": return 16;
        }
        throw new Error(`${context}: Invalid type (${type})`);
    }
    static _ValidateUri(uri) {
        return (babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Tools"].IsBase64(uri) || uri.indexOf("..") === -1);
    }
    static _GetDrawMode(context, mode) {
        if (mode == undefined) {
            mode = 4 /* TRIANGLES */;
        }
        switch (mode) {
            case 0 /* POINTS */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].PointListDrawMode;
            case 1 /* LINES */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].LineListDrawMode;
            case 2 /* LINE_LOOP */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].LineLoopDrawMode;
            case 3 /* LINE_STRIP */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].LineStripDrawMode;
            case 4 /* TRIANGLES */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].TriangleFillMode;
            case 5 /* TRIANGLE_STRIP */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].TriangleStripDrawMode;
            case 6 /* TRIANGLE_FAN */: return babylonjs_Misc_deferred__WEBPACK_IMPORTED_MODULE_0__["Material"].TriangleFanDrawMode;
        }
        throw new Error(`${context}: Invalid mesh primitive mode (${mode})`);
    }
    _compileMaterialsAsync() {
        this._parent._startPerformanceCounter("Compile materials");
        const promises = new Array();
        if (this._gltf.materials) {
            for (const material of this._gltf.materials) {
                if (material._data) {
                    for (const babylonDrawMode in material._data) {
                        const babylonData = material._data[babylonDrawMode];
                        for (const babylonMesh of babylonData.babylonMeshes) {
                            // Ensure nonUniformScaling is set if necessary.
                            babylonMesh.computeWorldMatrix(true);
                            const babylonMaterial = babylonData.babylonMaterial;
                            promises.push(babylonMaterial.forceCompilationAsync(babylonMesh));
                            if (this._parent.useClipPlane) {
                                promises.push(babylonMaterial.forceCompilationAsync(babylonMesh, { clipPlane: true }));
                            }
                        }
                    }
                }
            }
        }
        return Promise.all(promises).then(() => {
            this._parent._endPerformanceCounter("Compile materials");
        });
    }
    _compileShadowGeneratorsAsync() {
        this._parent._startPerformanceCounter("Compile shadow generators");
        const promises = new Array();
        const lights = this._babylonScene.lights;
        for (let light of lights) {
            let generator = light.getShadowGenerator();
            if (generator) {
                promises.push(generator.forceCompilationAsync());
            }
        }
        return Promise.all(promises).then(() => {
            this._parent._endPerformanceCounter("Compile shadow generators");
        });
    }
    _forEachExtensions(action) {
        for (const name of GLTFLoader._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.enabled) {
                action(extension);
            }
        }
    }
    _applyExtensions(property, functionName, actionAsync) {
        for (const name of GLTFLoader._ExtensionNames) {
            const extension = this._extensions[name];
            if (extension.enabled) {
                const id = `${name}.${functionName}`;
                const loaderProperty = property;
                loaderProperty._activeLoaderExtensionFunctions = loaderProperty._activeLoaderExtensionFunctions || {};
                const activeLoaderExtensionFunctions = loaderProperty._activeLoaderExtensionFunctions;
                if (!activeLoaderExtensionFunctions[id]) {
                    activeLoaderExtensionFunctions[id] = true;
                    try {
                        const result = actionAsync(extension);
                        if (result) {
                            return result;
                        }
                    }
                    finally {
                        delete activeLoaderExtensionFunctions[id];
                    }
                }
            }
        }
        return null;
    }
    _extensionsOnLoading() {
        this._forEachExtensions((extension) => extension.onLoading && extension.onLoading());
    }
    _extensionsOnReady() {
        this._forEachExtensions((extension) => extension.onReady && extension.onReady());
    }
    _extensionsLoadSceneAsync(context, scene) {
        return this._applyExtensions(scene, "loadScene", (extension) => extension.loadSceneAsync && extension.loadSceneAsync(context, scene));
    }
    _extensionsLoadNodeAsync(context, node, assign) {
        return this._applyExtensions(node, "loadNode", (extension) => extension.loadNodeAsync && extension.loadNodeAsync(context, node, assign));
    }
    _extensionsLoadCameraAsync(context, camera, assign) {
        return this._applyExtensions(camera, "loadCamera", (extension) => extension.loadCameraAsync && extension.loadCameraAsync(context, camera, assign));
    }
    _extensionsLoadVertexDataAsync(context, primitive, babylonMesh) {
        return this._applyExtensions(primitive, "loadVertexData", (extension) => extension._loadVertexDataAsync && extension._loadVertexDataAsync(context, primitive, babylonMesh));
    }
    _extensionsLoadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign) {
        return this._applyExtensions(material, "loadMaterial", (extension) => extension._loadMaterialAsync && extension._loadMaterialAsync(context, material, babylonMesh, babylonDrawMode, assign));
    }
    _extensionsCreateMaterial(context, material, babylonDrawMode) {
        return this._applyExtensions(material, "createMaterial", (extension) => extension.createMaterial && extension.createMaterial(context, material, babylonDrawMode));
    }
    _extensionsLoadMaterialPropertiesAsync(context, material, babylonMaterial) {
        return this._applyExtensions(material, "loadMaterialProperties", (extension) => extension.loadMaterialPropertiesAsync && extension.loadMaterialPropertiesAsync(context, material, babylonMaterial));
    }
    _extensionsLoadTextureInfoAsync(context, textureInfo, assign) {
        return this._applyExtensions(textureInfo, "loadTextureInfo", (extension) => extension.loadTextureInfoAsync && extension.loadTextureInfoAsync(context, textureInfo, assign));
    }
    _extensionsLoadAnimationAsync(context, animation) {
        return this._applyExtensions(animation, "loadAnimation", (extension) => extension.loadAnimationAsync && extension.loadAnimationAsync(context, animation));
    }
    _extensionsLoadSkinAsync(context, node, skin) {
        return this._applyExtensions(skin, "loadSkin", (extension) => extension._loadSkinAsync && extension._loadSkinAsync(context, node, skin));
    }
    _extensionsLoadUriAsync(context, property, uri) {
        return this._applyExtensions(property, "loadUri", (extension) => extension._loadUriAsync && extension._loadUriAsync(context, property, uri));
    }
    /**
     * Helper method called by a loader extension to load an glTF extension.
     * @param context The context when loading the asset
     * @param property The glTF property to load the extension from
     * @param extensionName The name of the extension to load
     * @param actionAsync The action to run
     * @returns The promise returned by actionAsync or null if the extension does not exist
     */
    static LoadExtensionAsync(context, property, extensionName, actionAsync) {
        if (!property.extensions) {
            return null;
        }
        const extensions = property.extensions;
        const extension = extensions[extensionName];
        if (!extension) {
            return null;
        }
        return actionAsync(`${context}/extensions/${extensionName}`, extension);
    }
    /**
     * Helper method called by a loader extension to load a glTF extra.
     * @param context The context when loading the asset
     * @param property The glTF property to load the extra from
     * @param extensionName The name of the extension to load
     * @param actionAsync The action to run
     * @returns The promise returned by actionAsync or null if the extra does not exist
     */
    static LoadExtraAsync(context, property, extensionName, actionAsync) {
        if (!property.extras) {
            return null;
        }
        const extras = property.extras;
        const extra = extras[extensionName];
        if (!extra) {
            return null;
        }
        return actionAsync(`${context}/extras/${extensionName}`, extra);
    }
    /**
     * Increments the indentation level and logs a message.
     * @param message The message to log
     */
    logOpen(message) {
        this._parent._logOpen(message);
    }
    /**
     * Decrements the indentation level.
     */
    logClose() {
        this._parent._logClose();
    }
    /**
     * Logs a message
     * @param message The message to log
     */
    log(message) {
        this._parent._log(message);
    }
    /**
     * Starts a performance counter.
     * @param counterName The name of the performance counter
     */
    startPerformanceCounter(counterName) {
        this._parent._startPerformanceCounter(counterName);
    }
    /**
     * Ends a performance counter.
     * @param counterName The name of the performance counter
     */
    endPerformanceCounter(counterName) {
        this._parent._endPerformanceCounter(counterName);
    }
}
GLTFLoader._DefaultSampler = { index: -1 };
GLTFLoader._ExtensionNames = new Array();
GLTFLoader._ExtensionFactories = {};
_glTFFileLoader__WEBPACK_IMPORTED_MODULE_1__["GLTFFileLoader"]._CreateGLTF2Loader = (parent) => new GLTFLoader(parent);


/***/ }),

/***/ "./glTF/2.0/glTFLoaderInterfaces.ts":
/*!******************************************!*\
  !*** ./glTF/2.0/glTFLoaderInterfaces.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./glTF/2.0/index.ts":
/*!***************************!*\
  !*** ./glTF/2.0/index.ts ***!
  \***************************/
/*! exports provided: ArrayItem, GLTFLoader, EXT_lights_image_based, KHR_draco_mesh_compression, KHR_lights, KHR_materials_pbrSpecularGlossiness, KHR_materials_unlit, KHR_texture_transform, MSFT_audio_emitter, MSFT_lod, MSFT_minecraftMesh, MSFT_sRGBFactors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "./glTF/2.0/glTFLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayItem", function() { return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__["ArrayItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoader", function() { return _glTFLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoader"]; });

/* harmony import */ var _Extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extensions */ "./glTF/2.0/Extensions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXT_lights_image_based", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["EXT_lights_image_based"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_draco_mesh_compression", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["KHR_draco_mesh_compression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_lights", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["KHR_lights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_materials_pbrSpecularGlossiness", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["KHR_materials_pbrSpecularGlossiness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_materials_unlit", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["KHR_materials_unlit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KHR_texture_transform", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["KHR_texture_transform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_audio_emitter", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["MSFT_audio_emitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_lod", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["MSFT_lod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_minecraftMesh", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["MSFT_minecraftMesh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSFT_sRGBFactors", function() { return _Extensions__WEBPACK_IMPORTED_MODULE_1__["MSFT_sRGBFactors"]; });





/***/ }),

/***/ "./glTF/glTFFileLoader.ts":
/*!********************************!*\
  !*** ./glTF/glTFFileLoader.ts ***!
  \********************************/
/*! exports provided: GLTFLoaderCoordinateSystemMode, GLTFLoaderAnimationStartMode, GLTFLoaderState, GLTFFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderCoordinateSystemMode", function() { return GLTFLoaderCoordinateSystemMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderAnimationStartMode", function() { return GLTFLoaderAnimationStartMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderState", function() { return GLTFLoaderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFFileLoader", function() { return GLTFFileLoader; });
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/observable */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);




/**
 * Mode that determines the coordinate system to use.
 */
var GLTFLoaderCoordinateSystemMode;
(function (GLTFLoaderCoordinateSystemMode) {
    /**
     * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
    /**
     * Sets the useRightHandedSystem flag on the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
})(GLTFLoaderCoordinateSystemMode || (GLTFLoaderCoordinateSystemMode = {}));
/**
 * Mode that determines what animations will start.
 */
var GLTFLoaderAnimationStartMode;
(function (GLTFLoaderAnimationStartMode) {
    /**
     * No animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
    /**
     * The first animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
    /**
     * All animations will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
})(GLTFLoaderAnimationStartMode || (GLTFLoaderAnimationStartMode = {}));
/**
 * Loader state.
 */
var GLTFLoaderState;
(function (GLTFLoaderState) {
    /**
     * The asset is loading.
     */
    GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
    /**
     * The asset is ready for rendering.
     */
    GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
    /**
     * The asset is completely loaded.
     */
    GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
})(GLTFLoaderState || (GLTFLoaderState = {}));
/**
 * File loader for loading glTF files into a scene.
 */
class GLTFFileLoader {
    constructor() {
        // --------------
        // Common options
        // --------------
        /**
         * Raised when the asset has been parsed
         */
        this.onParsedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        // ----------
        // V2 options
        // ----------
        /**
         * The coordinate system mode. Defaults to AUTO.
         */
        this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
        /**
        * The animation start mode. Defaults to FIRST.
        */
        this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
        /**
         * Defines if the loader should compile materials before raising the success callback. Defaults to false.
         */
        this.compileMaterials = false;
        /**
         * Defines if the loader should also compile materials with clip planes. Defaults to false.
         */
        this.useClipPlane = false;
        /**
         * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
         */
        this.compileShadowGenerators = false;
        /**
         * Defines if the Alpha blended materials are only applied as coverage.
         * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
         * If true, no extra effects are applied to transparent pixels.
         */
        this.transparencyAsCoverage = false;
        /**
         * Function called before loading a url referenced by the asset.
         */
        this.preprocessUrlAsync = (url) => Promise.resolve(url);
        /**
         * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         */
        this.onMeshLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        this.onTextureLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised when the loader creates a material after parsing the glTF properties of the material.
         */
        this.onMaterialLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        this.onCameraLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        this.onCompleteObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised when an error occurs.
         */
        this.onErrorObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised after the loader is disposed.
         */
        this.onDisposeObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Observable raised after a loader extension is created.
         * Set additional options for a loader extension in this event.
         */
        this.onExtensionLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        /**
         * Defines if the loader should validate the asset.
         */
        this.validate = false;
        /**
         * Observable raised after validation when validate is set to true. The event data is the result of the validation.
         */
        this.onValidatedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this._loader = null;
        /**
         * Name of the loader ("gltf")
         */
        this.name = "gltf";
        /**
         * Supported file extensions of the loader (.gltf, .glb)
         */
        this.extensions = {
            ".gltf": { isBinary: false },
            ".glb": { isBinary: true }
        };
        this._logIndentLevel = 0;
        this._loggingEnabled = false;
        /** @hidden */
        this._log = this._logDisabled;
        this._capturePerformanceCounters = false;
        /** @hidden */
        this._startPerformanceCounter = this._startPerformanceCounterDisabled;
        /** @hidden */
        this._endPerformanceCounter = this._endPerformanceCounterDisabled;
    }
    /**
     * Raised when the asset has been parsed
     */
    set onParsed(callback) {
        if (this._onParsedObserver) {
            this.onParsedObservable.remove(this._onParsedObserver);
        }
        this._onParsedObserver = this.onParsedObservable.add(callback);
    }
    /**
     * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
     */
    set onMeshLoaded(callback) {
        if (this._onMeshLoadedObserver) {
            this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
        }
        this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
    }
    /**
     * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
     */
    set onTextureLoaded(callback) {
        if (this._onTextureLoadedObserver) {
            this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
        }
        this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
    }
    /**
     * Callback raised when the loader creates a material after parsing the glTF properties of the material.
     */
    set onMaterialLoaded(callback) {
        if (this._onMaterialLoadedObserver) {
            this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
        }
        this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
    }
    /**
     * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
     */
    set onCameraLoaded(callback) {
        if (this._onCameraLoadedObserver) {
            this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
        }
        this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
    }
    /**
     * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
     * For assets with LODs, raised when all of the LODs are complete.
     * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
     */
    set onComplete(callback) {
        if (this._onCompleteObserver) {
            this.onCompleteObservable.remove(this._onCompleteObserver);
        }
        this._onCompleteObserver = this.onCompleteObservable.add(callback);
    }
    /**
     * Callback raised when an error occurs.
     */
    set onError(callback) {
        if (this._onErrorObserver) {
            this.onErrorObservable.remove(this._onErrorObserver);
        }
        this._onErrorObserver = this.onErrorObservable.add(callback);
    }
    /**
     * Callback raised after the loader is disposed.
     */
    set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /**
     * Callback raised after a loader extension is created.
     */
    set onExtensionLoaded(callback) {
        if (this._onExtensionLoadedObserver) {
            this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
        }
        this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
    }
    /**
     * Defines if the loader logging is enabled.
     */
    get loggingEnabled() {
        return this._loggingEnabled;
    }
    set loggingEnabled(value) {
        if (this._loggingEnabled === value) {
            return;
        }
        this._loggingEnabled = value;
        if (this._loggingEnabled) {
            this._log = this._logEnabled;
        }
        else {
            this._log = this._logDisabled;
        }
    }
    /**
     * Defines if the loader should capture performance counters.
     */
    get capturePerformanceCounters() {
        return this._capturePerformanceCounters;
    }
    set capturePerformanceCounters(value) {
        if (this._capturePerformanceCounters === value) {
            return;
        }
        this._capturePerformanceCounters = value;
        if (this._capturePerformanceCounters) {
            this._startPerformanceCounter = this._startPerformanceCounterEnabled;
            this._endPerformanceCounter = this._endPerformanceCounterEnabled;
        }
        else {
            this._startPerformanceCounter = this._startPerformanceCounterDisabled;
            this._endPerformanceCounter = this._endPerformanceCounterDisabled;
        }
    }
    /**
     * Callback raised after a loader extension is created.
     */
    set onValidated(callback) {
        if (this._onValidatedObserver) {
            this.onValidatedObservable.remove(this._onValidatedObserver);
        }
        this._onValidatedObserver = this.onValidatedObservable.add(callback);
    }
    /**
     * Disposes the loader, releases resources during load, and cancels any outstanding requests.
     */
    dispose() {
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        this._clear();
        this.onDisposeObservable.notifyObservers(undefined);
        this.onDisposeObservable.clear();
    }
    /** @hidden */
    _clear() {
        this.preprocessUrlAsync = (url) => Promise.resolve(url);
        this.onMeshLoadedObservable.clear();
        this.onTextureLoadedObservable.clear();
        this.onMaterialLoadedObservable.clear();
        this.onCameraLoadedObservable.clear();
        this.onCompleteObservable.clear();
        this.onExtensionLoadedObservable.clear();
    }
    /**
     * Imports one or more meshes from the loaded glTF data and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the glTF data to load
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @param fileName Defines the name of the file to load
     * @returns a promise containg the loaded meshes, particles, skeletons and animations
     */
    importMeshAsync(meshesNames, scene, data, rootUrl, onProgress, fileName) {
        return this._parseAsync(scene, data, rootUrl, fileName).then((loaderData) => {
            this._log(`Loading ${fileName || ""}`);
            this._loader = this._getLoader(loaderData);
            return this._loader.importMeshAsync(meshesNames, scene, loaderData, rootUrl, onProgress, fileName);
        });
    }
    /**
     * Imports all objects from the loaded glTF data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the glTF data to load
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @param fileName Defines the name of the file to load
     * @returns a promise which completes when objects have been loaded to the scene
     */
    loadAsync(scene, data, rootUrl, onProgress, fileName) {
        return this._parseAsync(scene, data, rootUrl, fileName).then((loaderData) => {
            this._log(`Loading ${fileName || ""}`);
            this._loader = this._getLoader(loaderData);
            return this._loader.loadAsync(scene, loaderData, rootUrl, onProgress, fileName);
        });
    }
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param onProgress The callback when the load progresses
     * @param fileName Defines the name of the file to load
     * @returns The loaded asset container
     */
    loadAssetContainerAsync(scene, data, rootUrl, onProgress, fileName) {
        return this._parseAsync(scene, data, rootUrl, fileName).then((loaderData) => {
            this._log(`Loading ${fileName || ""}`);
            this._loader = this._getLoader(loaderData);
            // Get materials/textures when loading to add to container
            let materials = [];
            this.onMaterialLoadedObservable.add((material) => {
                materials.push(material);
            });
            let textures = [];
            this.onTextureLoadedObservable.add((texture) => {
                textures.push(texture);
            });
            return this._loader.importMeshAsync(null, scene, loaderData, rootUrl, onProgress, fileName).then((result) => {
                const container = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["AssetContainer"](scene);
                Array.prototype.push.apply(container.meshes, result.meshes);
                Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                Array.prototype.push.apply(container.skeletons, result.skeletons);
                Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                Array.prototype.push.apply(container.materials, materials);
                Array.prototype.push.apply(container.textures, textures);
                container.removeAllFromScene();
                return container;
            });
        });
    }
    /**
     * If the data string can be loaded directly.
     * @param data string contianing the file data
     * @returns if the data can be loaded directly
     */
    canDirectLoad(data) {
        return ((data.indexOf("scene") !== -1) && (data.indexOf("node") !== -1));
    }
    /**
     * Instantiates a glTF file loader plugin.
     * @returns the created plugin
     */
    createPlugin() {
        return new GLTFFileLoader();
    }
    /**
     * The loader state or null if the loader is not active.
     */
    get loaderState() {
        return this._loader ? this._loader.state : null;
    }
    /**
     * Returns a promise that resolves when the asset is completely loaded.
     * @returns a promise that resolves when the asset is completely loaded.
     */
    whenCompleteAsync() {
        return new Promise((resolve, reject) => {
            this.onCompleteObservable.addOnce(() => {
                resolve();
            });
            this.onErrorObservable.addOnce((reason) => {
                reject(reason);
            });
        });
    }
    _parseAsync(scene, data, rootUrl, fileName) {
        return Promise.resolve().then(() => {
            const unpacked = (data instanceof ArrayBuffer) ? this._unpackBinary(data) : { json: data, bin: null };
            return this._validateAsync(scene, unpacked.json, rootUrl, fileName).then(() => {
                this._startPerformanceCounter("Parse JSON");
                this._log(`JSON length: ${unpacked.json.length}`);
                const loaderData = {
                    json: JSON.parse(unpacked.json),
                    bin: unpacked.bin
                };
                this._endPerformanceCounter("Parse JSON");
                this.onParsedObservable.notifyObservers(loaderData);
                this.onParsedObservable.clear();
                return loaderData;
            });
        });
    }
    _validateAsync(scene, json, rootUrl, fileName) {
        if (!this.validate || typeof GLTFValidator === "undefined") {
            return Promise.resolve();
        }
        this._startPerformanceCounter("Validate JSON");
        const options = {
            externalResourceFunction: (uri) => {
                return this.preprocessUrlAsync(rootUrl + uri)
                    .then((url) => scene._loadFileAsync(url, true, true))
                    .then((data) => new Uint8Array(data));
            }
        };
        if (fileName && fileName.substr(0, 5) !== "data:") {
            options.uri = (rootUrl === "file:" ? fileName : `${rootUrl}${fileName}`);
        }
        return GLTFValidator.validateString(json, options).then((result) => {
            this._endPerformanceCounter("Validate JSON");
            this.onValidatedObservable.notifyObservers(result);
            this.onValidatedObservable.clear();
        }, (reason) => {
            this._endPerformanceCounter("Validate JSON");
            babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Tools"].Warn(`Failed to validate: ${reason}`);
            this.onValidatedObservable.clear();
        });
    }
    _getLoader(loaderData) {
        const asset = loaderData.json.asset || {};
        this._log(`Asset version: ${asset.version}`);
        asset.minVersion && this._log(`Asset minimum version: ${asset.minVersion}`);
        asset.generator && this._log(`Asset generator: ${asset.generator}`);
        const version = GLTFFileLoader._parseVersion(asset.version);
        if (!version) {
            throw new Error("Invalid version: " + asset.version);
        }
        if (asset.minVersion !== undefined) {
            const minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
            if (!minVersion) {
                throw new Error("Invalid minimum version: " + asset.minVersion);
            }
            if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                throw new Error("Incompatible minimum version: " + asset.minVersion);
            }
        }
        const createLoaders = {
            1: GLTFFileLoader._CreateGLTF1Loader,
            2: GLTFFileLoader._CreateGLTF2Loader
        };
        const createLoader = createLoaders[version.major];
        if (!createLoader) {
            throw new Error("Unsupported version: " + asset.version);
        }
        return createLoader(this);
    }
    _unpackBinary(data) {
        this._startPerformanceCounter("Unpack binary");
        this._log(`Binary length: ${data.byteLength}`);
        const Binary = {
            Magic: 0x46546C67
        };
        const binaryReader = new BinaryReader(data);
        const magic = binaryReader.readUint32();
        if (magic !== Binary.Magic) {
            throw new Error("Unexpected magic: " + magic);
        }
        const version = binaryReader.readUint32();
        if (this.loggingEnabled) {
            this._log(`Binary version: ${version}`);
        }
        let unpacked;
        switch (version) {
            case 1: {
                unpacked = this._unpackBinaryV1(binaryReader);
                break;
            }
            case 2: {
                unpacked = this._unpackBinaryV2(binaryReader);
                break;
            }
            default: {
                throw new Error("Unsupported version: " + version);
            }
        }
        this._endPerformanceCounter("Unpack binary");
        return unpacked;
    }
    _unpackBinaryV1(binaryReader) {
        const ContentFormat = {
            JSON: 0
        };
        const length = binaryReader.readUint32();
        if (length != binaryReader.getLength()) {
            throw new Error("Length in header does not match actual data length: " + length + " != " + binaryReader.getLength());
        }
        const contentLength = binaryReader.readUint32();
        const contentFormat = binaryReader.readUint32();
        let content;
        switch (contentFormat) {
            case ContentFormat.JSON: {
                content = GLTFFileLoader._decodeBufferToText(binaryReader.readUint8Array(contentLength));
                break;
            }
            default: {
                throw new Error("Unexpected content format: " + contentFormat);
            }
        }
        const bytesRemaining = binaryReader.getLength() - binaryReader.getPosition();
        const body = binaryReader.readUint8Array(bytesRemaining);
        return {
            json: content,
            bin: body
        };
    }
    _unpackBinaryV2(binaryReader) {
        const ChunkFormat = {
            JSON: 0x4E4F534A,
            BIN: 0x004E4942
        };
        const length = binaryReader.readUint32();
        if (length !== binaryReader.getLength()) {
            throw new Error("Length in header does not match actual data length: " + length + " != " + binaryReader.getLength());
        }
        // JSON chunk
        const chunkLength = binaryReader.readUint32();
        const chunkFormat = binaryReader.readUint32();
        if (chunkFormat !== ChunkFormat.JSON) {
            throw new Error("First chunk format is not JSON");
        }
        const json = GLTFFileLoader._decodeBufferToText(binaryReader.readUint8Array(chunkLength));
        // Look for BIN chunk
        let bin = null;
        while (binaryReader.getPosition() < binaryReader.getLength()) {
            const chunkLength = binaryReader.readUint32();
            const chunkFormat = binaryReader.readUint32();
            switch (chunkFormat) {
                case ChunkFormat.JSON: {
                    throw new Error("Unexpected JSON chunk");
                }
                case ChunkFormat.BIN: {
                    bin = binaryReader.readUint8Array(chunkLength);
                    break;
                }
                default: {
                    // ignore unrecognized chunkFormat
                    binaryReader.skipBytes(chunkLength);
                    break;
                }
            }
        }
        return {
            json: json,
            bin: bin
        };
    }
    static _parseVersion(version) {
        if (version === "1.0" || version === "1.0.1") {
            return {
                major: 1,
                minor: 0
            };
        }
        const match = (version + "").match(/^(\d+)\.(\d+)/);
        if (!match) {
            return null;
        }
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2])
        };
    }
    static _compareVersion(a, b) {
        if (a.major > b.major) {
            return 1;
        }
        if (a.major < b.major) {
            return -1;
        }
        if (a.minor > b.minor) {
            return 1;
        }
        if (a.minor < b.minor) {
            return -1;
        }
        return 0;
    }
    static _decodeBufferToText(buffer) {
        if (typeof TextDecoder !== "undefined") {
            return new TextDecoder().decode(buffer);
        }
        let result = "";
        const length = buffer.byteLength;
        for (let i = 0; i < length; i++) {
            result += String.fromCharCode(buffer[i]);
        }
        return result;
    }
    /** @hidden */
    _logOpen(message) {
        this._log(message);
        this._logIndentLevel++;
    }
    /** @hidden */
    _logClose() {
        --this._logIndentLevel;
    }
    _logEnabled(message) {
        const spaces = GLTFFileLoader._logSpaces.substr(0, this._logIndentLevel * 2);
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Tools"].Log(`${spaces}${message}`);
    }
    _logDisabled(message) {
    }
    _startPerformanceCounterEnabled(counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Tools"].StartPerformanceCounter(counterName);
    }
    _startPerformanceCounterDisabled(counterName) {
    }
    _endPerformanceCounterEnabled(counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["Tools"].EndPerformanceCounter(counterName);
    }
    _endPerformanceCounterDisabled(counterName) {
    }
}
// ----------
// V1 options
// ----------
/**
 * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
 * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
 * Defaults to true.
 * @hidden
 */
GLTFFileLoader.IncrementalLoading = true;
/**
 * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
 * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
 * @hidden
 */
GLTFFileLoader.HomogeneousCoordinates = false;
GLTFFileLoader._logSpaces = "                                ";
class BinaryReader {
    constructor(arrayBuffer) {
        this._arrayBuffer = arrayBuffer;
        this._dataView = new DataView(arrayBuffer);
        this._byteOffset = 0;
    }
    getPosition() {
        return this._byteOffset;
    }
    getLength() {
        return this._arrayBuffer.byteLength;
    }
    readUint32() {
        const value = this._dataView.getUint32(this._byteOffset, true);
        this._byteOffset += 4;
        return value;
    }
    readUint8Array(length) {
        const value = new Uint8Array(this._arrayBuffer, this._byteOffset, length);
        this._byteOffset += length;
        return value;
    }
    skipBytes(length) {
        this._byteOffset += length;
    }
}
if (babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"]) {
    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].RegisterPlugin(new GLTFFileLoader());
}


/***/ }),

/***/ "./glTF/index.ts":
/*!***********************!*\
  !*** ./glTF/index.ts ***!
  \***********************/
/*! exports provided: GLTFLoaderCoordinateSystemMode, GLTFLoaderAnimationStartMode, GLTFLoaderState, GLTFFileLoader, GLTF1, GLTF2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFFileLoader */ "./glTF/glTFFileLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderCoordinateSystemMode", function() { return _glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderCoordinateSystemMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderAnimationStartMode", function() { return _glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderAnimationStartMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderState", function() { return _glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFFileLoader", function() { return _glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFFileLoader"]; });

/* harmony import */ var _1_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1.0 */ "./glTF/1.0/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GLTF1", function() { return _1_0__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _2_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2.0 */ "./glTF/2.0/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GLTF2", function() { return _2_0__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: GLTFLoaderCoordinateSystemMode, GLTFLoaderAnimationStartMode, GLTFLoaderState, GLTFFileLoader, GLTF1, GLTF2, MTLFileLoader, OBJFileLoader, STLFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glTF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTF */ "./glTF/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderCoordinateSystemMode", function() { return _glTF__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderCoordinateSystemMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderAnimationStartMode", function() { return _glTF__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderAnimationStartMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderState", function() { return _glTF__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFFileLoader", function() { return _glTF__WEBPACK_IMPORTED_MODULE_0__["GLTFFileLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTF1", function() { return _glTF__WEBPACK_IMPORTED_MODULE_0__["GLTF1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTF2", function() { return _glTF__WEBPACK_IMPORTED_MODULE_0__["GLTF2"]; });

/* harmony import */ var _OBJ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OBJ */ "./OBJ/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MTLFileLoader", function() { return _OBJ__WEBPACK_IMPORTED_MODULE_1__["MTLFileLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBJFileLoader", function() { return _OBJ__WEBPACK_IMPORTED_MODULE_1__["OBJFileLoader"]; });

/* harmony import */ var _STL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./STL */ "./STL/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STLFileLoader", function() { return _STL__WEBPACK_IMPORTED_MODULE_2__["STLFileLoader"]; });






/***/ }),

/***/ "./legacy/legacy-glTF.ts":
/*!*******************************!*\
  !*** ./legacy/legacy-glTF.ts ***!
  \*******************************/
/*! exports provided: GLTFLoaderCoordinateSystemMode, GLTFLoaderAnimationStartMode, GLTFLoaderState, GLTFFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTF/glTFFileLoader */ "./glTF/glTFFileLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderCoordinateSystemMode", function() { return _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderCoordinateSystemMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderAnimationStartMode", function() { return _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderAnimationStartMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderState", function() { return _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFLoaderState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFFileLoader", function() { return _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__["GLTFFileLoader"]; });


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    for (var key in _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./legacy/legacy-glTF1.ts":
/*!********************************!*\
  !*** ./legacy/legacy-glTF1.ts ***!
  \********************************/
/*! exports provided: GLTF1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _glTF_1_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTF/1.0 */ "./glTF/1.0/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GLTF1", function() { return _glTF_1_0__WEBPACK_IMPORTED_MODULE_0__; });

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    globalObject.BABYLON.GLTF1 = globalObject.BABYLON.GLTF1 || {};
    for (var key in _glTF_1_0__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON.GLTF1[key] = _glTF_1_0__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./legacy/legacy-glTF2.ts":
/*!********************************!*\
  !*** ./legacy/legacy-glTF2.ts ***!
  \********************************/
/*! exports provided: GLTF2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _glTF_2_0_Extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../glTF/2.0/Extensions */ "./glTF/2.0/Extensions/index.ts");
/* harmony import */ var _glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glTF/2.0/glTFLoaderInterfaces */ "./glTF/2.0/glTFLoaderInterfaces.ts");
/* harmony import */ var _glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTF_2_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../glTF/2.0 */ "./glTF/2.0/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GLTF2", function() { return _glTF_2_0__WEBPACK_IMPORTED_MODULE_2__; });



/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    var BABYLON = globalObject.BABYLON;
    BABYLON.GLTF2 = BABYLON.GLTF2 || {};
    BABYLON.GLTF2.Loader = BABYLON.GLTF2.Loader || {};
    BABYLON.GLTF2.Loader.Extensions = BABYLON.GLTF2.Loader.Extensions || {};
    const keys = [];
    for (var key in _glTF_2_0_Extensions__WEBPACK_IMPORTED_MODULE_0__) {
        BABYLON.GLTF2.Loader.Extensions[key] = _glTF_2_0_Extensions__WEBPACK_IMPORTED_MODULE_0__[key];
        keys.push(key);
    }
    for (var key in _glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__) {
        BABYLON.GLTF2.Loader[key] = _glTF_2_0_glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_1__[key];
        keys.push(key);
    }
    for (var key in _glTF_2_0__WEBPACK_IMPORTED_MODULE_2__) {
        // Prevent Reassignment.
        if (keys.indexOf(key) > -1) {
            continue;
        }
        BABYLON.GLTF2[key] = _glTF_2_0__WEBPACK_IMPORTED_MODULE_2__[key];
    }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./legacy/legacy-objFileLoader.ts":
/*!****************************************!*\
  !*** ./legacy/legacy-objFileLoader.ts ***!
  \****************************************/
/*! exports provided: MTLFileLoader, OBJFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _OBJ__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OBJ */ "./OBJ/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MTLFileLoader", function() { return _OBJ__WEBPACK_IMPORTED_MODULE_0__["MTLFileLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBJFileLoader", function() { return _OBJ__WEBPACK_IMPORTED_MODULE_0__["OBJFileLoader"]; });


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    for (var key in _OBJ__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _OBJ__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./legacy/legacy-stlFileLoader.ts":
/*!****************************************!*\
  !*** ./legacy/legacy-stlFileLoader.ts ***!
  \****************************************/
/*! exports provided: STLFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _STL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../STL */ "./STL/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STLFileLoader", function() { return _STL__WEBPACK_IMPORTED_MODULE_0__["STLFileLoader"]; });


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    for (var key in _STL__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _STL__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./legacy/legacy.ts":
/*!**************************!*\
  !*** ./legacy/legacy.ts ***!
  \**************************/
/*! exports provided: GLTF1, GLTF2, GLTFLoaderCoordinateSystemMode, GLTFLoaderAnimationStartMode, GLTFLoaderState, GLTFFileLoader, MTLFileLoader, OBJFileLoader, STLFileLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./index.ts");
/* harmony import */ var _legacy_glTF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF */ "./legacy/legacy-glTF.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderCoordinateSystemMode", function() { return _legacy_glTF__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderCoordinateSystemMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderAnimationStartMode", function() { return _legacy_glTF__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderAnimationStartMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoaderState", function() { return _legacy_glTF__WEBPACK_IMPORTED_MODULE_1__["GLTFLoaderState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFFileLoader", function() { return _legacy_glTF__WEBPACK_IMPORTED_MODULE_1__["GLTFFileLoader"]; });

/* harmony import */ var _legacy_glTF1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy-glTF1 */ "./legacy/legacy-glTF1.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTF1", function() { return _legacy_glTF1__WEBPACK_IMPORTED_MODULE_2__["GLTF1"]; });

/* harmony import */ var _legacy_glTF2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy-glTF2 */ "./legacy/legacy-glTF2.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTF2", function() { return _legacy_glTF2__WEBPACK_IMPORTED_MODULE_3__["GLTF2"]; });

/* harmony import */ var _legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacy-objFileLoader */ "./legacy/legacy-objFileLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MTLFileLoader", function() { return _legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_4__["MTLFileLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBJFileLoader", function() { return _legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_4__["OBJFileLoader"]; });

/* harmony import */ var _legacy_stlFileLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy-stlFileLoader */ "./legacy/legacy-stlFileLoader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STLFileLoader", function() { return _legacy_stlFileLoader__WEBPACK_IMPORTED_MODULE_5__["STLFileLoader"]; });









/***/ }),

/***/ "babylonjs/Misc/observable":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__;

/***/ })

/******/ });
});
//# sourceMappingURL=babylonjs.loaders.js.map