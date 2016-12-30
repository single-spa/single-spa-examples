SystemJS.config({
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.17",
    "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
    "core-js": "npm:core-js@2.4.1",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.16.0"
  },
  packages: {
    "npm:babel-plugin-transform-react-jsx@6.8.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "babel-types": "npm:babel-types@6.15.0",
        "lodash": "npm:lodash@4.16.2"
      }
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-types@6.15.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.16.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-preset-stage-0@6.16.0": {
      "map": {
        "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0",
        "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0",
        "babel-preset-stage-1": "npm:babel-preset-stage-1@6.16.0"
      }
    },
    "npm:babel-plugin-transform-do-expressions@6.8.0": {
      "map": {
        "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.13.0",
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-function-bind@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.13.0"
      }
    },
    "npm:babel-preset-stage-1@6.16.0": {
      "map": {
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.18.0",
        "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.18.0",
        "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0"
      }
    },
    "npm:babel-plugin-transform-class-constructor-call@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.18.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:babel-plugin-transform-export-extensions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0"
      }
    },
    "npm:babel-runtime@6.20.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-preset-stage-2@6.18.0": {
      "map": {
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.17.0",
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.19.0",
        "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:babel-template@6.16.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babylon": "npm:babylon@6.14.1",
        "lodash": "npm:lodash@4.17.3",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-plugin-transform-decorators@6.13.0": {
      "map": {
        "babel-template": "npm:babel-template@6.16.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.18.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0"
      }
    },
    "npm:babel-preset-stage-3@6.17.0": {
      "map": {
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.20.2",
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.16.0",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.20.0",
        "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.17.0"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.20.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
      }
    },
    "npm:babel-traverse@6.21.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babylon": "npm:babylon@6.14.1",
        "lodash": "npm:lodash@4.17.3",
        "babel-code-frame": "npm:babel-code-frame@6.20.0",
        "globals": "npm:globals@9.14.0",
        "debug": "npm:debug@2.6.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "invariant": "npm:invariant@2.2.2"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.16.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.20.3",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
      }
    },
    "npm:babel-helper-function-name@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0"
      }
    },
    "npm:babel-types@6.21.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "lodash": "npm:lodash@4.17.3",
        "to-fast-properties": "npm:to-fast-properties@1.0.2",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:babel-helper-define-map@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "lodash": "npm:lodash@4.17.3",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:babel-helper-explode-class@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.18.0"
      }
    },
    "npm:babel-plugin-transform-async-generator-functions@6.17.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.20.3",
        "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0",
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0"
      }
    },
    "npm:babel-code-frame@6.20.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:babel-helper-get-function-arity@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.20.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:babel-helper-bindify-decorators@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.18.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:debug@2.6.0": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.18.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    }
  }
});
