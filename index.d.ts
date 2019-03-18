declare const junk: {
	/**
	Returns `true` if `filename` matches a junk file.
	*/
	is(filename: string): boolean;

	/**
	Returns `true` if `filename` doesn't match a junk file.
	*/
	not(filename: string): boolean;

	/**
	Regex used for matching junk files.
	*/
	readonly regex: RegExp;
};

export default junk;
