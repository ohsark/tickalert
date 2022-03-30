const total = [{"date":"2000-01-01","total_adms":428,"total_cases":150},{"date":"2000-02-01","total_adms":249,"total_cases":64},{"date":"2000-03-01","total_adms":248,"total_cases":63},{"date":"2000-04-01","total_adms":224,"total_cases":67},{"date":"2000-05-01","total_adms":253,"total_cases":67},{"date":"2000-06-01","total_adms":253,"total_cases":71},{"date":"2000-07-01","total_adms":397,"total_cases":140},{"date":"2000-08-01","total_adms":659,"total_cases":290},{"date":"2000-09-01","total_adms":778,"total_cases":361},{"date":"2000-10-01","total_adms":1067,"total_cases":533},{"date":"2000-11-01","total_adms":1161,"total_cases":593},{"date":"2000-12-01","total_adms":812,"total_cases":360},{"date":"2001-01-01","total_adms":573,"total_cases":173},{"date":"2001-02-01","total_adms":370,"total_cases":111},{"date":"2001-03-01","total_adms":423,"total_cases":90},{"date":"2001-04-01","total_adms":391,"total_cases":108},{"date":"2001-05-01","total_adms":433,"total_cases":132},{"date":"2001-06-01","total_adms":504,"total_cases":163},{"date":"2001-07-01","total_adms":687,"total_cases":196},{"date":"2001-08-01","total_adms":875,"total_cases":266},{"date":"2001-09-01","total_adms":1234,"total_cases":497},{"date":"2001-10-01","total_adms":1454,"total_cases":573},{"date":"2001-11-01","total_adms":1411,"total_cases":520},{"date":"2001-12-01","total_adms":1241,"total_cases":414},{"date":"2002-01-01","total_adms":949,"total_cases":234},{"date":"2002-02-01","total_adms":657,"total_cases":111},{"date":"2002-03-01","total_adms":683,"total_cases":133},{"date":"2002-04-01","total_adms":670,"total_cases":153},{"date":"2002-05-01","total_adms":681,"total_cases":169},{"date":"2002-06-01","total_adms":765,"total_cases":198},{"date":"2002-07-01","total_adms":836,"total_cases":211},{"date":"2002-08-01","total_adms":1098,"total_cases":289},{"date":"2002-09-01","total_adms":1649,"total_cases":544},{"date":"2002-10-01","total_adms":1708,"total_cases":592},{"date":"2002-11-01","total_adms":1446,"total_cases":501},{"date":"2002-12-01","total_adms":1347,"total_cases":378},{"date":"2003-01-01","total_adms":1292,"total_cases":335},{"date":"2003-02-01","total_adms":670,"total_cases":31},{"date":"2003-03-01","total_adms":716,"total_cases":30},{"date":"2003-04-01","total_adms":676,"total_cases":34},{"date":"2003-05-01","total_adms":773,"total_cases":48},{"date":"2003-06-01","total_adms":747,"total_cases":65},{"date":"2003-07-01","total_adms":829,"total_cases":92},{"date":"2003-08-01","total_adms":1016,"total_cases":159},{"date":"2003-09-01","total_adms":1424,"total_cases":330},{"date":"2003-10-01","total_adms":1709,"total_cases":525},{"date":"2003-11-01","total_adms":1689,"total_cases":470},{"date":"2003-12-01","total_adms":1585,"total_cases":301},{"date":"2004-01-01","total_adms":1137,"total_cases":151},{"date":"2004-02-01","total_adms":827,"total_cases":41},{"date":"2004-03-01","total_adms":804,"total_cases":42},{"date":"2004-04-01","total_adms":740,"total_cases":40},{"date":"2004-05-01","total_adms":696,"total_cases":52},{"date":"2004-06-01","total_adms":834,"total_cases":58},{"date":"2004-07-01","total_adms":860,"total_cases":64},{"date":"2004-08-01","total_adms":982,"total_cases":144},{"date":"2004-09-01","total_adms":1639,"total_cases":379},{"date":"2004-10-01","total_adms":1772,"total_cases":423},{"date":"2004-11-01","total_adms":1622,"total_cases":370},{"date":"2004-12-01","total_adms":1626,"total_cases":244},{"date":"2005-01-01","total_adms":1198,"total_cases":136},{"date":"2005-02-01","total_adms":883,"total_cases":44},{"date":"2005-03-01","total_adms":793,"total_cases":26},{"date":"2005-04-01","total_adms":806,"total_cases":51},{"date":"2005-05-01","total_adms":768,"total_cases":58},{"date":"2005-06-01","total_adms":846,"total_cases":57},{"date":"2005-07-01","total_adms":1011,"total_cases":90},{"date":"2005-08-01","total_adms":1222,"total_cases":158},{"date":"2005-09-01","total_adms":1703,"total_cases":305},{"date":"2005-10-01","total_adms":2036,"total_cases":451},{"date":"2005-11-01","total_adms":2032,"total_cases":427},{"date":"2005-12-01","total_adms":1582,"total_cases":198},{"date":"2006-01-01","total_adms":1297,"total_cases":124},{"date":"2006-02-01","total_adms":1001,"total_cases":38},{"date":"2006-03-01","total_adms":1017,"total_cases":30},{"date":"2006-04-01","total_adms":791,"total_cases":34},{"date":"2006-05-01","total_adms":846,"total_cases":51},{"date":"2006-06-01","total_adms":909,"total_cases":43},{"date":"2006-07-01","total_adms":1053,"total_cases":68},{"date":"2006-08-01","total_adms":1392,"total_cases":140},{"date":"2006-09-01","total_adms":2091,"total_cases":398},{"date":"2006-10-01","total_adms":2287,"total_cases":440},{"date":"2006-11-01","total_adms":1965,"total_cases":361},{"date":"2006-12-01","total_adms":1762,"total_cases":207},{"date":"2007-01-01","total_adms":1570,"total_cases":131},{"date":"2007-02-01","total_adms":1156,"total_cases":45},{"date":"2007-03-01","total_adms":1272,"total_cases":32},{"date":"2007-04-01","total_adms":1011,"total_cases":34},{"date":"2007-05-01","total_adms":1217,"total_cases":54},{"date":"2007-06-01","total_adms":1108,"total_cases":54},{"date":"2007-07-01","total_adms":1143,"total_cases":74},{"date":"2007-08-01","total_adms":1485,"total_cases":146},{"date":"2007-09-01","total_adms":2609,"total_cases":378},{"date":"2007-10-01","total_adms":2683,"total_cases":437},{"date":"2007-11-01","total_adms":2532,"total_cases":427},{"date":"2007-12-01","total_adms":2207,"total_cases":284},{"date":"2008-01-01","total_adms":1706,"total_cases":140},{"date":"2008-02-01","total_adms":1477,"total_cases":48},{"date":"2008-03-01","total_adms":1444,"total_cases":46},{"date":"2008-04-01","total_adms":1955,"total_cases":36},{"date":"2008-05-01","total_adms":1447,"total_cases":45},{"date":"2008-06-01","total_adms":1430,"total_cases":53},{"date":"2008-07-01","total_adms":1597,"total_cases":84},{"date":"2008-08-01","total_adms":1557,"total_cases":139},{"date":"2008-09-01","total_adms":2244,"total_cases":426},{"date":"2008-10-01","total_adms":2109,"total_cases":444},{"date":"2008-11-01","total_adms":1562,"total_cases":382},{"date":"2008-12-01","total_adms":1490,"total_cases":252},{"date":"2009-01-01","total_adms":1055,"total_cases":109},{"date":"2009-02-01","total_adms":798,"total_cases":34},{"date":"2009-03-01","total_adms":728,"total_cases":47},{"date":"2009-04-01","total_adms":752,"total_cases":44},{"date":"2009-05-01","total_adms":673,"total_cases":38},{"date":"2009-06-01","total_adms":690,"total_cases":62},{"date":"2009-07-01","total_adms":874,"total_cases":94},{"date":"2009-08-01","total_adms":1031,"total_cases":164},{"date":"2009-09-01","total_adms":1606,"total_cases":312},{"date":"2009-10-01","total_adms":1671,"total_cases":333},{"date":"2009-11-01","total_adms":1687,"total_cases":393},{"date":"2009-12-01","total_adms":1430,"total_cases":187},{"date":"2010-01-01","total_adms":1323,"total_cases":111},{"date":"2010-02-01","total_adms":1070,"total_cases":39},{"date":"2010-03-01","total_adms":1101,"total_cases":31},{"date":"2010-04-01","total_adms":984,"total_cases":45},{"date":"2010-05-01","total_adms":944,"total_cases":42},{"date":"2010-06-01","total_adms":1338,"total_cases":52},{"date":"2010-07-01","total_adms":1709,"total_cases":83},{"date":"2010-08-01","total_adms":1848,"total_cases":173},{"date":"2010-09-01","total_adms":2510,"total_cases":350},{"date":"2010-10-01","total_adms":2790,"total_cases":436},{"date":"2010-11-01","total_adms":2857,"total_cases":449},{"date":"2010-12-01","total_adms":2655,"total_cases":255},{"date":"2011-01-01","total_adms":2215,"total_cases":145},{"date":"2011-02-01","total_adms":1763,"total_cases":38},{"date":"2011-03-01","total_adms":1965,"total_cases":41},{"date":"2011-04-01","total_adms":1815,"total_cases":62},{"date":"2011-05-01","total_adms":1804,"total_cases":83},{"date":"2011-06-01","total_adms":1736,"total_cases":72},{"date":"2011-07-01","total_adms":2025,"total_cases":126},{"date":"2011-08-01","total_adms":2310,"total_cases":225},{"date":"2011-09-01","total_adms":3065,"total_cases":482},{"date":"2011-10-01","total_adms":3235,"total_cases":656},{"date":"2011-11-01","total_adms":3140,"total_cases":533},{"date":"2011-12-01","total_adms":2580,"total_cases":313},{"date":"2012-01-01","total_adms":1954,"total_cases":189},{"date":"2012-02-01","total_adms":1572,"total_cases":66},{"date":"2012-03-01","total_adms":1420,"total_cases":68},{"date":"2012-04-01","total_adms":1245,"total_cases":72},{"date":"2012-05-01","total_adms":1267,"total_cases":66},{"date":"2012-06-01","total_adms":1378,"total_cases":96},{"date":"2012-07-01","total_adms":1608,"total_cases":152},{"date":"2012-08-01","total_adms":1965,"total_cases":239},{"date":"2012-09-01","total_adms":2552,"total_cases":418},{"date":"2012-10-01","total_adms":3231,"total_cases":644},{"date":"2012-11-01","total_adms":2900,"total_cases":516},{"date":"2012-12-01","total_adms":2398,"total_cases":340},{"date":"2013-01-01","total_adms":2170,"total_cases":164},{"date":"2013-02-01","total_adms":1486,"total_cases":47},{"date":"2013-03-01","total_adms":1535,"total_cases":54},{"date":"2013-04-01","total_adms":1521,"total_cases":76},{"date":"2013-05-01","total_adms":1594,"total_cases":77},{"date":"2013-06-01","total_adms":1571,"total_cases":99},{"date":"2013-07-01","total_adms":1980,"total_cases":138},{"date":"2013-08-01","total_adms":2399,"total_cases":257},{"date":"2013-09-01","total_adms":2920,"total_cases":416},{"date":"2013-10-01","total_adms":3012,"total_cases":480},{"date":"2013-11-01","total_adms":2771,"total_cases":373},{"date":"2013-12-01","total_adms":2725,"total_cases":301},{"date":"2014-01-01","total_adms":2464,"total_cases":146},{"date":"2014-02-01","total_adms":1936,"total_cases":51},{"date":"2014-03-01","total_adms":2066,"total_cases":48},{"date":"2014-04-01","total_adms":1828,"total_cases":52},{"date":"2014-05-01","total_adms":1899,"total_cases":83},{"date":"2014-06-01","total_adms":1807,"total_cases":76},{"date":"2014-07-01","total_adms":1924,"total_cases":113},{"date":"2014-08-01","total_adms":2144,"total_cases":177},{"date":"2014-09-01","total_adms":3003,"total_cases":400},{"date":"2014-10-01","total_adms":3119,"total_cases":392},{"date":"2014-11-01","total_adms":2734,"total_cases":285},{"date":"2014-12-01","total_adms":2647,"total_cases":245},{"date":"2015-01-01","total_adms":2548,"total_cases":168},{"date":"2015-02-01","total_adms":1958,"total_cases":69},{"date":"2015-03-01","total_adms":1922,"total_cases":39},{"date":"2015-04-01","total_adms":1660,"total_cases":49},{"date":"2015-05-01","total_adms":1997,"total_cases":52},{"date":"2015-06-01","total_adms":1848,"total_cases":59},{"date":"2015-07-01","total_adms":2176,"total_cases":84},{"date":"2015-08-01","total_adms":2247,"total_cases":147},{"date":"2015-09-01","total_adms":3013,"total_cases":265},{"date":"2015-10-01","total_adms":3425,"total_cases":347},{"date":"2015-11-01","total_adms":3176,"total_cases":270},{"date":"2015-12-01","total_adms":3247,"total_cases":147},{"date":"2016-01-01","total_adms":3051,"total_cases":110},{"date":"2016-02-01","total_adms":2617,"total_cases":57},{"date":"2016-03-01","total_adms":2623,"total_cases":48},{"date":"2016-04-01","total_adms":2446,"total_cases":37},{"date":"2016-05-01","total_adms":2399,"total_cases":57},{"date":"2016-06-01","total_adms":2496,"total_cases":57},{"date":"2016-07-01","total_adms":2819,"total_cases":75},{"date":"2016-08-01","total_adms":2946,"total_cases":124},{"date":"2016-09-01","total_adms":3327,"total_cases":221},{"date":"2016-10-01","total_adms":3336,"total_cases":276},{"date":"2016-11-01","total_adms":3498,"total_cases":245},{"date":"2016-12-01","total_adms":3566,"total_cases":139},{"date":"2017-01-01","total_adms":3252,"total_cases":82},{"date":"2017-02-01","total_adms":2694,"total_cases":45},{"date":"2017-03-01","total_adms":2778,"total_cases":42},{"date":"2017-04-01","total_adms":2417,"total_cases":48},{"date":"2017-05-01","total_adms":2688,"total_cases":53},{"date":"2017-06-01","total_adms":2610,"total_cases":42},{"date":"2017-07-01","total_adms":2610,"total_cases":61},{"date":"2017-08-01","total_adms":2785,"total_cases":98},{"date":"2017-09-01","total_adms":3363,"total_cases":128},{"date":"2017-10-01","total_adms":3524,"total_cases":256},{"date":"2017-11-01","total_adms":3768,"total_cases":232},{"date":"2017-12-01","total_adms":3409,"total_cases":143}]
const preds = [[5,1,0,1,2,3,4,13,28,41,25,14,7,1,0,3,5,7,9,23,50,73,43,26,12,3,1,4,7,8,10,25,54,71,43,23,11,3,1,4,6.95,9,9,24,51,74,41,20,10,2,1,4,6,10,9,25,38,48,30,15,8,2,1,2,6,6,6,16,41,48,28,20,9,2,0,2,4,5,6,15,33,36,24,13,6,1,0,2,4,3,3,11,21,25,15,9,4,1,0,1,2,1,2,5,9,19,10,5],[8,2,1,2,4,5,6,18,38,55,34,20,11,2,1,5,8,11,13,32,66,96,56,35,17,5,3,6,10,12,14,34,70,91,56,31,16,5,2,7,10,13,13,32,66,96,54,28,14,4,3,6,10,14,13,33,49,63,40,21,12,3,2,4,9,9,8,21,53,63,36,26,14,3,1,4,7,8,9,20,43,47,32,18,9,3,1,3,6,5,5,15,27,34,20,12,7,2,1,2,4,3,3,8,14,29,17,8],[9,3,1,3,5,7,8,21,43,61,38,23,12,3,2,6,9,13,15,36,73,105,62,39,19,6,4,8,12,13,16,37,77,100,62,35,18,6,3,8,11,15,15,36,72,105,59,31,16,4,3,7,11,16,15,37,55,69,44,24,13,4,3,5,10,11,10,24,58,69,40,29,15,4,2,5,8,9,10,22,47,52,35,20,10,4,2,4,7,6,6,17,30,37,22,14,8,3,1,3,5,3,4,9,16,33,20,10],[11,3,2,4,6,8,9,23,47,67,42,25,14,4,2,7,10,14,16,39,79,114,68,43,21,7,4,9,13,15,18,41,83,108,67,38,20,7,3,9,12,16,17,39,78,113,65,33,18,5,4,8,12,18,16,40,59,74,47,26,15,5,3,6,11,12,11,26,63,75,43,32,17,5,2,6,9,10,12,24,51,56,38,22,11,4,2,5,8,7,7,19,33,41,25,15,9,3,2,4,5,4,5,11,19,37,22,12],[12,4,2,4,7,9,10,25,51,73,46,28,16,5,3,8,12,16,18,42,85,122,73,47,23,8,5,10,15,16,19,44,89,116,72,41,21,7,4,10,14,18,19,42,84,121,69,36,20,6,5,9,14,19,18,43,64,80,51,28,16,5,4,7,12,13,12,28,68,80,47,35,19,6,3,7,10,12,13,27,55,60,41,24,12,5,3,5,9,8,8,21,36,44,27,17,10,4,2,4,6,5,6,12,21,41,25,13],[14,5,3,5,8,10,11,28,55,79,50,31,17,5,3,9,13,17,20,46,91,131,79,50,25,9,6,11,16,18,21,47,95,124,77,44,23,8,5,11,15,20,20,45,89,129,74,39,21,7,5,10,15,21,19,47,69,85,54,31,18,6,4,8,13,14,13,31,73,85,50,37,21,6,3,8,12,13,14,29,59,65,44,26,13,6,3,6,10,9,9,22,38,47,29,18,11,5,3,5,7,5,7,13,23,46,28,15],[15,5,3,6,9,11,13,30,60,85,55,34,19,6,4,10,14,19,22,49,99,141,85,55,27,10,7,12,18,20,23,51,102,133,83,48,25,9,5,13,17,22,22,49,96,138,79,42,23,8,6,11,16,23,21,51,74,92,58,33,19,7,5,9,15,16,15,33,78,91,54,41,22,7,4,8,13,14,15,31,63,69,47,28,15,6,4,7,11,10,10,24,41,51,31,20,12,5,3,6,8,6,8,15,26,51,31,17],[17,6,4,7,11,13,14,34,66,94,61,38,21,7,5,11,16,21,25,54,107,154,93,60,30,11,8,13,19,22,25,56,112,144,90,52,28,11,6,14,18,24,24,54,104,149,86,46,26,9,7,12,18,25,23,55,81,99,63,36,22,8,6,10,16,17,16,36,85,98,58,44,25,8,5,10,14,16,17,34,69,75,51,30,16,7,4,8,12,11,11,27,45,55,34,22,14,6,4,6,9,7,9,17,30,58,36,19],[24,10,7,11,15,17,20,44,84,119,78,49,28,10,7,15,21,28,32,68,134,190,115,76,39,15,11,18,25,28,32,69,138,175,111,64,36,14,9,19,24,30,31,66,128,180,105,57,33,12,9,16,23,32,29,68,100,122,78,45,27,11,8,13,21,22,21,45,104,120,72,55,31,11,7,13,18,20,22,42,85,90,63,38,21,10,6,11,16,14,15,34,56,68,42,28,18,9,6,9,13,10,12,23,41,77,49,27]]
const trends = [[0,-0.0351,-0.0441,-0.0275,-0.0236,-0.0146,-0.0067,-0.0045,-0.0021,-0.0003,-0.0016,-0.0007,-0.0083,0.0006,0.0033,0.0035,0.0042,0.0031,0.0023,0.0022,0.0029,0.0014,0.0021,-0.0096,-0.0158,-0.0233,-0.0513,-0.0278,-0.0328,-0.0135,-0.0125,-0.0096,-0.015,-0.0089,-0.0046,-0.0046,-0.0035,-0.0316,-0.0083,-0.0284,-0.0226,-0.0121,-0.0154,-0.0028,-0.002,-0.0249,-0.0309,-0.0159,-0.0073,-0.0007,-0.0008,-0.0082,0.0002,-0.0249,-0.0484,-0.0969,-0.0574,-0.0511,-0.0585,-0.0352,-0.0186,-0.0042,-0.0085,-0.0037,-0.0102,-0.0335,-0.0107,-0.0056,-0.0103,-0.022,-0.0063,-0.0283,-0.0493,-0.0217,-0.0046,-0.0025,0.0002,-0.0133,-0.05,-0.0389,-0.0601,-0.0341,-0.0421,-0.052,-0.0407,-0.0307,-0.0184,-0.0126,-0.0122,-0.0284,-0.0178,-0.0554,-0.1019,-0.0462,-0.0257,-0.023,-0.0374,-0.0523,-0.0546,-0.0598,-0.0637,-0.0694,-0.0688,-0.065,-0.061,-0.0559,-0.054,-0.0568],[0,-0.015,-0.0206,-0.0113,-0.0094,-0.0033,0.0009,0.0016,0.0031,0.0041,0.0027,0.0035,0.0004,0.0055,0.0126,0.0127,0.0145,0.012,0.01,0.0093,0.0105,0.0075,0.0085,0.0006,-0.0016,-0.0058,-0.0265,-0.0138,-0.0188,-0.0029,-0.0026,-0.0009,-0.0066,-0.0012,0.0008,0.0005,0.0011,-0.0123,-0.0007,-0.0139,-0.0128,-0.0071,-0.01,0.0002,0.0004,-0.0138,-0.0192,-0.0115,-0.0039,0.0015,0.0015,-0.0012,0.0023,-0.0098,-0.026,-0.0594,-0.0404,-0.0363,-0.0432,-0.0247,-0.0112,0.0004,-0.0033,0.0001,-0.0039,-0.0133,-0.0061,-0.0024,-0.0054,-0.0113,-0.0035,-0.0156,-0.0301,-0.0134,-0.0019,-0.0001,0.003,-0.0026,-0.0236,-0.0228,-0.0384,-0.0244,-0.0312,-0.0386,-0.0301,-0.0222,-0.012,-0.0067,-0.0065,-0.017,-0.0118,-0.0303,-0.0599,-0.0358,-0.0194,-0.0171,-0.021,-0.0264,-0.0275,-0.0295,-0.0305,-0.0326,-0.0332,-0.0314,-0.0295,-0.0271,-0.0269,-0.0272],[0,-0.0103,-0.0143,-0.0067,-0.005,-0.0002,0.0038,0.0046,0.0065,0.0077,0.0056,0.0066,0.0024,0.009,0.0182,0.0185,0.0208,0.0173,0.015,0.0138,0.0149,0.0113,0.0121,0.0031,0.0007,-0.0017,-0.0184,-0.0092,-0.014,0,4.1282e-06,0.0007,-0.0039,0.0002,0.0019,0.0014,0.0022,-0.0085,0.0007,-0.0103,-0.0099,-0.0056,-0.0083,0.0008,0.001,-0.0114,-0.016,-0.0097,-0.0025,0.0027,0.0027,0.0001,0.0036,-0.0065,-0.0201,-0.0477,-0.0339,-0.031,-0.0373,-0.0204,-0.0076,0.0024,-0.0012,0.0012,-0.0023,-0.0106,-0.0047,-0.0013,-0.0041,-0.0088,-0.0025,-0.0122,-0.0243,-0.011,-0.0007,0.0009,0.0053,-0.0014,-0.0187,-0.0187,-0.0319,-0.0209,-0.027,-0.0334,-0.026,-0.0187,-0.0091,-0.0042,-0.0041,-0.0149,-0.0098,-0.0267,-0.0509,-0.0317,-0.0165,-0.0143,-0.0163,-0.019,-0.0196,-0.0207,-0.0211,-0.0224,-0.0229,-0.0218,-0.0208,-0.0191,-0.0183,-0.0186],[0,-0.007,-0.0101,-0.0036,-0.002,0.0019,0.0073,0.0082,0.0101,0.0114,0.0087,0.0097,0.0048,0.0125,0.0234,0.0239,0.0267,0.0222,0.0195,0.0179,0.019,0.0149,0.0156,0.006,0.0029,0.0003,-0.0127,-0.0058,-0.0101,0.001,0.001,0.0017,-0.0019,0.0011,0.0029,0.0023,0.0032,-0.0062,0.0018,-0.0078,-0.0079,-0.0043,-0.0069,0.0015,0.0016,-0.0096,-0.0138,-0.008,-0.0014,0.0042,0.004,0.0007,0.005,-0.0047,-0.0162,-0.0395,-0.0287,-0.0268,-0.0326,-0.0162,-0.0045,0.0051,-0,0.0029,-0.0012,-0.0091,-0.0036,-0.0005,-0.0033,-0.0073,-0.0017,-0.0102,-0.0203,-0.0092,0.0002,0.002,0.0076,-0.0007,-0.0152,-0.0157,-0.027,-0.0181,-0.0234,-0.0291,-0.0224,-0.0155,-0.0062,-0.0018,-0.0019,-0.0132,-0.0081,-0.024,-0.0444,-0.0282,-0.0138,-0.012,-0.0128,-0.014,-0.0138,-0.0142,-0.0146,-0.015,-0.0157,-0.0148,-0.0144,-0.0133,-0.0125,-0.0124],[0,-0.0047,-0.0067,-0.0011,0.0001,0.0051,0.0116,0.0123,0.0143,0.0153,0.0122,0.0136,0.0076,0.0163,0.0289,0.0293,0.0326,0.0274,0.0239,0.022,0.0231,0.0184,0.0189,0.009,0.0053,0.0021,-0.0079,-0.003,-0.0068,0.0021,0.002,0.0028,-0.0005,0.002,0.004,0.0033,0.0043,-0.0043,0.0029,-0.0059,-0.0062,-0.0032,-0.0053,0.0023,0.0024,-0.0079,-0.0115,-0.0063,-0.0004,0.0059,0.0056,0.0015,0.0066,-0.0034,-0.0132,-0.0326,-0.0245,-0.0226,-0.0277,-0.0123,-0.0018,0.0086,0.0011,0.0051,-0.0004,-0.0079,-0.0028,0.0001,-0.0025,-0.0063,-0.0011,-0.0088,-0.0173,-0.0075,0.0014,0.0035,0.01,-0.0002,-0.0126,-0.0133,-0.0226,-0.0154,-0.02,-0.0247,-0.0191,-0.0122,-0.0034,0,-0.0003,-0.0116,-0.0066,-0.0215,-0.0386,-0.0246,-0.0111,-0.0094,-0.0095,-0.0099,-0.0092,-0.0094,-0.0094,-0.0098,-0.0097,-0.0094,-0.0091,-0.0085,-0.0079,-0.0077],[0,-0.0028,-0.004,0.0009,0.0027,0.0092,0.0167,0.0171,0.0191,0.0201,0.0164,0.0177,0.011,0.0203,0.0345,0.0346,0.0383,0.0323,0.0286,0.0261,0.027,0.0221,0.0222,0.0122,0.0082,0.0047,-0.0041,-0.001,-0.004,0.0035,0.0033,0.0042,0.0003,0.0031,0.0053,0.0044,0.0055,-0.0027,0.0041,-0.0044,-0.0047,-0.002,-0.0037,0.0035,0.0035,-0.0062,-0.0093,-0.0046,0.0002,0.0081,0.0075,0.0025,0.0088,-0.0025,-0.0111,-0.0274,-0.0203,-0.0185,-0.0229,-0.0084,0.0002,0.0137,0.0029,0.0076,0.0002,-0.0068,-0.002,0.0011,-0.0018,-0.0052,-0.0004,-0.0077,-0.0147,-0.0057,0.003,0.0054,0.0127,0.0003,-0.0107,-0.0114,-0.0189,-0.0129,-0.0169,-0.0207,-0.0157,-0.0089,-0.0011,0.0022,0.001,-0.01,-0.0052,-0.0187,-0.0327,-0.0206,-0.0079,-0.0069,-0.0063,-0.0061,-0.0049,-0.0052,-0.005,-0.0052,-0.0049,-0.0048,-0.0046,-0.0044,-0.0042,-0.0039],[0,-0.0011,-0.0016,0.0044,0.007,0.0148,0.0237,0.0235,0.0253,0.026,0.0215,0.0225,0.0152,0.0248,0.0408,0.0406,0.0442,0.0374,0.0334,0.0306,0.0314,0.026,0.0259,0.0157,0.0114,0.0076,-0.0011,0.0005,-0.0016,0.0053,0.0049,0.0058,0.0015,0.0046,0.007,0.0058,0.0069,-0.0015,0.0057,-0.003,-0.0033,-0.001,-0.0022,0.0052,0.005,-0.0044,-0.0069,-0.0032,0.0011,0.0108,0.0099,0.004,0.0114,-0.0018,-0.009,-0.0217,-0.0157,-0.0141,-0.0179,-0.0051,0.0035,0.0204,0.0053,0.0108,0.0014,-0.0057,-0.0012,0.0026,-0.0012,-0.0042,0.0001,-0.0065,-0.0124,-0.0038,0.0057,0.0077,0.016,0.0009,-0.0091,-0.0096,-0.0154,-0.0104,-0.0136,-0.0168,-0.0122,-0.0057,0.0012,0.0056,0.0033,-0.0082,-0.0038,-0.0154,-0.0267,-0.0164,-0.0047,-0.0042,-0.0033,-0.0025,-0.0013,-0.0013,-0.0012,-0.0013,-0.0012,-0.0013,-0.0012,-0.0012,-0.0011,-0.0009],[0,0.0005,0.0009,0.0101,0.0134,0.0231,0.0333,0.032,0.0331,0.0331,0.0279,0.0289,0.0203,0.0303,0.048,0.0472,0.0505,0.0431,0.0384,0.0352,0.0358,0.0305,0.0299,0.0197,0.0153,0.0112,0.0018,0.003,0.0001,0.0081,0.0074,0.0082,0.0032,0.0067,0.0094,0.0078,0.009,-0.0003,0.0078,-0.0015,-0.0018,-0.0001,-0.0008,0.0081,0.0073,-0.0026,-0.0045,-0.0017,0.0027,0.0147,0.0131,0.006,0.0145,-0.0011,-0.0066,-0.0155,-0.0108,-0.0099,-0.0126,-0.0017,0.0097,0.0306,0.0092,0.0151,0.0035,-0.0045,-0.0004,0.0048,-0.0004,-0.003,0.0013,-0.0051,-0.0094,-0.0019,0.0102,0.0112,0.0207,0.0019,-0.0073,-0.0074,-0.0117,-0.0074,-0.01,-0.0123,-0.0086,-0.0026,0.0056,0.0109,0.0066,-0.0063,-0.0023,-0.0116,-0.0199,-0.0117,-0.0016,-0.0017,-0.0006,0.0005,0.0027,0.0026,0.0025,0.0025,0.0024,0.0023,0.0019,0.0019,0.0019,0.002],[0,0.0106,0.0164,0.0342,0.0393,0.0525,0.0639,0.0584,0.0573,0.0551,0.0463,0.0459,0.0343,0.0455,0.0676,0.0634,0.0664,0.0559,0.0504,0.0463,0.0473,0.0408,0.0398,0.0304,0.0251,0.0208,0.0108,0.0109,0.007,0.0218,0.0181,0.0188,0.009,0.0143,0.0188,0.0146,0.0164,0.0031,0.0161,0.0014,0.0007,0.0045,0.0024,0.0252,0.0184,-0,-0.0006,0.0004,0.0109,0.0291,0.0227,0.0109,0.0227,0.0005,-0.0017,-0.0043,-0.0028,-0.0025,-0.0035,0.0092,0.0379,0.0673,0.0219,0.0294,0.0118,-0.0013,0.0035,0.0123,0.0038,-0.0006,0.0061,-0.0017,-0.0029,0.0044,0.0314,0.0257,0.0386,0.0049,-0.0025,-0.0024,-0.0038,-0.0019,-0.0031,-0.0038,-0.0022,0.0062,0.0287,0.0308,0.0185,-0.0021,0.0002,-0.0038,-0.0065,-0.0029,0.0098,0.0033,0.0112,0.0177,0.0242,0.0237,0.0233,0.0222,0.0214,0.0204,0.0175,0.0175,0.0162,0.0171]]
const total_state = [{"date":"2000-01-01","state":"NSW","total_adms":122,"total_cases":63},{"date":"2000-01-01","state":"QLD","total_adms":273,"total_cases":77},{"date":"2000-01-01","state":"VIC","total_adms":11,"total_cases":2},{"date":"2000-02-01","state":"NSW","total_adms":45,"total_cases":12},{"date":"2000-02-01","state":"QLD","total_adms":187,"total_cases":51},{"date":"2000-02-01","state":"VIC","total_adms":10,"total_cases":1},{"date":"2000-03-01","state":"NSW","total_adms":45,"total_cases":11},{"date":"2000-03-01","state":"QLD","total_adms":192,"total_cases":51},{"date":"2000-03-01","state":"VIC","total_adms":4,"total_cases":0},{"date":"2000-04-01","state":"NSW","total_adms":44,"total_cases":4},{"date":"2000-04-01","state":"QLD","total_adms":160,"total_cases":59},{"date":"2000-04-01","state":"VIC","total_adms":8,"total_cases":1},{"date":"2000-05-01","state":"NSW","total_adms":47,"total_cases":13},{"date":"2000-05-01","state":"QLD","total_adms":196,"total_cases":50},{"date":"2000-05-01","state":"VIC","total_adms":5,"total_cases":1},{"date":"2000-06-01","state":"NSW","total_adms":41,"total_cases":11},{"date":"2000-06-01","state":"QLD","total_adms":198,"total_cases":59},{"date":"2000-06-01","state":"VIC","total_adms":10,"total_cases":0},{"date":"2000-07-01","state":"NSW","total_adms":64,"total_cases":29},{"date":"2000-07-01","state":"QLD","total_adms":327,"total_cases":110},{"date":"2000-07-01","state":"VIC","total_adms":2,"total_cases":0},{"date":"2000-08-01","state":"NSW","total_adms":108,"total_cases":43},{"date":"2000-08-01","state":"QLD","total_adms":534,"total_cases":243},{"date":"2000-08-01","state":"VIC","total_adms":6,"total_cases":0},{"date":"2000-09-01","state":"NSW","total_adms":170,"total_cases":104},{"date":"2000-09-01","state":"QLD","total_adms":582,"total_cases":251},{"date":"2000-09-01","state":"VIC","total_adms":7,"total_cases":1},{"date":"2000-10-01","state":"NSW","total_adms":296,"total_cases":194},{"date":"2000-10-01","state":"QLD","total_adms":735,"total_cases":326},{"date":"2000-10-01","state":"VIC","total_adms":10,"total_cases":1},{"date":"2000-11-01","state":"NSW","total_adms":310,"total_cases":206},{"date":"2000-11-01","state":"QLD","total_adms":803,"total_cases":381},{"date":"2000-11-01","state":"VIC","total_adms":25,"total_cases":1},{"date":"2000-12-01","state":"NSW","total_adms":227,"total_cases":148},{"date":"2000-12-01","state":"QLD","total_adms":543,"total_cases":204},{"date":"2000-12-01","state":"VIC","total_adms":17,"total_cases":2},{"date":"2001-01-01","state":"NSW","total_adms":75,"total_cases":31},{"date":"2001-01-01","state":"QLD","total_adms":448,"total_cases":127},{"date":"2001-01-01","state":"VIC","total_adms":15,"total_cases":1},{"date":"2001-02-01","state":"NSW","total_adms":36,"total_cases":7},{"date":"2001-02-01","state":"QLD","total_adms":315,"total_cases":102},{"date":"2001-02-01","state":"VIC","total_adms":6,"total_cases":0},{"date":"2001-03-01","state":"NSW","total_adms":41,"total_cases":7},{"date":"2001-03-01","state":"QLD","total_adms":363,"total_cases":80},{"date":"2001-03-01","state":"VIC","total_adms":8,"total_cases":3},{"date":"2001-04-01","state":"NSW","total_adms":57,"total_cases":24},{"date":"2001-04-01","state":"QLD","total_adms":315,"total_cases":78},{"date":"2001-04-01","state":"VIC","total_adms":15,"total_cases":4},{"date":"2001-05-01","state":"NSW","total_adms":37,"total_cases":19},{"date":"2001-05-01","state":"QLD","total_adms":381,"total_cases":112},{"date":"2001-05-01","state":"VIC","total_adms":7,"total_cases":1},{"date":"2001-06-01","state":"NSW","total_adms":50,"total_cases":23},{"date":"2001-06-01","state":"QLD","total_adms":440,"total_cases":137},{"date":"2001-06-01","state":"VIC","total_adms":9,"total_cases":2},{"date":"2001-07-01","state":"NSW","total_adms":68,"total_cases":32},{"date":"2001-07-01","state":"QLD","total_adms":609,"total_cases":163},{"date":"2001-07-01","state":"VIC","total_adms":3,"total_cases":0},{"date":"2001-08-01","state":"NSW","total_adms":100,"total_cases":38},{"date":"2001-08-01","state":"QLD","total_adms":765,"total_cases":228},{"date":"2001-08-01","state":"VIC","total_adms":2,"total_cases":0},{"date":"2001-09-01","state":"NSW","total_adms":218,"total_cases":130},{"date":"2001-09-01","state":"QLD","total_adms":998,"total_cases":364},{"date":"2001-09-01","state":"VIC","total_adms":8,"total_cases":0},{"date":"2001-10-01","state":"NSW","total_adms":289,"total_cases":171},{"date":"2001-10-01","state":"QLD","total_adms":1139,"total_cases":395},{"date":"2001-10-01","state":"VIC","total_adms":5,"total_cases":1},{"date":"2001-11-01","state":"NSW","total_adms":287,"total_cases":175},{"date":"2001-11-01","state":"QLD","total_adms":1101,"total_cases":340},{"date":"2001-11-01","state":"VIC","total_adms":7,"total_cases":0},{"date":"2001-12-01","state":"NSW","total_adms":272,"total_cases":142},{"date":"2001-12-01","state":"QLD","total_adms":940,"total_cases":260},{"date":"2001-12-01","state":"VIC","total_adms":9,"total_cases":2},{"date":"2002-01-01","state":"NSW","total_adms":136,"total_cases":46},{"date":"2002-01-01","state":"QLD","total_adms":778,"total_cases":174},{"date":"2002-01-01","state":"VIC","total_adms":8,"total_cases":0},{"date":"2002-02-01","state":"NSW","total_adms":65,"total_cases":14},{"date":"2002-02-01","state":"QLD","total_adms":579,"total_cases":95},{"date":"2002-02-01","state":"VIC","total_adms":7,"total_cases":0},{"date":"2002-03-01","state":"NSW","total_adms":71,"total_cases":20},{"date":"2002-03-01","state":"QLD","total_adms":597,"total_cases":110},{"date":"2002-03-01","state":"VIC","total_adms":6,"total_cases":2},{"date":"2002-04-01","state":"NSW","total_adms":57,"total_cases":9},{"date":"2002-04-01","state":"QLD","total_adms":600,"total_cases":137},{"date":"2002-04-01","state":"VIC","total_adms":4,"total_cases":2},{"date":"2002-05-01","state":"NSW","total_adms":74,"total_cases":24},{"date":"2002-05-01","state":"QLD","total_adms":594,"total_cases":144},{"date":"2002-05-01","state":"VIC","total_adms":4,"total_cases":1},{"date":"2002-06-01","state":"NSW","total_adms":66,"total_cases":18},{"date":"2002-06-01","state":"QLD","total_adms":674,"total_cases":177},{"date":"2002-06-01","state":"VIC","total_adms":10,"total_cases":2},{"date":"2002-07-01","state":"NSW","total_adms":85,"total_cases":23},{"date":"2002-07-01","state":"QLD","total_adms":732,"total_cases":187},{"date":"2002-07-01","state":"VIC","total_adms":13,"total_cases":1},{"date":"2002-08-01","state":"NSW","total_adms":194,"total_cases":71},{"date":"2002-08-01","state":"QLD","total_adms":892,"total_cases":217},{"date":"2002-08-01","state":"VIC","total_adms":6,"total_cases":0},{"date":"2002-09-01","state":"NSW","total_adms":291,"total_cases":115},{"date":"2002-09-01","state":"QLD","total_adms":1340,"total_cases":425},{"date":"2002-09-01","state":"VIC","total_adms":10,"total_cases":1},{"date":"2002-10-01","state":"NSW","total_adms":360,"total_cases":188},{"date":"2002-10-01","state":"QLD","total_adms":1310,"total_cases":391},{"date":"2002-10-01","state":"VIC","total_adms":20,"total_cases":5},{"date":"2002-11-01","state":"NSW","total_adms":306,"total_cases":176},{"date":"2002-11-01","state":"QLD","total_adms":1120,"total_cases":321},{"date":"2002-11-01","state":"VIC","total_adms":7,"total_cases":1},{"date":"2002-12-01","state":"NSW","total_adms":264,"total_cases":132},{"date":"2002-12-01","state":"QLD","total_adms":1055,"total_cases":243},{"date":"2002-12-01","state":"VIC","total_adms":10,"total_cases":0},{"date":"2003-01-01","state":"NSW","total_adms":159,"total_cases":47},{"date":"2003-01-01","state":"QLD","total_adms":1089,"total_cases":277},{"date":"2003-01-01","state":"VIC","total_adms":21,"total_cases":4},{"date":"2003-02-01","state":"NSW","total_adms":65,"total_cases":6},{"date":"2003-02-01","state":"QLD","total_adms":588,"total_cases":23},{"date":"2003-02-01","state":"VIC","total_adms":6,"total_cases":0},{"date":"2003-03-01","state":"NSW","total_adms":70,"total_cases":10},{"date":"2003-03-01","state":"QLD","total_adms":626,"total_cases":17},{"date":"2003-03-01","state":"VIC","total_adms":10,"total_cases":1},{"date":"2003-04-01","state":"NSW","total_adms":62,"total_cases":9},{"date":"2003-04-01","state":"QLD","total_adms":602,"total_cases":23},{"date":"2003-04-01","state":"VIC","total_adms":5,"total_cases":1},{"date":"2003-05-01","state":"NSW","total_adms":78,"total_cases":19},{"date":"2003-05-01","state":"QLD","total_adms":677,"total_cases":28},{"date":"2003-05-01","state":"VIC","total_adms":6,"total_cases":0},{"date":"2003-06-01","state":"NSW","total_adms":98,"total_cases":25},{"date":"2003-06-01","state":"QLD","total_adms":631,"total_cases":38},{"date":"2003-06-01","state":"VIC","total_adms":9,"total_cases":0},{"date":"2003-07-01","state":"NSW","total_adms":120,"total_cases":34},{"date":"2003-07-01","state":"QLD","total_adms":687,"total_cases":55},{"date":"2003-07-01","state":"VIC","total_adms":12,"total_cases":3},{"date":"2003-08-01","state":"NSW","total_adms":179,"total_cases":59},{"date":"2003-08-01","state":"QLD","total_adms":823,"total_cases":100},{"date":"2003-08-01","state":"VIC","total_adms":5,"total_cases":0},{"date":"2003-09-01","state":"NSW","total_adms":281,"total_cases":120},{"date":"2003-09-01","state":"QLD","total_adms":1124,"total_cases":205},{"date":"2003-09-01","state":"VIC","total_adms":12,"total_cases":3},{"date":"2003-10-01","state":"NSW","total_adms":342,"total_cases":179},{"date":"2003-10-01","state":"QLD","total_adms":1336,"total_cases":340},{"date":"2003-10-01","state":"VIC","total_adms":19,"total_cases":4},{"date":"2003-11-01","state":"NSW","total_adms":385,"total_cases":217},{"date":"2003-11-01","state":"QLD","total_adms":1276,"total_cases":249},{"date":"2003-11-01","state":"VIC","total_adms":10,"total_cases":1},{"date":"2003-12-01","state":"NSW","total_adms":371,"total_cases":161},{"date":"2003-12-01","state":"QLD","total_adms":1162,"total_cases":136},{"date":"2003-12-01","state":"VIC","total_adms":21,"total_cases":0},{"date":"2004-01-01","state":"NSW","total_adms":194,"total_cases":69},{"date":"2004-01-01","state":"QLD","total_adms":902,"total_cases":71},{"date":"2004-01-01","state":"VIC","total_adms":18,"total_cases":3},{"date":"2004-02-01","state":"NSW","total_adms":110,"total_cases":10},{"date":"2004-02-01","state":"QLD","total_adms":695,"total_cases":30},{"date":"2004-02-01","state":"VIC","total_adms":14,"total_cases":1},{"date":"2004-03-01","state":"NSW","total_adms":98,"total_cases":11},{"date":"2004-03-01","state":"QLD","total_adms":686,"total_cases":29},{"date":"2004-03-01","state":"VIC","total_adms":14,"total_cases":1},{"date":"2004-04-01","state":"NSW","total_adms":91,"total_cases":12},{"date":"2004-04-01","state":"QLD","total_adms":630,"total_cases":28},{"date":"2004-04-01","state":"VIC","total_adms":10,"total_cases":0},{"date":"2004-05-01","state":"NSW","total_adms":84,"total_cases":17},{"date":"2004-05-01","state":"QLD","total_adms":595,"total_cases":33},{"date":"2004-05-01","state":"VIC","total_adms":10,"total_cases":1},{"date":"2004-06-01","state":"NSW","total_adms":102,"total_cases":23},{"date":"2004-06-01","state":"QLD","total_adms":718,"total_cases":32},{"date":"2004-06-01","state":"VIC","total_adms":8,"total_cases":1},{"date":"2004-07-01","state":"NSW","total_adms":116,"total_cases":18},{"date":"2004-07-01","state":"QLD","total_adms":725,"total_cases":45},{"date":"2004-07-01","state":"VIC","total_adms":9,"total_cases":1},{"date":"2004-08-01","state":"NSW","total_adms":165,"total_cases":40},{"date":"2004-08-01","state":"QLD","total_adms":789,"total_cases":101},{"date":"2004-08-01","state":"VIC","total_adms":13,"total_cases":1},{"date":"2004-09-01","state":"NSW","total_adms":317,"total_cases":98},{"date":"2004-09-01","state":"QLD","total_adms":1301,"total_cases":279},{"date":"2004-09-01","state":"VIC","total_adms":13,"total_cases":0},{"date":"2004-10-01","state":"NSW","total_adms":407,"total_cases":176},{"date":"2004-10-01","state":"QLD","total_adms":1332,"total_cases":242},{"date":"2004-10-01","state":"VIC","total_adms":9,"total_cases":0},{"date":"2004-11-01","state":"NSW","total_adms":372,"total_cases":162},{"date":"2004-11-01","state":"QLD","total_adms":1223,"total_cases":203},{"date":"2004-11-01","state":"VIC","total_adms":11,"total_cases":0},{"date":"2004-12-01","state":"NSW","total_adms":361,"total_cases":118},{"date":"2004-12-01","state":"QLD","total_adms":1213,"total_cases":119},{"date":"2004-12-01","state":"VIC","total_adms":23,"total_cases":3},{"date":"2005-01-01","state":"NSW","total_adms":229,"total_cases":59},{"date":"2005-01-01","state":"QLD","total_adms":924,"total_cases":73},{"date":"2005-01-01","state":"VIC","total_adms":25,"total_cases":2},{"date":"2005-02-01","state":"NSW","total_adms":123,"total_cases":12},{"date":"2005-02-01","state":"QLD","total_adms":741,"total_cases":31},{"date":"2005-02-01","state":"VIC","total_adms":13,"total_cases":1},{"date":"2005-03-01","state":"NSW","total_adms":122,"total_cases":9},{"date":"2005-03-01","state":"QLD","total_adms":654,"total_cases":15},{"date":"2005-03-01","state":"VIC","total_adms":7,"total_cases":1},{"date":"2005-04-01","state":"NSW","total_adms":121,"total_cases":20},{"date":"2005-04-01","state":"QLD","total_adms":660,"total_cases":27},{"date":"2005-04-01","state":"VIC","total_adms":12,"total_cases":2},{"date":"2005-05-01","state":"NSW","total_adms":115,"total_cases":25},{"date":"2005-05-01","state":"QLD","total_adms":626,"total_cases":30},{"date":"2005-05-01","state":"VIC","total_adms":15,"total_cases":2},{"date":"2005-06-01","state":"NSW","total_adms":96,"total_cases":12},{"date":"2005-06-01","state":"QLD","total_adms":727,"total_cases":41},{"date":"2005-06-01","state":"VIC","total_adms":9,"total_cases":1},{"date":"2005-07-01","state":"NSW","total_adms":134,"total_cases":33},{"date":"2005-07-01","state":"QLD","total_adms":859,"total_cases":57},{"date":"2005-07-01","state":"VIC","total_adms":12,"total_cases":0},{"date":"2005-08-01","state":"NSW","total_adms":168,"total_cases":34},{"date":"2005-08-01","state":"QLD","total_adms":1030,"total_cases":124},{"date":"2005-08-01","state":"VIC","total_adms":9,"total_cases":0},{"date":"2005-09-01","state":"NSW","total_adms":262,"total_cases":72},{"date":"2005-09-01","state":"QLD","total_adms":1411,"total_cases":228},{"date":"2005-09-01","state":"VIC","total_adms":15,"total_cases":1},{"date":"2005-10-01","state":"NSW","total_adms":369,"total_cases":146},{"date":"2005-10-01","state":"QLD","total_adms":1616,"total_cases":297},{"date":"2005-10-01","state":"VIC","total_adms":18,"total_cases":1},{"date":"2005-11-01","state":"NSW","total_adms":425,"total_cases":172},{"date":"2005-11-01","state":"QLD","total_adms":1570,"total_cases":246},{"date":"2005-11-01","state":"VIC","total_adms":7,"total_cases":1},{"date":"2005-12-01","state":"NSW","total_adms":310,"total_cases":80},{"date":"2005-12-01","state":"QLD","total_adms":1218,"total_cases":110},{"date":"2005-12-01","state":"VIC","total_adms":30,"total_cases":2},{"date":"2006-01-01","state":"NSW","total_adms":234,"total_cases":60},{"date":"2006-01-01","state":"QLD","total_adms":1019,"total_cases":57},{"date":"2006-01-01","state":"VIC","total_adms":19,"total_cases":2},{"date":"2006-02-01","state":"NSW","total_adms":126,"total_cases":10},{"date":"2006-02-01","state":"QLD","total_adms":851,"total_cases":27},{"date":"2006-02-01","state":"VIC","total_adms":8,"total_cases":0},{"date":"2006-03-01","state":"NSW","total_adms":112,"total_cases":8},{"date":"2006-03-01","state":"QLD","total_adms":873,"total_cases":19},{"date":"2006-03-01","state":"VIC","total_adms":20,"total_cases":2},{"date":"2006-04-01","state":"NSW","total_adms":72,"total_cases":8},{"date":"2006-04-01","state":"QLD","total_adms":702,"total_cases":25},{"date":"2006-04-01","state":"VIC","total_adms":5,"total_cases":0},{"date":"2006-05-01","state":"NSW","total_adms":78,"total_cases":11},{"date":"2006-05-01","state":"QLD","total_adms":745,"total_cases":39},{"date":"2006-05-01","state":"VIC","total_adms":13,"total_cases":0},{"date":"2006-06-01","state":"NSW","total_adms":67,"total_cases":13},{"date":"2006-06-01","state":"QLD","total_adms":826,"total_cases":30},{"date":"2006-06-01","state":"VIC","total_adms":8,"total_cases":0},{"date":"2006-07-01","state":"NSW","total_adms":112,"total_cases":16},{"date":"2006-07-01","state":"QLD","total_adms":919,"total_cases":52},{"date":"2006-07-01","state":"VIC","total_adms":7,"total_cases":0},{"date":"2006-08-01","state":"NSW","total_adms":146,"total_cases":33},{"date":"2006-08-01","state":"QLD","total_adms":1221,"total_cases":106},{"date":"2006-08-01","state":"VIC","total_adms":15,"total_cases":1},{"date":"2006-09-01","state":"NSW","total_adms":249,"total_cases":79},{"date":"2006-09-01","state":"QLD","total_adms":1802,"total_cases":311},{"date":"2006-09-01","state":"VIC","total_adms":14,"total_cases":0},{"date":"2006-10-01","state":"NSW","total_adms":279,"total_cases":110},{"date":"2006-10-01","state":"QLD","total_adms":1960,"total_cases":326},{"date":"2006-10-01","state":"VIC","total_adms":13,"total_cases":0},{"date":"2006-11-01","state":"NSW","total_adms":335,"total_cases":136},{"date":"2006-11-01","state":"QLD","total_adms":1590,"total_cases":220},{"date":"2006-11-01","state":"VIC","total_adms":10,"total_cases":2},{"date":"2006-12-01","state":"NSW","total_adms":279,"total_cases":92},{"date":"2006-12-01","state":"QLD","total_adms":1440,"total_cases":113},{"date":"2006-12-01","state":"VIC","total_adms":22,"total_cases":0},{"date":"2007-01-01","state":"NSW","total_adms":222,"total_cases":48},{"date":"2007-01-01","state":"QLD","total_adms":1300,"total_cases":76},{"date":"2007-01-01","state":"VIC","total_adms":25,"total_cases":3},{"date":"2007-02-01","state":"NSW","total_adms":119,"total_cases":9},{"date":"2007-02-01","state":"QLD","total_adms":1003,"total_cases":35},{"date":"2007-02-01","state":"VIC","total_adms":12,"total_cases":1},{"date":"2007-03-01","state":"NSW","total_adms":127,"total_cases":6},{"date":"2007-03-01","state":"QLD","total_adms":1102,"total_cases":25},{"date":"2007-03-01","state":"VIC","total_adms":22,"total_cases":1},{"date":"2007-04-01","state":"NSW","total_adms":100,"total_cases":10},{"date":"2007-04-01","state":"QLD","total_adms":879,"total_cases":21},{"date":"2007-04-01","state":"VIC","total_adms":19,"total_cases":2},{"date":"2007-05-01","state":"NSW","total_adms":95,"total_cases":14},{"date":"2007-05-01","state":"QLD","total_adms":1087,"total_cases":37},{"date":"2007-05-01","state":"VIC","total_adms":16,"total_cases":1},{"date":"2007-06-01","state":"NSW","total_adms":88,"total_cases":11},{"date":"2007-06-01","state":"QLD","total_adms":992,"total_cases":40},{"date":"2007-06-01","state":"VIC","total_adms":14,"total_cases":0},{"date":"2007-07-01","state":"NSW","total_adms":111,"total_cases":16},{"date":"2007-07-01","state":"QLD","total_adms":1008,"total_cases":57},{"date":"2007-07-01","state":"VIC","total_adms":7,"total_cases":0},{"date":"2007-08-01","state":"NSW","total_adms":188,"total_cases":42},{"date":"2007-08-01","state":"QLD","total_adms":1272,"total_cases":104},{"date":"2007-08-01","state":"VIC","total_adms":7,"total_cases":0},{"date":"2007-09-01","state":"NSW","total_adms":610,"total_cases":67},{"date":"2007-09-01","state":"QLD","total_adms":1937,"total_cases":304},{"date":"2007-09-01","state":"VIC","total_adms":14,"total_cases":0},{"date":"2007-10-01","state":"NSW","total_adms":739,"total_cases":118},{"date":"2007-10-01","state":"QLD","total_adms":1865,"total_cases":310},{"date":"2007-10-01","state":"VIC","total_adms":14,"total_cases":1},{"date":"2007-11-01","state":"NSW","total_adms":759,"total_cases":183},{"date":"2007-11-01","state":"QLD","total_adms":1718,"total_cases":236},{"date":"2007-11-01","state":"VIC","total_adms":11,"total_cases":0},{"date":"2007-12-01","state":"NSW","total_adms":714,"total_cases":136},{"date":"2007-12-01","state":"QLD","total_adms":1435,"total_cases":142},{"date":"2007-12-01","state":"VIC","total_adms":30,"total_cases":1},{"date":"2008-01-01","state":"NSW","total_adms":547,"total_cases":67},{"date":"2008-01-01","state":"QLD","total_adms":1107,"total_cases":65},{"date":"2008-01-01","state":"VIC","total_adms":27,"total_cases":1},{"date":"2008-02-01","state":"NSW","total_adms":438,"total_cases":13},{"date":"2008-02-01","state":"QLD","total_adms":1007,"total_cases":33},{"date":"2008-02-01","state":"VIC","total_adms":14,"total_cases":1},{"date":"2008-03-01","state":"NSW","total_adms":393,"total_cases":10},{"date":"2008-03-01","state":"QLD","total_adms":929,"total_cases":34},{"date":"2008-03-01","state":"VIC","total_adms":102,"total_cases":1},{"date":"2008-04-01","state":"NSW","total_adms":394,"total_cases":9},{"date":"2008-04-01","state":"QLD","total_adms":1298,"total_cases":26},{"date":"2008-04-01","state":"VIC","total_adms":234,"total_cases":1},{"date":"2008-05-01","state":"NSW","total_adms":355,"total_cases":13},{"date":"2008-05-01","state":"QLD","total_adms":1048,"total_cases":30},{"date":"2008-05-01","state":"VIC","total_adms":19,"total_cases":2},{"date":"2008-06-01","state":"NSW","total_adms":345,"total_cases":15},{"date":"2008-06-01","state":"QLD","total_adms":1029,"total_cases":38},{"date":"2008-06-01","state":"VIC","total_adms":18,"total_cases":0},{"date":"2008-07-01","state":"NSW","total_adms":412,"total_cases":18},{"date":"2008-07-01","state":"QLD","total_adms":1120,"total_cases":64},{"date":"2008-07-01","state":"VIC","total_adms":37,"total_cases":0},{"date":"2008-08-01","state":"NSW","total_adms":433,"total_cases":14},{"date":"2008-08-01","state":"QLD","total_adms":1089,"total_cases":123},{"date":"2008-08-01","state":"VIC","total_adms":13,"total_cases":0},{"date":"2008-09-01","state":"NSW","total_adms":512,"total_cases":74},{"date":"2008-09-01","state":"QLD","total_adms":1679,"total_cases":345},{"date":"2008-09-01","state":"VIC","total_adms":29,"total_cases":5},{"date":"2008-10-01","state":"NSW","total_adms":488,"total_cases":135},{"date":"2008-10-01","state":"QLD","total_adms":1561,"total_cases":302},{"date":"2008-10-01","state":"VIC","total_adms":25,"total_cases":2},{"date":"2008-11-01","state":"NSW","total_adms":402,"total_cases":148},{"date":"2008-11-01","state":"QLD","total_adms":1105,"total_cases":226},{"date":"2008-11-01","state":"VIC","total_adms":18,"total_cases":3},{"date":"2008-12-01","state":"NSW","total_adms":358,"total_cases":117},{"date":"2008-12-01","state":"QLD","total_adms":1083,"total_cases":129},{"date":"2008-12-01","state":"VIC","total_adms":24,"total_cases":0},{"date":"2009-01-01","state":"NSW","total_adms":254,"total_cases":45},{"date":"2009-01-01","state":"QLD","total_adms":751,"total_cases":59},{"date":"2009-01-01","state":"VIC","total_adms":30,"total_cases":3},{"date":"2009-02-01","state":"NSW","total_adms":144,"total_cases":9},{"date":"2009-02-01","state":"QLD","total_adms":629,"total_cases":24},{"date":"2009-02-01","state":"VIC","total_adms":13,"total_cases":0},{"date":"2009-03-01","state":"NSW","total_adms":124,"total_cases":10},{"date":"2009-03-01","state":"QLD","total_adms":561,"total_cases":31},{"date":"2009-03-01","state":"VIC","total_adms":25,"total_cases":5},{"date":"2009-04-01","state":"NSW","total_adms":129,"total_cases":17},{"date":"2009-04-01","state":"QLD","total_adms":573,"total_cases":25},{"date":"2009-04-01","state":"VIC","total_adms":15,"total_cases":2},{"date":"2009-05-01","state":"NSW","total_adms":107,"total_cases":11},{"date":"2009-05-01","state":"QLD","total_adms":543,"total_cases":27},{"date":"2009-05-01","state":"VIC","total_adms":12,"total_cases":0},{"date":"2009-06-01","state":"NSW","total_adms":96,"total_cases":16},{"date":"2009-06-01","state":"QLD","total_adms":573,"total_cases":42},{"date":"2009-06-01","state":"VIC","total_adms":13,"total_cases":3},{"date":"2009-07-01","state":"NSW","total_adms":142,"total_cases":20},{"date":"2009-07-01","state":"QLD","total_adms":712,"total_cases":72},{"date":"2009-07-01","state":"VIC","total_adms":14,"total_cases":1},{"date":"2009-08-01","state":"NSW","total_adms":203,"total_cases":45},{"date":"2009-08-01","state":"QLD","total_adms":805,"total_cases":119},{"date":"2009-08-01","state":"VIC","total_adms":18,"total_cases":0},{"date":"2009-09-01","state":"NSW","total_adms":294,"total_cases":72},{"date":"2009-09-01","state":"QLD","total_adms":1283,"total_cases":240},{"date":"2009-09-01","state":"VIC","total_adms":17,"total_cases":0},{"date":"2009-10-01","state":"NSW","total_adms":398,"total_cases":112},{"date":"2009-10-01","state":"QLD","total_adms":1228,"total_cases":216},{"date":"2009-10-01","state":"VIC","total_adms":26,"total_cases":0},{"date":"2009-11-01","state":"NSW","total_adms":486,"total_cases":160},{"date":"2009-11-01","state":"QLD","total_adms":1157,"total_cases":228},{"date":"2009-11-01","state":"VIC","total_adms":27,"total_cases":2},{"date":"2009-12-01","state":"NSW","total_adms":356,"total_cases":91},{"date":"2009-12-01","state":"QLD","total_adms":1027,"total_cases":93},{"date":"2009-12-01","state":"VIC","total_adms":26,"total_cases":0},{"date":"2010-01-01","state":"NSW","total_adms":313,"total_cases":50},{"date":"2010-01-01","state":"QLD","total_adms":962,"total_cases":56},{"date":"2010-01-01","state":"VIC","total_adms":24,"total_cases":3},{"date":"2010-02-01","state":"NSW","total_adms":181,"total_cases":11},{"date":"2010-02-01","state":"QLD","total_adms":852,"total_cases":26},{"date":"2010-02-01","state":"VIC","total_adms":18,"total_cases":1},{"date":"2010-03-01","state":"NSW","total_adms":182,"total_cases":12},{"date":"2010-03-01","state":"QLD","total_adms":884,"total_cases":18},{"date":"2010-03-01","state":"VIC","total_adms":8,"total_cases":0},{"date":"2010-04-01","state":"NSW","total_adms":150,"total_cases":19},{"date":"2010-04-01","state":"QLD","total_adms":801,"total_cases":23},{"date":"2010-04-01","state":"VIC","total_adms":13,"total_cases":0},{"date":"2010-05-01","state":"NSW","total_adms":146,"total_cases":14},{"date":"2010-05-01","state":"QLD","total_adms":761,"total_cases":26},{"date":"2010-05-01","state":"VIC","total_adms":17,"total_cases":1},{"date":"2010-06-01","state":"NSW","total_adms":136,"total_cases":14},{"date":"2010-06-01","state":"QLD","total_adms":1177,"total_cases":37},{"date":"2010-06-01","state":"VIC","total_adms":10,"total_cases":0},{"date":"2010-07-01","state":"NSW","total_adms":215,"total_cases":15},{"date":"2010-07-01","state":"QLD","total_adms":1468,"total_cases":68},{"date":"2010-07-01","state":"VIC","total_adms":11,"total_cases":0},{"date":"2010-08-01","state":"NSW","total_adms":293,"total_cases":25},{"date":"2010-08-01","state":"QLD","total_adms":1531,"total_cases":145},{"date":"2010-08-01","state":"VIC","total_adms":9,"total_cases":1},{"date":"2010-09-01","state":"NSW","total_adms":498,"total_cases":63},{"date":"2010-09-01","state":"QLD","total_adms":1974,"total_cases":284},{"date":"2010-09-01","state":"VIC","total_adms":18,"total_cases":2},{"date":"2010-10-01","state":"NSW","total_adms":511,"total_cases":117},{"date":"2010-10-01","state":"QLD","total_adms":2225,"total_cases":312},{"date":"2010-10-01","state":"VIC","total_adms":20,"total_cases":2},{"date":"2010-11-01","state":"NSW","total_adms":662,"total_cases":171},{"date":"2010-11-01","state":"QLD","total_adms":2144,"total_cases":270},{"date":"2010-11-01","state":"VIC","total_adms":18,"total_cases":2},{"date":"2010-12-01","state":"NSW","total_adms":600,"total_cases":114},{"date":"2010-12-01","state":"QLD","total_adms":1968,"total_cases":133},{"date":"2010-12-01","state":"VIC","total_adms":33,"total_cases":3},{"date":"2011-01-01","state":"NSW","total_adms":410,"total_cases":65},{"date":"2011-01-01","state":"QLD","total_adms":1744,"total_cases":73},{"date":"2011-01-01","state":"VIC","total_adms":24,"total_cases":2},{"date":"2011-02-01","state":"NSW","total_adms":226,"total_cases":10},{"date":"2011-02-01","state":"QLD","total_adms":1486,"total_cases":26},{"date":"2011-02-01","state":"VIC","total_adms":20,"total_cases":0},{"date":"2011-03-01","state":"NSW","total_adms":346,"total_cases":17},{"date":"2011-03-01","state":"QLD","total_adms":1564,"total_cases":21},{"date":"2011-03-01","state":"VIC","total_adms":24,"total_cases":2},{"date":"2011-04-01","state":"NSW","total_adms":257,"total_cases":16},{"date":"2011-04-01","state":"QLD","total_adms":1511,"total_cases":43},{"date":"2011-04-01","state":"VIC","total_adms":22,"total_cases":1},{"date":"2011-05-01","state":"NSW","total_adms":240,"total_cases":15},{"date":"2011-05-01","state":"QLD","total_adms":1521,"total_cases":65},{"date":"2011-05-01","state":"VIC","total_adms":12,"total_cases":1},{"date":"2011-06-01","state":"NSW","total_adms":202,"total_cases":14},{"date":"2011-06-01","state":"QLD","total_adms":1497,"total_cases":58},{"date":"2011-06-01","state":"VIC","total_adms":17,"total_cases":0},{"date":"2011-07-01","state":"NSW","total_adms":285,"total_cases":28},{"date":"2011-07-01","state":"QLD","total_adms":1687,"total_cases":95},{"date":"2011-07-01","state":"VIC","total_adms":16,"total_cases":2},{"date":"2011-08-01","state":"NSW","total_adms":407,"total_cases":36},{"date":"2011-08-01","state":"QLD","total_adms":1863,"total_cases":188},{"date":"2011-08-01","state":"VIC","total_adms":12,"total_cases":0},{"date":"2011-09-01","state":"NSW","total_adms":485,"total_cases":69},{"date":"2011-09-01","state":"QLD","total_adms":2534,"total_cases":412},{"date":"2011-09-01","state":"VIC","total_adms":19,"total_cases":1},{"date":"2011-10-01","state":"NSW","total_adms":575,"total_cases":139},{"date":"2011-10-01","state":"QLD","total_adms":2595,"total_cases":507},{"date":"2011-10-01","state":"VIC","total_adms":23,"total_cases":4},{"date":"2011-11-01","state":"NSW","total_adms":713,"total_cases":173},{"date":"2011-11-01","state":"QLD","total_adms":2371,"total_cases":353},{"date":"2011-11-01","state":"VIC","total_adms":28,"total_cases":3},{"date":"2011-12-01","state":"NSW","total_adms":617,"total_cases":137},{"date":"2011-12-01","state":"QLD","total_adms":1887,"total_cases":170},{"date":"2011-12-01","state":"VIC","total_adms":36,"total_cases":5},{"date":"2012-01-01","state":"NSW","total_adms":486,"total_cases":80},{"date":"2012-01-01","state":"QLD","total_adms":1391,"total_cases":97},{"date":"2012-01-01","state":"VIC","total_adms":33,"total_cases":1},{"date":"2012-02-01","state":"NSW","total_adms":291,"total_cases":22},{"date":"2012-02-01","state":"QLD","total_adms":1223,"total_cases":40},{"date":"2012-02-01","state":"VIC","total_adms":23,"total_cases":3},{"date":"2012-03-01","state":"NSW","total_adms":232,"total_cases":21},{"date":"2012-03-01","state":"QLD","total_adms":1140,"total_cases":43},{"date":"2012-03-01","state":"VIC","total_adms":16,"total_cases":1},{"date":"2012-04-01","state":"NSW","total_adms":177,"total_cases":17},{"date":"2012-04-01","state":"QLD","total_adms":998,"total_cases":54},{"date":"2012-04-01","state":"VIC","total_adms":21,"total_cases":0},{"date":"2012-05-01","state":"NSW","total_adms":158,"total_cases":15},{"date":"2012-05-01","state":"QLD","total_adms":1055,"total_cases":51},{"date":"2012-05-01","state":"VIC","total_adms":19,"total_cases":0},{"date":"2012-06-01","state":"NSW","total_adms":235,"total_cases":23},{"date":"2012-06-01","state":"QLD","total_adms":1087,"total_cases":72},{"date":"2012-06-01","state":"VIC","total_adms":20,"total_cases":0},{"date":"2012-07-01","state":"NSW","total_adms":249,"total_cases":28},{"date":"2012-07-01","state":"QLD","total_adms":1309,"total_cases":122},{"date":"2012-07-01","state":"VIC","total_adms":13,"total_cases":1},{"date":"2012-08-01","state":"NSW","total_adms":362,"total_cases":41},{"date":"2012-08-01","state":"QLD","total_adms":1555,"total_cases":197},{"date":"2012-08-01","state":"VIC","total_adms":15,"total_cases":0},{"date":"2012-09-01","state":"NSW","total_adms":590,"total_cases":87},{"date":"2012-09-01","state":"QLD","total_adms":1907,"total_cases":325},{"date":"2012-09-01","state":"VIC","total_adms":15,"total_cases":4},{"date":"2012-10-01","state":"NSW","total_adms":690,"total_cases":131},{"date":"2012-10-01","state":"QLD","total_adms":2461,"total_cases":504},{"date":"2012-10-01","state":"VIC","total_adms":28,"total_cases":2},{"date":"2012-11-01","state":"NSW","total_adms":712,"total_cases":169},{"date":"2012-11-01","state":"QLD","total_adms":2109,"total_cases":345},{"date":"2012-11-01","state":"VIC","total_adms":27,"total_cases":2},{"date":"2012-12-01","state":"NSW","total_adms":690,"total_cases":160},{"date":"2012-12-01","state":"QLD","total_adms":1615,"total_cases":173},{"date":"2012-12-01","state":"VIC","total_adms":32,"total_cases":3},{"date":"2013-01-01","state":"NSW","total_adms":546,"total_cases":61},{"date":"2013-01-01","state":"QLD","total_adms":1537,"total_cases":95},{"date":"2013-01-01","state":"VIC","total_adms":35,"total_cases":3},{"date":"2013-02-01","state":"NSW","total_adms":305,"total_cases":15},{"date":"2013-02-01","state":"QLD","total_adms":1123,"total_cases":29},{"date":"2013-02-01","state":"VIC","total_adms":19,"total_cases":1},{"date":"2013-03-01","state":"NSW","total_adms":282,"total_cases":13},{"date":"2013-03-01","state":"QLD","total_adms":1174,"total_cases":36},{"date":"2013-03-01","state":"VIC","total_adms":30,"total_cases":5},{"date":"2013-04-01","state":"NSW","total_adms":247,"total_cases":20},{"date":"2013-04-01","state":"QLD","total_adms":1192,"total_cases":52},{"date":"2013-04-01","state":"VIC","total_adms":29,"total_cases":2},{"date":"2013-05-01","state":"NSW","total_adms":245,"total_cases":25},{"date":"2013-05-01","state":"QLD","total_adms":1292,"total_cases":49},{"date":"2013-05-01","state":"VIC","total_adms":23,"total_cases":3},{"date":"2013-06-01","state":"NSW","total_adms":201,"total_cases":27},{"date":"2013-06-01","state":"QLD","total_adms":1304,"total_cases":70},{"date":"2013-06-01","state":"VIC","total_adms":17,"total_cases":1},{"date":"2013-07-01","state":"NSW","total_adms":338,"total_cases":30},{"date":"2013-07-01","state":"QLD","total_adms":1576,"total_cases":106},{"date":"2013-07-01","state":"VIC","total_adms":12,"total_cases":0},{"date":"2013-08-01","state":"NSW","total_adms":440,"total_cases":53},{"date":"2013-08-01","state":"QLD","total_adms":1896,"total_cases":204},{"date":"2013-08-01","state":"VIC","total_adms":14,"total_cases":0},{"date":"2013-09-01","state":"NSW","total_adms":641,"total_cases":92},{"date":"2013-09-01","state":"QLD","total_adms":2205,"total_cases":320},{"date":"2013-09-01","state":"VIC","total_adms":28,"total_cases":3},{"date":"2013-10-01","state":"NSW","total_adms":729,"total_cases":148},{"date":"2013-10-01","state":"QLD","total_adms":2204,"total_cases":322},{"date":"2013-10-01","state":"VIC","total_adms":26,"total_cases":5},{"date":"2013-11-01","state":"NSW","total_adms":560,"total_cases":144},{"date":"2013-11-01","state":"QLD","total_adms":2140,"total_cases":228},{"date":"2013-11-01","state":"VIC","total_adms":24,"total_cases":1},{"date":"2013-12-01","state":"NSW","total_adms":606,"total_cases":143},{"date":"2013-12-01","state":"QLD","total_adms":2029,"total_cases":154},{"date":"2013-12-01","state":"VIC","total_adms":37,"total_cases":2},{"date":"2014-01-01","state":"NSW","total_adms":471,"total_cases":68},{"date":"2014-01-01","state":"QLD","total_adms":1913,"total_cases":70},{"date":"2014-01-01","state":"VIC","total_adms":30,"total_cases":3},{"date":"2014-02-01","state":"NSW","total_adms":232,"total_cases":16},{"date":"2014-02-01","state":"QLD","total_adms":1659,"total_cases":32},{"date":"2014-02-01","state":"VIC","total_adms":25,"total_cases":2},{"date":"2014-03-01","state":"NSW","total_adms":279,"total_cases":15},{"date":"2014-03-01","state":"QLD","total_adms":1736,"total_cases":30},{"date":"2014-03-01","state":"VIC","total_adms":29,"total_cases":1},{"date":"2014-04-01","state":"NSW","total_adms":217,"total_cases":15},{"date":"2014-04-01","state":"QLD","total_adms":1580,"total_cases":34},{"date":"2014-04-01","state":"VIC","total_adms":13,"total_cases":2},{"date":"2014-05-01","state":"NSW","total_adms":226,"total_cases":19},{"date":"2014-05-01","state":"QLD","total_adms":1634,"total_cases":59},{"date":"2014-05-01","state":"VIC","total_adms":29,"total_cases":1},{"date":"2014-06-01","state":"NSW","total_adms":234,"total_cases":20},{"date":"2014-06-01","state":"QLD","total_adms":1528,"total_cases":54},{"date":"2014-06-01","state":"VIC","total_adms":30,"total_cases":1},{"date":"2014-07-01","state":"NSW","total_adms":265,"total_cases":27},{"date":"2014-07-01","state":"QLD","total_adms":1627,"total_cases":82},{"date":"2014-07-01","state":"VIC","total_adms":22,"total_cases":2},{"date":"2014-08-01","state":"NSW","total_adms":413,"total_cases":50},{"date":"2014-08-01","state":"QLD","total_adms":1686,"total_cases":122},{"date":"2014-08-01","state":"VIC","total_adms":27,"total_cases":2},{"date":"2014-09-01","state":"NSW","total_adms":620,"total_cases":94},{"date":"2014-09-01","state":"QLD","total_adms":2344,"total_cases":301},{"date":"2014-09-01","state":"VIC","total_adms":21,"total_cases":2},{"date":"2014-10-01","state":"NSW","total_adms":656,"total_cases":137},{"date":"2014-10-01","state":"QLD","total_adms":2412,"total_cases":250},{"date":"2014-10-01","state":"VIC","total_adms":25,"total_cases":1},{"date":"2014-11-01","state":"NSW","total_adms":633,"total_cases":126},{"date":"2014-11-01","state":"QLD","total_adms":2045,"total_cases":151},{"date":"2014-11-01","state":"VIC","total_adms":28,"total_cases":1},{"date":"2014-12-01","state":"NSW","total_adms":599,"total_cases":108},{"date":"2014-12-01","state":"QLD","total_adms":1982,"total_cases":133},{"date":"2014-12-01","state":"VIC","total_adms":38,"total_cases":0},{"date":"2015-01-01","state":"NSW","total_adms":516,"total_cases":68},{"date":"2015-01-01","state":"QLD","total_adms":1959,"total_cases":89},{"date":"2015-01-01","state":"VIC","total_adms":40,"total_cases":4},{"date":"2015-02-01","state":"NSW","total_adms":386,"total_cases":24},{"date":"2015-02-01","state":"QLD","total_adms":1534,"total_cases":41},{"date":"2015-02-01","state":"VIC","total_adms":20,"total_cases":2},{"date":"2015-03-01","state":"NSW","total_adms":303,"total_cases":8},{"date":"2015-03-01","state":"QLD","total_adms":1561,"total_cases":26},{"date":"2015-03-01","state":"VIC","total_adms":37,"total_cases":5},{"date":"2015-04-01","state":"NSW","total_adms":279,"total_cases":9},{"date":"2015-04-01","state":"QLD","total_adms":1332,"total_cases":36},{"date":"2015-04-01","state":"VIC","total_adms":25,"total_cases":2},{"date":"2015-05-01","state":"NSW","total_adms":340,"total_cases":13},{"date":"2015-05-01","state":"QLD","total_adms":1619,"total_cases":38},{"date":"2015-05-01","state":"VIC","total_adms":22,"total_cases":0},{"date":"2015-06-01","state":"NSW","total_adms":309,"total_cases":12},{"date":"2015-06-01","state":"QLD","total_adms":1500,"total_cases":46},{"date":"2015-06-01","state":"VIC","total_adms":20,"total_cases":0},{"date":"2015-07-01","state":"NSW","total_adms":437,"total_cases":21},{"date":"2015-07-01","state":"QLD","total_adms":1694,"total_cases":61},{"date":"2015-07-01","state":"VIC","total_adms":27,"total_cases":0},{"date":"2015-08-01","state":"NSW","total_adms":524,"total_cases":33},{"date":"2015-08-01","state":"QLD","total_adms":1688,"total_cases":112},{"date":"2015-08-01","state":"VIC","total_adms":19,"total_cases":1},{"date":"2015-09-01","state":"NSW","total_adms":711,"total_cases":61},{"date":"2015-09-01","state":"QLD","total_adms":2245,"total_cases":197},{"date":"2015-09-01","state":"VIC","total_adms":33,"total_cases":6},{"date":"2015-10-01","state":"NSW","total_adms":964,"total_cases":103},{"date":"2015-10-01","state":"QLD","total_adms":2361,"total_cases":238},{"date":"2015-10-01","state":"VIC","total_adms":55,"total_cases":4},{"date":"2015-11-01","state":"NSW","total_adms":854,"total_cases":108},{"date":"2015-11-01","state":"QLD","total_adms":2216,"total_cases":157},{"date":"2015-11-01","state":"VIC","total_adms":55,"total_cases":4},{"date":"2015-12-01","state":"NSW","total_adms":911,"total_cases":69},{"date":"2015-12-01","state":"QLD","total_adms":2197,"total_cases":74},{"date":"2015-12-01","state":"VIC","total_adms":70,"total_cases":2},{"date":"2016-01-01","state":"NSW","total_adms":771,"total_cases":43},{"date":"2016-01-01","state":"QLD","total_adms":2179,"total_cases":56},{"date":"2016-01-01","state":"VIC","total_adms":60,"total_cases":8},{"date":"2016-02-01","state":"NSW","total_adms":512,"total_cases":19},{"date":"2016-02-01","state":"QLD","total_adms":2036,"total_cases":35},{"date":"2016-02-01","state":"VIC","total_adms":39,"total_cases":3},{"date":"2016-03-01","state":"NSW","total_adms":460,"total_cases":8},{"date":"2016-03-01","state":"QLD","total_adms":2082,"total_cases":35},{"date":"2016-03-01","state":"VIC","total_adms":27,"total_cases":3},{"date":"2016-04-01","state":"NSW","total_adms":352,"total_cases":7},{"date":"2016-04-01","state":"QLD","total_adms":2042,"total_cases":26},{"date":"2016-04-01","state":"VIC","total_adms":37,"total_cases":3},{"date":"2016-05-01","state":"NSW","total_adms":416,"total_cases":13},{"date":"2016-05-01","state":"QLD","total_adms":1941,"total_cases":38},{"date":"2016-05-01","state":"VIC","total_adms":26,"total_cases":2},{"date":"2016-06-01","state":"NSW","total_adms":442,"total_cases":21},{"date":"2016-06-01","state":"QLD","total_adms":2004,"total_cases":36},{"date":"2016-06-01","state":"VIC","total_adms":26,"total_cases":0},{"date":"2016-07-01","state":"NSW","total_adms":458,"total_cases":16},{"date":"2016-07-01","state":"QLD","total_adms":2313,"total_cases":54},{"date":"2016-07-01","state":"VIC","total_adms":25,"total_cases":5},{"date":"2016-08-01","state":"NSW","total_adms":471,"total_cases":28},{"date":"2016-08-01","state":"QLD","total_adms":2410,"total_cases":92},{"date":"2016-08-01","state":"VIC","total_adms":36,"total_cases":1},{"date":"2016-09-01","state":"NSW","total_adms":647,"total_cases":54},{"date":"2016-09-01","state":"QLD","total_adms":2604,"total_cases":163},{"date":"2016-09-01","state":"VIC","total_adms":55,"total_cases":3},{"date":"2016-10-01","state":"NSW","total_adms":743,"total_cases":62},{"date":"2016-10-01","state":"QLD","total_adms":2473,"total_cases":205},{"date":"2016-10-01","state":"VIC","total_adms":81,"total_cases":3},{"date":"2016-11-01","state":"NSW","total_adms":815,"total_cases":102},{"date":"2016-11-01","state":"QLD","total_adms":2557,"total_cases":137},{"date":"2016-11-01","state":"VIC","total_adms":90,"total_cases":2},{"date":"2016-12-01","state":"NSW","total_adms":848,"total_cases":58},{"date":"2016-12-01","state":"QLD","total_adms":2521,"total_cases":75},{"date":"2016-12-01","state":"VIC","total_adms":148,"total_cases":4},{"date":"2017-01-01","state":"NSW","total_adms":771,"total_cases":36},{"date":"2017-01-01","state":"QLD","total_adms":2346,"total_cases":41},{"date":"2017-01-01","state":"VIC","total_adms":89,"total_cases":1},{"date":"2017-02-01","state":"NSW","total_adms":555,"total_cases":19},{"date":"2017-02-01","state":"QLD","total_adms":2054,"total_cases":25},{"date":"2017-02-01","state":"VIC","total_adms":62,"total_cases":1},{"date":"2017-03-01","state":"NSW","total_adms":610,"total_cases":11},{"date":"2017-03-01","state":"QLD","total_adms":2076,"total_cases":25},{"date":"2017-03-01","state":"VIC","total_adms":68,"total_cases":3},{"date":"2017-04-01","state":"NSW","total_adms":510,"total_cases":12},{"date":"2017-04-01","state":"QLD","total_adms":1831,"total_cases":30},{"date":"2017-04-01","state":"VIC","total_adms":53,"total_cases":6},{"date":"2017-05-01","state":"NSW","total_adms":560,"total_cases":16},{"date":"2017-05-01","state":"QLD","total_adms":2043,"total_cases":36},{"date":"2017-05-01","state":"VIC","total_adms":57,"total_cases":1},{"date":"2017-06-01","state":"NSW","total_adms":563,"total_cases":12},{"date":"2017-06-01","state":"QLD","total_adms":1976,"total_cases":28},{"date":"2017-06-01","state":"VIC","total_adms":58,"total_cases":1},{"date":"2017-07-01","state":"NSW","total_adms":627,"total_cases":14},{"date":"2017-07-01","state":"QLD","total_adms":1896,"total_cases":45},{"date":"2017-07-01","state":"VIC","total_adms":61,"total_cases":1},{"date":"2017-08-01","state":"NSW","total_adms":686,"total_cases":25},{"date":"2017-08-01","state":"QLD","total_adms":2029,"total_cases":71},{"date":"2017-08-01","state":"VIC","total_adms":52,"total_cases":2},{"date":"2017-09-01","state":"NSW","total_adms":931,"total_cases":40},{"date":"2017-09-01","state":"QLD","total_adms":2327,"total_cases":85},{"date":"2017-09-01","state":"VIC","total_adms":59,"total_cases":2},{"date":"2017-10-01","state":"NSW","total_adms":938,"total_cases":81},{"date":"2017-10-01","state":"QLD","total_adms":2454,"total_cases":168},{"date":"2017-10-01","state":"VIC","total_adms":81,"total_cases":3},{"date":"2017-11-01","state":"NSW","total_adms":1066,"total_cases":94},{"date":"2017-11-01","state":"QLD","total_adms":2528,"total_cases":129},{"date":"2017-11-01","state":"VIC","total_adms":134,"total_cases":7},{"date":"2017-12-01","state":"NSW","total_adms":910,"total_cases":67},{"date":"2017-12-01","state":"QLD","total_adms":2318,"total_cases":67},{"date":"2017-12-01","state":"VIC","total_adms":138,"total_cases":6}]
const seasonality = [[15.3806,5.7882,3.4054,6.6295,10.0875,7.4621,10.3131,19.6714,31.0462,75.2072,46.1281,24.6111],[16.1663,6.5085,3.7629,7.1437,10.6695,7.9463,10.6585,21.226,35.3741,78.7212,48.3048,25.9567],[16.4387,6.7738,3.8847,7.3118,10.8748,8.1627,10.7786,21.8886,37.2334,79.9917,49.0381,26.4657],[16.6501,6.9781,3.9886,7.443,11.0389,8.3954,10.8851,22.5494,39.1876,81.0038,49.625,26.8637],[16.8447,7.1723,4.0805,7.5661,11.182,8.6362,10.9968,23.226,41.1685,82.0321,50.1796,27.2217],[17.0533,7.343,4.1729,7.6899,11.3371,8.918,11.1233,23.9957,43.4093,83.0354,50.7015,27.5712],[17.2651,7.5135,4.2707,7.8204,11.4953,9.2778,11.2917,24.8403,45.7811,84.0647,51.248,27.9471],[17.5192,7.7006,4.3827,7.9683,11.6797,9.7319,11.5563,25.8305,48.2132,85.357,51.9027,28.3857],[18.2197,8.1297,4.676,8.3913,12.1617,11.0872,12.5107,28.439,53.5551,89.0414,53.6932,29.759]]
const qld_regions_total = [{"LGACode":"31000","Region":"Brisbane (C)","total":9170},{"LGACode":"33430","Region":"Gold Coast (C)","total":8470},{"LGACode":"36910","Region":"Toowoomba (R)","total":1802},{"LGACode":"32080","Region":"Cairns (R)","total":1697},{"LGACode":"33960","Region":"Ipswich (C)","total":1403},{"LGACode":"35740","Region":"Noosa (S)","total":1083},{"LGACode":"35010","Region":"Moreton Bay (R)","total":930},{"LGACode":"37010","Region":"Townsville (C)","total":646},{"LGACode":"36250","Region":"Redland (C)","total":644},{"LGACode":"36510","Region":"Scenic Rim (R)","total":616}]
const nsw_regions_total = [{"LGACode":"11650","Region":"Central Coast (C) (NSW)","total":3519},{"LGACode":"14500","Region":"Ku-ring-gai (A)","total":3239},{"LGACode":"18450","Region":"Wollongong (C)","total":1336},{"LGACode":"16400","Region":"Port Stephens (A)","total":1230},{"LGACode":"15050","Region":"Maitland (C)","total":626},{"LGACode":"16380","Region":"Port Macquarie-Hastings (A)","total":521},{"LGACode":"15990","Region":"Northern Beaches (A)","total":516},{"LGACode":"15900","Region":"Newcastle (C)","total":292},{"LGACode":"16350","Region":"Penrith (C)","total":184},{"LGACode":"17310","Region":"Tamworth Regional (A)","total":133}]


function yeartick(data, {
    div,
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    z = ([, z]) => z, // given d in data, returns the (quantitative) z-value
    defined, // for gaps in data
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc, // the x-scale type
    title,
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // the y-scale type
    yDomain, // [ymin, ymax]
    zDomain, // [zmin, zmax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "#43718f", // stroke color of line
    strokeLinecap = "round", // stroke line cap of the line
    strokeLinejoin = "round", // stroke line join of the line
    strokeWidth = 1.5, // stroke width of line, in pixels
    strokeOpacity = 1, // stroke opacity of line
  } = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    // const Z = d3.map(data, z);
    const I = d3.range(X.length);
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);
  
    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [0, d3.max(Y)];

    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat)
     

    if (title === undefined) {
      const formatDate = xScale.tickFormat(null, "%B %Y");
      const formatValue = yScale.tickFormat(100, yFormat);
      title = i => `${formatDate(X[i])}\n${formatValue(Y[i])}`;
    } else {
      const O = d3.map(data, d => d);
      const T = title;

      title = i => T(O[i], i, data);
    }
  
    // Construct a line generator.
    const line = d3.line()
        .defined(i => D[i])
        .curve(curve)
        .x(i => xScale(X[i]))
        .y(i => yScale(Y[i]));
  
    const svg = d3.select(div)
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .style("-webkit-tap-highlight-color", "transparent")
        .style("overflow", "visible")
        .on("pointerenter pointermove", pointermoved)
        .on("pointerleave", pointerleft)
        .on("touchstart", event => event.preventDefault());
  
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));
  
    svg.append("path")
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-opacity", strokeOpacity)
        .attr("d", line(I));
  
        const tooltip = svg.append("g")
        .style("pointer-events", "none");
  

    function pointermoved(event) {
      const i = d3.bisectCenter(X, xScale.invert(d3.pointer(event)[0]));
      tooltip.style("display", null);
      tooltip.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
  
      const path = tooltip.selectAll("path")
        .data([,])
        .join("path")
          .attr("fill", "white")
          .attr("stroke", "black");
  
      const text = tooltip.selectAll("text")
        .data([,])
        .join("text")
        .call(text => text
          .selectAll("tspan")
          .data(`${title(i)}`.split(/\n/).reverse())
          .join("tspan")
            .attr("x", 1)
            .attr("y", (_, i) => `${i * 1.5}em`)
            .attr("font-weight", (_, i) => i ? null : "bold")
            .text(d => d));
  
      const {x, y, width: w, height: h} = text.node().getBBox();
      text.attr("transform", `translate(${-w / 2},${15 - y})`);
      path.attr("d", `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
      // svg.property("value", O[i]).dispatch("input", {bubbles: true});
    }
  
    function pointerleft() {
      tooltip.style("display", "none");
      svg.node().value = null;
      // svg.dispatch("input", {bubbles: true});
    }
  
    return Object.assign(svg.node(), {value: null});
  }

function yeartotaltick(data, {
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    z = ([, z]) => z, // given d in data, returns the (quantitative) y-value
    defined, // given d in data, returns true if defined (for gaps)
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc, // type of x-sc ale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor" // fill color of area
  } = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const Z = d3.map(data, z);
    const I = d3.range(X.length);
  
    // Compute which data points are considered defined.
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i] && !isNaN(Z[i]));
    const D = d3.map(data, defined);
  
    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [0, d3.max(Z)];
  
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Construct an area generator.
    const area = d3.area()
        // .defined(i => D[i])
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(yScale(0))
        .y1(i => yScale(Y[i]));
      
    const area2 = d3.area()
    //   .defined(i => D[i])
      .curve(curve)
      .x(i => xScale(X[i]))
      .y0(yScale(0))
      .y1(i => yScale(Z[i]));
  
    const svg = d3.select("#admissionviz")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)                        
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));

	svg.append("path")
		.attr("fill", "#bcd8ec")
		.attr("d", area2(I));

    svg.append("path")
      .attr("fill", "#FF001F")
      .attr("d", area(I));

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);

   
  
    return svg.node();
}


function forecast(data, {
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 800, // outer width, in pixels
    height = 600, // outer height, in pixels
    xType = d3.scaleLinear, // type of x-sc ale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
	xLabel = "Time",
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor", // fill color of area
	strokeLinecap = "round", // stroke line cap of the line
    strokeLinejoin = "round", // stroke line join of the line
    strokeWidth = 1.5, // stroke width of line, in pixels
    strokeOpacity = 1 // stroke opacity of line
  } = {}) {
    // Compute values.
    const l5 = data[0];
	const l20 = data[1];
	const l30 = data[2];
	const l40 = data[3];
	const l50 = data[4];
	const l60 = data[5];
	const l70 = data[6];
	const l80 = data[7];
	const l95 = data[8];

	const X = d3.range(l5.length)
	
    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [d3.min(d3.map(data, d => d3.min(d))) < 0 ? d3.min(d3.map(data, d => d3.min(d))) : 0, d3.max(d3.map(data, d => d3.max(d)))];
	
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Construct an area generator.
    const area95 = d3.area()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(i => yScale(l5[i]))
        .y1(i => yScale(l95[i]));
	
	const area80 = d3.area()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(i => yScale(l20[i]))
        .y1(i => yScale(l80[i]));

	const area70 = d3.area()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(i => yScale(l30[i]))
        .y1(i => yScale(l70[i]));
	
	const area60 = d3.area()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(i => yScale(l40[i]))
        .y1(i => yScale(l60[i]));
	
	// Construct a line generator.
    const line = d3.line()
        .curve(curve)
        .x(i => xScale(X[i]))
        .y(i => yScale(l50[i]));
      
    const svg = d3.select("#forecast")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

	svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("y2", marginTop + marginBottom - height)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", width)
            .attr("y", marginBottom - 4)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .text(xLabel));
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)                        
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));

	svg.append("path")
		.attr("fill", "#d5eeff")
		.attr("d", area95(X));

    svg.append("path")
		.attr("fill", "#bcd8ec")
		.attr("d", area80(X));
	
	svg.append("path")
		.attr("fill", "#a4c3d8")
		.attr("d", area70(X));

	svg.append("path")
		.attr("fill", "#8baec6")
		.attr("d", area60(X));
	
	svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#43718f")
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", strokeLinecap)
        .attr("stroke-linejoin", strokeLinejoin)
        .attr("stroke-opacity", strokeOpacity)
        .attr("d", line(X));

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);

    return svg.node();
}

function state_adm(data, {
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    title, // given d in data, returns the title text
    defined, // for gaps in data
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    zDomain, // array of z-values
    color = "steelblue", // stroke color of line, as a constant or a function of *z*
    strokeLinecap, // stroke line cap of line
    strokeLinejoin, // stroke line join of line
    strokeWidth = 1.5, // stroke width of line
    strokeOpacity, // stroke opacity of line
    mixBlendMode = "multiply", // blend mode of lines
    voronoi // show a Voronoi overlay? (for debugging)
  } = {}) {
	// Compute values.
	const X = d3.map(data, x);
	const Y = d3.map(data, y);
	const Z = d3.map(data, z);
	const O = d3.map(data, d => d);
	if (defined === undefined) defined = (d, i) => !isNaN(Y[i]);
	const D = d3.map(data, defined);
  
	// Compute default domains, and unique the z-domain.
	if (xDomain === undefined) xDomain = d3.extent(X);
	if (yDomain === undefined) yDomain = [0, d3.max(Y)];
	if (zDomain === undefined) zDomain = Z;
	zDomain = new d3.InternSet(zDomain);

  // Omit any data not present in the z-domain.
	const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));
  
	// Construct scales and axes.
	const xScale = xType(xDomain, xRange);
	const yScale = yType(yDomain, yRange);
	const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
	const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

  // // Compute titles.
	// const T = title === undefined ? Z : title === null ? null : d3.map(data, title);
  
	// Construct a line generator.
	const line = d3.line()
		.defined(i => D[i])
		.curve(curve)
		.x(i => xScale(X[i]))
		.y(i => yScale(Y[i]));
  
	const svg = d3.select("#admissionstateviz")
	.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [0, 0, width, height])
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;")
		.style("-webkit-tap-highlight-color", "transparent")
		// .on("pointerenter", pointerentered)
		// .on("pointermove", pointermoved)
		// .on("pointerleave", pointerleft)
		// .on("touchstart", event => event.preventDefault());
  
	// An optional Voronoi display (for fun).
	if (voronoi) svg.append("path")
		.attr("fill", "none")
		.attr("stroke", "#ccc")
		.attr("d", d3.Delaunay
		  .from(I, i => xScale(X[i]), i => yScale(Y[i]))
		  .voronoi([0, 0, width, height])
		  .render());
  
	svg.append("g")
		.attr("transform", `translate(0,${height - marginBottom})`)
		.call(xAxis);
  
	svg.append("g")
		.attr("transform", `translate(${marginLeft},0)`)
		.call(yAxis)
		.call(g => g.select(".domain").remove())
		.call(voronoi ? () => {} : g => g.selectAll(".tick line").clone()
			.attr("x2", width - marginLeft - marginRight)
			.attr("stroke-opacity", 0.1))
		.call(g => g.append("text")
			.attr("x", -marginLeft)
			.attr("y", 10)
			.attr("fill", "currentColor")
			.attr("text-anchor", "start")
			.text(yLabel));
  
      
	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", typeof color === "string" ? color : null)
		.attr("stroke-linecap", strokeLinecap)
		.attr("stroke-linejoin", strokeLinejoin)
		.attr("stroke-width", strokeWidth)
		.attr("stroke-opacity", strokeOpacity)
	  .selectAll("path")
	  .data(d3.group(I, i => Z[i]))
	  .join("path")
		.style("mix-blend-mode", mixBlendMode)
		.attr("stroke", typeof color === "function" ? ([z]) => color(z) : null)
		.attr("d", ([, I]) => line(I));
  
	const dot = svg.append("g")
		.attr("display", "none");
  
	dot.append("circle")
		.attr("r", 2.5);
  
	dot.append("text")
		.attr("font-family", "sans-serif")
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
		.attr("y", -8);
  
	// function pointermoved(event) {
	//   const [xm, ym] = d3.pointer(event);
	//   const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
	//   path.style("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
	//   dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
	//   if (T) dot.select("text").text(T[i]);
	//   svg.property("value", O[i]).dispatch("input", {bubbles: true});
	// }
  
	// function pointerentered() {
	//   path.style("mix-blend-mode", null).style("stroke", "#ddd");
	//   dot.attr("display", null);
	// }
  
	// function pointerleft() {
	//   path.style("mix-blend-mode", "multiply").style("stroke", null);
	//   dot.attr("display", "none");
	//   svg.node().value = null;
	//   svg.dispatch("input", {bubbles: true});
	// }
  
	return svg.node();
 }

 function state_cases(data, {
  x = ([x]) => x, // given d in data, returns the (temporal) x-value
  y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
  z = () => 1, // given d in data, returns the (categorical) z-value
  title, // given d in data, returns the title text
  defined, // for gaps in data
  curve = d3.curveBasis, // method of interpolation between points
  marginTop = 20, // top margin, in pixels
  marginRight = 30, // right margin, in pixels
  marginBottom = 30, // bottom margin, in pixels
  marginLeft = 40, // left margin, in pixels
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
  xType = d3.scaleUtc, // type of x-scale
  xDomain, // [xmin, xmax]
  xRange = [marginLeft, width - marginRight], // [left, right]
  yType = d3.scaleLinear, // type of y-scale
  yDomain, // [ymin, ymax]
  yRange = [height - marginBottom, marginTop], // [bottom, top]
  yFormat, // a format specifier string for the y-axis
  yLabel, // a label for the y-axis
  zDomain, // array of z-values
  color = "steelblue", // stroke color of line, as a constant or a function of *z*
  strokeLinecap, // stroke line cap of line
  strokeLinejoin, // stroke line join of line
  strokeWidth = 1.5, // stroke width of line
  strokeOpacity, // stroke opacity of line
  mixBlendMode = "multiply", // blend mode of lines
  voronoi // show a Voronoi overlay? (for debugging)
} = {}) {
// Compute values.
const X = d3.map(data, x);
const Y = d3.map(data, y);
const Z = d3.map(data, z);
const O = d3.map(data, d => d);
if (defined === undefined) defined = (d, i) => !isNaN(Y[i]);
const D = d3.map(data, defined);

// Compute default domains, and unique the z-domain.
if (xDomain === undefined) xDomain = d3.extent(X);
if (yDomain === undefined) yDomain = [0, d3.max(Y)];
if (zDomain === undefined) zDomain = Z;
zDomain = new d3.InternSet(zDomain);

// Omit any data not present in the z-domain.
const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));

// Construct scales and axes.
const xScale = xType(xDomain, xRange);
const yScale = yType(yDomain, yRange);
const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

// // Compute titles.
// const T = title === undefined ? Z : title === null ? null : d3.map(data, title);

// Construct a line generator.
const line = d3.line()
  .defined(i => D[i])
  .curve(curve)
  .x(i => xScale(X[i]))
  .y(i => yScale(Y[i]));

const svg = d3.select("#admissionstateviz")
.append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height])
  .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
  .style("-webkit-tap-highlight-color", "transparent")
  // .on("pointerenter", pointerentered)
  // .on("pointermove", pointermoved)
  // .on("pointerleave", pointerleft)
  // .on("touchstart", event => event.preventDefault());

// An optional Voronoi display (for fun).
if (voronoi) svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "#ccc")
  .attr("d", d3.Delaunay
    .from(I, i => xScale(X[i]), i => yScale(Y[i]))
    .voronoi([0, 0, width, height])
    .render());

svg.append("g")
  .attr("transform", `translate(0,${height - marginBottom})`)
  .call(xAxis);

svg.append("g")
  .attr("transform", `translate(${marginLeft},0)`)
  .call(yAxis)
  .call(g => g.select(".domain").remove())
  .call(voronoi ? () => {} : g => g.selectAll(".tick line").clone()
    .attr("x2", width - marginLeft - marginRight)
    .attr("stroke-opacity", 0.1))
  .call(g => g.append("text")
    .attr("x", -marginLeft)
    .attr("y", 10)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .text(yLabel));

    
svg.append("g")
  .attr("fill", "none")
  .attr("stroke", typeof color === "string" ? color : null)
  .attr("stroke-linecap", strokeLinecap)
  .attr("stroke-linejoin", strokeLinejoin)
  .attr("stroke-width", strokeWidth)
  .attr("stroke-opacity", strokeOpacity)
  .selectAll("path")
  .data(d3.group(I, i => Z[i]))
  .join("path")
  .style("mix-blend-mode", mixBlendMode)
  .attr("stroke", typeof color === "function" ? ([z]) => color(z) : null)
  .attr("d", ([, I]) => line(I));

const dot = svg.append("g")
  .attr("display", "none");

dot.append("circle")
  .attr("r", 2.5);

dot.append("text")
  .attr("font-family", "sans-serif")
  .attr("font-size", 10)
  .attr("text-anchor", "middle")
  .attr("y", -8);

// function pointermoved(event) {
//   const [xm, ym] = d3.pointer(event);
//   const i = d3.least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
//   path.style("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
//   dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
//   if (T) dot.select("text").text(T[i]);
//   svg.property("value", O[i]).dispatch("input", {bubbles: true});
// }

// function pointerentered() {
//   path.style("mix-blend-mode", null).style("stroke", "#ddd");
//   dot.attr("display", null);
// }

// function pointerleft() {
//   path.style("mix-blend-mode", "multiply").style("stroke", null);
//   dot.attr("display", "none");
//   svg.node().value = null;
//   svg.dispatch("input", {bubbles: true});
// }

return svg.node();
}

function qld_regions(data, {
  x = d => d, // given d in data, returns the (quantitative) x-value
  y = (d, i) => i, // given d in data, returns the (ordinal) y-value
  title, // given d in data, returns the title text
  marginTop = 30, // the top margin, in pixels
  marginRight = 0, // the right margin, in pixels
  marginBottom = 10, // the bottom margin, in pixels
  marginLeft = 100, // the left margin, in pixels
  width = 640, // the outer width of the chart, in pixels
  height, // outer height, in pixels
  xType = d3.scaleLinear, // type of x-scale
  xDomain, // [xmin, xmax]
  xRange = [marginLeft, width - marginRight], // [left, right]
  xFormat, // a format specifier string for the x-axis
  xLabel, // a label for the x-axis
  yPadding = 0.1, // amount of y-range to reserve to separate bars
  yDomain, // an array of (ordinal) y-values
  yRange, // [top, bottom]
  color = "currentColor", // bar fill color
  titleColor = "white", // title fill color when atop bar
  titleAltColor = "currentColor", // title fill color when atop background
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);

  // Compute default domains, and unique the y-domain.
  if (xDomain === undefined) xDomain = [0, d3.max(X)];
  if (yDomain === undefined) yDomain = Y;
  yDomain = new d3.InternSet(yDomain);

  // Omit any data not present in the y-domain.
  const I = d3.range(X.length).filter(i => yDomain.has(Y[i]));

  // Compute the default height.
  if (height === undefined) height = Math.ceil((yDomain.size + yPadding) * 25) + marginTop + marginBottom;
  if (yRange === undefined) yRange = [marginTop, height - marginBottom];

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = d3.scaleBand(yDomain, yRange).padding(yPadding);
  const xAxis = d3.axisTop(xScale).ticks(width / 80, xFormat);
  const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

  // Compute titles.
  if (title === undefined) {
    const formatValue = xScale.tickFormat(100, xFormat);
    title = i => `${formatValue(X[i])}`;
  } else {
    const O = d3.map(data, d => d);
    const T = title;
    title = i => T(O[i], i, data);
  }

  const svg = d3.select("#qldregions").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(xAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("y2", height - marginTop - marginBottom)
          .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
          .attr("x", width - marginRight)
          .attr("y", -22)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(xLabel));

  svg.append("g")
      .attr("fill", color)
    .selectAll("rect")
    .data(I)
    .join("rect")
      .attr("x", xScale(0))
      .attr("y", i => yScale(Y[i]))
      .attr("width", i => xScale(X[i]) - xScale(0))
      .attr("height", yScale.bandwidth());

  svg.append("g")
      .attr("fill", titleColor)
      .attr("text-anchor", "end")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
    .selectAll("text")
    .data(I)
    .join("text")
      .attr("x", i => xScale(X[i]))
      .attr("y", i => yScale(Y[i]) + yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("dx", -4)
      .text(title)
      .call(text => text.filter(i => xScale(X[i]) - xScale(0) < 20) // short bars
          .attr("dx", +4)
          .attr("fill", titleAltColor)
          .attr("text-anchor", "start"));

  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis);

  return svg.node();
}

function nsw_regions(data, {
  x = d => d, // given d in data, returns the (quantitative) x-value
  y = (d, i) => i, // given d in data, returns the (ordinal) y-value
  title, // given d in data, returns the title text
  marginTop = 30, // the top margin, in pixels
  marginRight = 0, // the right margin, in pixels
  marginBottom = 10, // the bottom margin, in pixels
  marginLeft = 100, // the left margin, in pixels
  width = 640, // the outer width of the chart, in pixels
  height, // outer height, in pixels
  xType = d3.scaleLinear, // type of x-scale
  xDomain, // [xmin, xmax]
  xRange = [marginLeft, width - marginRight], // [left, right]
  xFormat, // a format specifier string for the x-axis
  xLabel, // a label for the x-axis
  yPadding = 0.1, // amount of y-range to reserve to separate bars
  yDomain, // an array of (ordinal) y-values
  yRange, // [top, bottom]
  color = "currentColor", // bar fill color
  titleColor = "white", // title fill color when atop bar
  titleAltColor = "currentColor", // title fill color when atop background
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);

  // Compute default domains, and unique the y-domain.
  if (xDomain === undefined) xDomain = [0, d3.max(X)];
  if (yDomain === undefined) yDomain = Y;
  yDomain = new d3.InternSet(yDomain);

  // Omit any data not present in the y-domain.
  const I = d3.range(X.length).filter(i => yDomain.has(Y[i]));

  // Compute the default height.
  if (height === undefined) height = Math.ceil((yDomain.size + yPadding) * 25) + marginTop + marginBottom;
  if (yRange === undefined) yRange = [marginTop, height - marginBottom];

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = d3.scaleBand(yDomain, yRange).padding(yPadding);
  const xAxis = d3.axisTop(xScale).ticks(width / 80, xFormat);
  const yAxis = d3.axisLeft(yScale).tickSizeOuter(0);

  // Compute titles.
  if (title === undefined) {
    const formatValue = xScale.tickFormat(100, xFormat);
    title = i => `${formatValue(X[i])}`;
  } else {
    const O = d3.map(data, d => d);
    const T = title;
    title = i => T(O[i], i, data);
  }

  const svg = d3.select("#nswregions").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg.append("g")
      .attr("transform", `translate(0,${marginTop})`)
      .call(xAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
          .attr("y2", height - marginTop - marginBottom)
          .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
          .attr("x", width - marginRight)
          .attr("y", -22)
          .attr("fill", "currentColor")
          .attr("text-anchor", "end")
          .text(xLabel));

  svg.append("g")
      .attr("fill", color)
    .selectAll("rect")
    .data(I)
    .join("rect")
      .attr("x", xScale(0))
      .attr("y", i => yScale(Y[i]))
      .attr("width", i => xScale(X[i]) - xScale(0))
      .attr("height", yScale.bandwidth());

  svg.append("g")
      .attr("fill", titleColor)
      .attr("text-anchor", "end")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
    .selectAll("text")
    .data(I)
    .join("text")
      .attr("x", i => xScale(X[i]))
      .attr("y", i => yScale(Y[i]) + yScale.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("dx", -4)
      .text(title)
      .call(text => text.filter(i => xScale(X[i]) - xScale(0) < 20) // short bars
          .attr("dx", +4)
          .attr("fill", titleAltColor)
          .attr("text-anchor", "start"));

  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis);

  return svg.node();
}

state_adm(total_state, {
	x: d => new Date(d.date),
	y: d => d.total_adms,
	z: d => d.state,
	yLabel: "↑ Monthly Total",
	width: 800,
 	height: 300,	
	color: "steelblue",
	// voronoi // if true, show Voronoi overlay
})

state_adm(total_state, {
  x: d => new Date(d.date),
  y: d => d.total_cases,
  z: d => d.state,
  yLabel: "↑ Monthly Total",
  width: 800,
  height: 300,	
  color: "steelblue",
  // voronoi // if true, show Voronoi overlay
})

yeartick(total.slice(0,12), {
  x: d => new Date(d.date),
  y: d => d.total_cases,
  div: "#yearviz",
  yLabel: "↑ Monthly Total",
  width: 800,
  height: 300,
  color: "steelblue"
})

yeartick(total, {
  x: d => new Date(d.date),
  y: d => d.total_adms,
  div: "#yearviz",
  yLabel: "↑ Monthly Total",
  width: 800,
  height: 300,
  color: "steelblue"
})

yeartick(total, {
  x: d => new Date(d.date),
  y: d => d.total_cases,
  div: "#yearviz",
  yLabel: "↑ Monthly Total",
  width: 800,
  height: 300,
  color: "steelblue"
})


yeartotaltick(total, {
  x: d => new Date(d.date),
  y: d => d.total_cases,
  z: d => d.total_adms,
  div: "#yearviz",
  yLabel: "↑ Monthly Total",
  width: 800,
  height: 300,
  color: "steelblue"
})

forecast(preds, {
	yLabel: "↑ Monthly Total",
	width: 800,
	height: 300,
	color: "steelblue"
  })

forecast(trends, {
	yLabel: "↑ Monthly Total",
	width: 800,
	height: 300,
	color: "steelblue"
  })

forecast(seasonality, {
	yLabel: "↑ Monthly Total",
	width: 800,
	height: 300,
	color: "steelblue"
  })


qld_regions(qld_regions_total, {
  x: d => d.total,
  y: d => d.Region,
  yDomain: d3.groupSort(qld_regions_total, ([d]) => -d.total, d => d.Region), // sort by descending frequency
  // xFormat: "%",
  xLabel: "Frequency →",
  // width,
  color: "steelblue"
})
  
nsw_regions(nsw_regions_total, {
  x: d => d.total,
  y: d => d.Region,
  yDomain: d3.groupSort(nsw_regions_total, ([d]) => -d.total, d => d.Region), // sort by descending frequency
  // xFormat: "%",
  xLabel: "Frequency →",
  // width,
  color: "steelblue"
})
  


// yeartick(total, {
//   x: d => new Date(d.date),
//   y: d => d.total_cases,
//   z: d => d.total_adms,
//   div: "#totalviz",
//   yLabel: "↑ Monthly Total",
//   width: 800,
//   height: 300,
//   color: "steelblue"
// })
