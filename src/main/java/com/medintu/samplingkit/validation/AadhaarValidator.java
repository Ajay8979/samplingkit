package com.medintu.samplingkit.validation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AadhaarValidator {
private static Pattern pattern;
private static Matcher matcher;
private static final String AADHAAR_PATTERN = "^\\d{12}$";

public static boolean validateAadhaar(final String aadhaar)
{
	pattern=Pattern.compile(AADHAAR_PATTERN);
	matcher=pattern.matcher(aadhaar);
	return matcher.matches();
}
}
