module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "rules": {
    "react/prop-types": [1],
    "prettier/prettier": "warn",
    "semi": ["warn", "always"],
    "linebreak-style": 0,
    "prettier/prettier": "warn",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "quotes": ["warn", "single"],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "no-param-reassign": 0
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jasmine": true
  }
}