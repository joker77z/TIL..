const temp = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
return temp === [...temp].reverse().join('');
