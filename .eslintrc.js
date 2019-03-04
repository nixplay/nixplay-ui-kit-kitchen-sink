module.exports = {
	"env": {
		"browser": true
	},
	"extends": "airbnb",
	"parser": "babel-eslint",
	"rules": {
		"react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"no-tabs": 0,
		"arrow-parens": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/forbid-prop-types": 0,
		"react/prefer-stateless-function": 0,
		"react/destructuring-assignment": 0,
		"operator-linebreak": 0,
		"import/prefer-default-export": 0
	},
};
