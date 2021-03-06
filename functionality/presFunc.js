const presidents = `George Washington, Feb 22 1732, Westmoreland Co. Va., Dec 14 1799, Mount Vernon Va.
John Adams, Oct 30 1735, Quincy Mass., Jul 04 1826, Quincy Mass.
Thomas Jefferson, Apr 13 1743, Albemarle Co. Va., Jul 04 1826, Albemarle Co. Va.
James Madison, Mar 16 1751, Port Conway Va., Jun 28 1836, Orange Co. Va.
James Monroe, Apr 28 1758, Westmoreland Co. Va., Jul 04 1831, New York New York
John Quincy Adams, Jul 11 1767, Quincy Mass., Feb 23 1848, Washington D.C.
Andrew Jackson, Mar 15 1767, Lancaster Co. S.C., Jun 08 1845, Nashville Tennessee
Martin Van Buren, Dec 05 1782, Kinderhook New York, Jul 24 1862, Kinderhook New York
William Henry Harrison, Feb 09 1773, Charles City Co. Va., Apr 04 1841, Washington D.C.
John Tyler, Mar 29 1790, Charles City Co. Va., Jan 18 1862, Richmond Va.
James K. Polk, Nov 02 1795, Mecklenburg Co. N.C., Jun 15 1849, Nashville Tennessee
Zachary Taylor, Nov 24 1784, Orange County Va., Jul 09 1850, Washington D.C
Millard Fillmore, Jan 07 1800, Cayuga Co. New York, Mar 08 1874, Buffalo New York
Franklin Pierce, Nov 23 1804, Hillsborough N.H., Oct 08 1869, Concord New Hamp.
James Buchanan, Apr 23 1791, Cove Gap Pa., Jun 01 1868, Lancaster Pa.
Abraham Lincoln, Feb 12 1809, LaRue Co. Kentucky, Apr 15 1865, Washington D.C.
Andrew Johnson, Dec 29 1808, Raleigh North Carolina, Jul 31 1875, Elizabethton Tenn.
Ulysses S. Grant, Apr 27 1822, Point Pleasant Ohio, Jul 23 1885, Wilton New York
Rutherford B. Hayes, Oct 04 1822, Delaware Ohio, Jan 17 1893, Fremont Ohio
James A. Garfield, Nov 19 1831, Cuyahoga Co. Ohio, Sep 19 1881, Elberon New Jersey
Chester Arthur, Oct 05 1829, Fairfield Vermont, Nov 18 1886, New York New York
Grover Cleveland, Mar 18 1837, Caldwell New Jersey, Jun 24 1908, Princeton New Jersey
Benjamin Harrison, Aug 20 1833, North Bend Ohio, Mar 13 1901, Indianapolis Indiana
William McKinley, Jan 29 1843, Niles Ohio, Sep 14 1901, Buffalo New York
Theodore Roosevelt, Oct 27 1858, New York New York, Jan 06 1919, Oyster Bay New York
William Howard Taft, Sep 15 1857, Cincinnati Ohio, Mar 08 1930, Washington D.C.
Woodrow Wilson, Dec 28 1856, Staunton Virginia, Feb 03 1924, Washington D.C.
Warren G. Harding, Nov 02 1865, Morrow County Ohio, Aug 02 1923, San Francisco Cal.
Calvin Coolidge, Jul 04 1872, Plymouth Vermont, Jan 05 1933, Northampton Mass.
Herbert Hoover, Aug 10 1874, West Branch Iowa, Oct 20 1964, New York New York
Franklin Roosevelt, Jan 30 1882, Hyde Park New York, Apr 12 1945, Warm Springs Georgia
Harry S. Truman, May 08 1884, Lamar Missouri, Dec 26 1972, Kansas City Missouri
Dwight Eisenhower, Oct 14 1890, Denison Texas, Mar 28 1969, Washington D.C.
John F. Kennedy, May 29 1917, Brookline Mass., Nov 22 1963, Dallas Texas
Lyndon B. Johnson, Aug 27 1908, Gillespie Co. Texas, Jan 22 1973, Gillespie Co. Texas
Richard Nixon, Jan 09 1913, Yorba Linda Cal., Apr 22 1994, New York New York
Gerald Ford, Jul 14 1913, Omaha Nebraska, Dec 26 2006, Rancho Mirage Cal.
Jimmy Carter, Oct 01 1924, Plains Georgia, , 
Ronald Reagan, Feb 06 1911, Tampico Illinois, Jun 05 2004, Los Angeles Cal.
George Bush, Jun 12 1924, Milton Mass., , 
Bill Clinton, Aug 19 1946, Hope Arkansas, , 
George W. Bush, Jul 06 1946, New Haven Conn., , ,
Barack Obama, Aug 04 1961, Honolulu Hawaii, , `;

const lines = presidents.split("\n"); //Split by new line

const presidentsArray = [];
for (var i = 0; i < lines.length; i++) {
    presidentsArray[i] = lines[i].split(","); //Split by comma
}

function checkAlive(date, callback) {
    var output = "";
    for (var i = 0; i < presidentsArray.length; i++) {
        if ((date <= parseInt(presidentsArray[i][3].substring(7, 12)) && date > parseInt(presidentsArray[i][1].substring(7, 12))) ||
            (presidentsArray[i][3] === " " && date > parseInt(presidentsArray[i][1].substring(7, 12)))) {
            output += presidentsArray[i][0] + "\n";
        }
    }
    callback(output);
}

function whoIsAlive(args, callback) {
    if (args) {
        checkAlive(args, callback);
    } else {
        callback("Enter a date/neg. alive 1900");
    }
}

module.exports = {
    whoIsAlive
};