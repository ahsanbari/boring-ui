export interface IDesignTokens {
	backgroundColor: {
		default: {
			primary: string;
			secondary: string;
			tertiary: string;
			disabled: string;
		};
		secondary: {
			primary: string;
			secondary: string;
			tertiary: string;
			disabled: string;
		};
		ghost: {
			primary: string;
			secondary: string;
			tertiary: string;
			disabled: string;
		};
		baseColors: {
			white: string;
			black: string;
		};
	};
	borderRadius: {
		button: string;
		switch: string;
		toggleGroup: string;
		input: string;
	};
	elevation: {
		small: string;
		medium: string;
	};
	text: {
		fontFamily: { family: string };
		fontWeight: {
			Thin: number;
			ExtraLight: number;
			Light: number;
			Regular: number;
			Medium: number;
			SemiBold: number;
			Bold: number;
			ExtraBold: number;
		};
		textColor: {
			white: string;
			black: string;
			accent: string;
		};
		textSize: {
			h1: string;
			h2: string;
			h3: string;
			h4: string;
			h5: string;
			body2xl: string;
			bodyxl: string;
			body: string;
			bodymd: string;
			bodysml: string;
		};
	};
	transition: {
		transitionSpeed: {
			faster: string;
			fast: string;
			normal: string;
			slow: string;
		};
	};
}
