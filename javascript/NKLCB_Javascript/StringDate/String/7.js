// regexr.com

const compress = string => console.log(string.replace(/(.)\1+/g, match => match[0] + match.length));

compress('ABBCCCE'); // A2B3CE
