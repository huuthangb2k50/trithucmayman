var TUAN = new Array("Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\341u", "Th\u1EE9 B\u1EA3y");
var THANG = new Array("Gi\u00EAng", "Hai", "Ba", "T\u01B0", "N\u0103m", "S\u00E1u", "B\u1EA3y", "T\u00E1m", "Ch\u00EDn", "M\u01B0\u1EDDi", "M\u01B0\u1EDDi M\u1ED9t", "Ch\u1EA1p");
var CAN = new Array("Gi\341p", "\u1EA4t", "B\355nh", "\u0110inh", "M\u1EADu", "K\u1EF7", "Canh", "T\342n", "Nh\342m", "Qu\375");
var CHI = new Array("T\375", "S\u1EEDu", "D\u1EA7n", "M\343o", "Th\354n", "T\u1EF5", "Ng\u1ECD", "M\371i", "Th\342n", "D\u1EADu", "Tu\u1EA5t", "H\u1EE3i");
var GIO_HD = new Array("110100101100", "001101001011", "110011010010", "101100110100", "001011001101", "010010110011");
var TIETKHI = new Array("Xu\u00E2n ph\u00E2n", "Thanh minh", "C\u1ED1c v\u0169", "L\u1EADp h\u1EA1", "Ti\u1EC3u m\u00E3n", "Mang ch\u1EE7ng",
        "H\u1EA1 ch\u00ED", "Ti\u1EC3u th\u1EED", "\u0110\u1EA1i th\u1EED", "L\u1EADp thu", "X\u1EED th\u1EED", "B\u1EA1ch l\u1ED9",
        "Thu ph\u00E2n", "H\u00E0n l\u1ED9", "S\u01B0\u01A1ng gi\u00E1ng", "L\u1EADp \u0111\u00F4ng", "Ti\u1EC3u tuy\u1EBFt", "\u0110\u1EA1i tuy\u1EBFt",
        "\u0110\u00F4ng ch\u00ED", "Ti\u1EC3u h\u00E0n", "\u0110\u1EA1i h\u00E0n", "L\u1EADp xu\u00E2n", "V\u0169 Th\u1EE7y", "Kinh tr\u1EADp"
        );
var MenhNguHanh = ["H&#7843;i Trung Kim", "L&#432; Trung H&#7887;a", "&#272;&#7841;i L&#226;m M&#7897;c", "L&#7897; B&#224;ng Th&#7893;", "Ki&#7871;m Phong Kim", "S&#417;n &#272;&#7847;u H&#7887;a"
            , "Gi&#7843;n H&#7841; Th&#7911;y", "Th&#224;nh &#272;&#7847;u Th&#7893;", "B&#7841;ch L&#7841;p Kim", "D&#432;&#417;ng Li&#7877;u M&#7897;c", "Tuy&#7873;n Trung Th&#7911;y"
            , "&#7888;c Th&#432;&#7907;ng Th&#7893;", "T&#237;ch L&#7883;ch H&#7887;a", "T&#249;ng B&#225;ch M&#7897;c", "Tr&#432;&#7901;ng L&#432;u Th&#7911;y", "Sa Trung Kim"
            , "S&#417;n H&#7841; H&#7887;a", "B&#236;nh &#272;&#7883;a M&#7897;c", "B&#237;ch Th&#432;&#7907;ng Th&#7893;", "Kim B&#7841;ch Kim", "Ph&#250; &#272;&#259;ng H&#7887;a"
            , "Thi&#234;n H&#224; Th&#7911;y", "&#272;&#7841;i Tr&#7841;ch Th&#7893;", "Thoa Xuy&#7871;n Kim", "Tang &#272;&#7891; M&#7897;c", "&#272;&#7841;i Kh&#234; Th&#7911;y"
            , "Sa Trung Th&#7893;", "Thi&#234;n Th&#432;&#7907;ng H&#7887;a", "Th&#7841;ch L&#432;u M&#7897;c ", "&#272;&#7841;i H&#7843;i Th&#7911;y"];
var MenhNguHanh2 = ["V&#224;ng trong bi&#7875;n", "L&#7917;a trong l&#242;", "C&#226;y r&#7915;ng l&#7899;n", "&#272;&#7845;t ven &#273;&#432;&#7901;ng", "V&#224;ng &#273;&#7847;u ki&#7871;m"
            , "L&#7917;a tr&#234;n n&#250;i", "N&#432;&#7899;c d&#432;&#7899;i s&#244;ng", "&#272;&#7845;t tr&#234;n th&#224;nh", "V&#224;ng ch&#226;n &#273;&#232;n", "C&#226;y d&#432;&#417;ng li&#7877;u"
            , "N&#432;&#7899;c trong gi&#7871;ng", "&#272;&#7845;t m&#225;i nh&#224;", "L&#7917;a s&#7845;m ch&#7899;p", "C&#226;y t&#249;ng b&#225;ch", "N&#432;&#7899;c gi&#7919;a d&#242;ng"
            , "V&#224;ng trong c&#225;t", "L&#7917;a ch&#226;n n&#250;i", "C&#226;y &#273;&#7845;t b&#7857;ng", "&#272;&#7845;t tr&#234;n v&#225;ch", "V&#224;ng l&#225; tr&#7855;ng", "L&#7917;a &#273;&#232;n to"
            , "N&#432;&#7899;c tr&#234;n tr&#7901;i", "&#272;&#7845;t &#273;&#7847;m l&#7847;y", "V&#224;ng trang s&#7913;c", "G&#7895; c&#226;y d&#226;u", "N&#432;&#7899;c gi&#7919;a khe l&#7899;n"
            , "&#272;&#7845;t trong c&#225;t", "L&#7917;a tr&#234;n tr&#7901;i", "G&#7895; th&#7841;ch l&#7921;u", "N&#432;&#7899;c bi&#7875;n l&#7899;n"];
var NgayBatDauChi = '1924-02-15';
var NgayBatDauCan = '1924-02-15';
var NgayBatDauNam = '1924-02-15';
var NgayHoangDao = [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0];
var IMG = new Array("ngay_ty.png","ngay_suu.png","ngay_dan.png","ngay_mao.png","ngay_thin.png","ngay_ty2.png","ngay_ngo.png","ngay_mui.png","ngay_than.png","ngay_dau.png","ngay_tuat.png","ngay_hoi.png");
function YearlyEvent(dd, mm, info) {
    this.day = dd;
    this.month = mm;
    this.info = info;
}
function showAmsangduong(ngayxem) {
    var arrNgay = ngayxem.split("-");
    var arrNgayduong = convertLunar2Solar(arrNgay[0], arrNgay[1], arrNgay[2]);
    $("#thangnamduong").html("Th&#225;ng " + arrNgayduong[1] + " n\u0103m " + arrNgayduong[2]);
    $("#thangnamam").html("Th\u00E1ng " + THANG[arrNgay[1] * 1 - 1] + " n\u0103m " + getYearCanChi(arrNgay[2]));
    $("#ngayduong").html(arrNgayduong[0]);
    $("#ngayam").html(arrNgay[0]);
    $("#thutrongtuan").html("Th? 3");
    var dayOfWeek = TUAN[(arrNgayduong[3] * 1 + 1) % 7];
    $("#thutrongtuan").html(dayOfWeek);
    var ngay = CAN[(arrNgayduong[3] * 1 + 9) % 10] + " " + CHI[(arrNgayduong[3] * 1 + 1) % 12];
    $("#canchingay").html(ngay);
    var thang = CAN[(arrNgayduong[2] * 1 * 12 + arrNgayduong[1] * 1 + 3) % 10] + " " + CHI[(arrNgayduong[1] * 1 + 1) % 12];
    $("#canchithang").html(thang);
    var menhnguhanh = TinhMenhNguHanh(arrNgayduong[2] * 1 + "-" + arrNgayduong[1] * 1 + "-" + arrNgayduong[0] * 1, "Ngay");
    $("#menhnguhanh").html(menhnguhanh[0] + " (" + menhnguhanh[1] + ")");
    $("#tietkhi").html(TIETKHI[getSolarTerm(arrNgayduong[3] * 1 + 1, 7.0)]);
    $("#giohoangdao").html(getGioHoangDao2(arrNgayduong[3], arrNgay[2] + "-" + arrNgay[1] + "-" + arrNgay[0]));
    $("#yearimage").html('<img src="amedi/images/'+getYearImage(arrNgayduong[2])+'" alt="Vinaphone" >');
}
function showDuongsangam(ngayxem) {
    var arrNgayduong = ngayxem.split("-");
    var arrNgay = convertSolar2Lunar(arrNgayduong[0], arrNgayduong[1], arrNgayduong[2]);
    
    $("#thangnamduong").html("Th&#225;ng " + arrNgayduong[1] + " n\u0103m " + arrNgayduong[2]);
    $("#thangnamam").html("Th\u00E1ng " + THANG[arrNgay[1] * 1 - 1] + " n\u0103m " + getYearCanChi(arrNgay[2]));
    $("#ngayduong").html(arrNgayduong[0]);
    $("#ngayam").html(arrNgay[0]);
    $("#thutrongtuan").html("Th? 3");
    var dayOfWeek = TUAN[(arrNgay[3] * 1 + 1) % 7];
    $("#thutrongtuan").html(dayOfWeek);
    var ngay = CAN[(arrNgay[3] * 1 + 9) % 10] + " " + CHI[(arrNgay[3] * 1 + 1) % 12];
    $("#canchingay").html(ngay);
    var thang = CAN[(arrNgayduong[2] * 1 * 12 + arrNgayduong[1] * 1 + 3) % 10] + " " + CHI[(arrNgayduong[1] * 1 + 1) % 12];
    $("#canchithang").html(thang);
    var menhnguhanh = TinhMenhNguHanh(arrNgayduong[2] * 1 + "-" + arrNgayduong[1] * 1 + "-" + arrNgayduong[0] * 1, "Ngay");
    $("#menhnguhanh").html(menhnguhanh[0] + " (" + menhnguhanh[1] + ")");
    $("#tietkhi").html(TIETKHI[getSolarTerm(arrNgay[3] * 1 + 1, 7.0)]);
    $("#giohoangdao").html(getGioHoangDao2(arrNgay[3], arrNgay[2] + "-" + arrNgay[1] + "-" + arrNgay[0]));
    $("#yearimage").html('<img src="amedi/images/'+getYearImage(arrNgayduong[2])+'" alt="Vinaphone" >');
}
var YEARLY_EVENTS = new Array(
        new YearlyEvent(1, 1, 'T\u1EBFt Nguy\u00EAn \u0110\u00E1n'),
        new YearlyEvent(15, 1, 'R\u1EB1m th\u00E1ng Gi\u00EAng'),
        new YearlyEvent(10, 3, 'Gi\u1ED7 T\u1ED5 H\u00F9ng V\u01B0\u01A1ng (10/3 \u00C2L)'),
        new YearlyEvent(15, 4, 'Ph\u1EADt \u0110\u1EA3n (15/4 \u00C2L)'),
        new YearlyEvent(5, 5, 'L\u1EC5 \u0110oan Ng\u1ECD (5/5 \u00C2L)'),
        new YearlyEvent(15, 7, 'Vu Lan (15/7 \u00C2L)'),
        new YearlyEvent(15, 8, 'T\u1EBFt Trung Thu (R\u1EB1m th\u00E1ng 8)'),
        new YearlyEvent(23, 12, '\u00D4ng T\u00E1o ch\u1EA7u tr\u1EDDi (23/12 \u00C2L)')
        );
function showT() {
    var vitrihomnay = $("#vitriHomnay").val();
    var arrVTHN = vitrihomnay.split(',');
    var jdn = arrVTHN[6] * 1 + 1;
    var duongNM = jdn2date(jdn);
    var amNM = convertSolar2Lunar(duongNM[0], duongNM[1], duongNM[2], 7.0);
    var str = "12," + amNM[0] + "," + amNM[1] + "," + amNM[2] + ",0" + ",30," + jdn + "," + duongNM[0] + "," + duongNM[1] + "," + duongNM[2];
    //alert(str);
    showDayInfo("12", amNM[0], amNM[1], amNM[2], "0", "30", jdn, duongNM[0], duongNM[1], duongNM[2]);
    $("#vitriHomnay").val(str);
}
function showS() {
    var vitrihomnay = $("#vitriHomnay").val();
    var arrVTHN = vitrihomnay.split(',');
    var jdn = arrVTHN[6] * 1 - 1;
    var duongNM = jdn2date(jdn);
    var amNM = convertSolar2Lunar(duongNM[0], duongNM[1], duongNM[2], 7.0);
    var str = "12," + amNM[0] + "," + amNM[1] + "," + amNM[2] + ",0" + ",30," + jdn + "," + duongNM[0] + "," + duongNM[1] + "," + duongNM[2];
    //alert(str);
    showDayInfo("12", amNM[0], amNM[1], amNM[2], "0", "30", jdn, duongNM[0], duongNM[1], duongNM[2]);
    $("#vitriHomnay").val(str);
}
function findEvents(dd, mm) {
    var ret = new Array();
    for (var i = 0; i < YEARLY_EVENTS.length; i++) {
        evt = YEARLY_EVENTS[i];
        if (evt.day == dd && evt.month == mm) {
            ret.push(evt);
        }
    }
    return ret;
}

function getDayInfo(dd, mm) {
    var events = findEvents(dd, mm);
    var ret = '';
    for (var i = 0; i < events.length; i++) {
        ret += events[i].info + ' ';
    }
    ret += '&nbsp;';
    return ret;
}

function showDayInfo(cellId, dd, mm, yy, leap, length, jd, sday, smonth, syear) {
    //alert(cellId+" "+ dd+" "+ mm+" "+ yy+" "+ leap+" "+ length+" "+ jd+" "+ sday+" "+ smonth+" "+syear+" ");
    //selectCell(cellId);
    //alert('Cell '+cellId+': '+dd+'/'+mm+'/'+yy+" AL = "+sday+"/"+smonth+"/"+syear);
    //document.NaviForm.dd.value = sday;
    //document.getElementById("thangduong").innerHTML = 'Tháng '+smonth+' năm '+syear;
    $("#ngayduong").html(sday);
    $("#namduong").html(syear);
    $("#thangduong").html("Th&#225;ng " + smonth);
    //document.getElementById("ngayduong").innerHTML = sday;
    var dayOfWeek = TUAN[(jd * 1 + 1) % 7];
    $("#thuduong").html(dayOfWeek);
    $("#sukien").html('<p style="font-weight: bold; font-size: 12px; color: #174f82; height:44px;" >' + getDayInfo(dd, mm) + '</p>');
    //document.getElementById("thuduong").innerHTML = dayOfWeek;
    $("#ngayam").html(dd);
    //document.getElementById("ngayam").innerHTML = dd;
    var nhuan = (leap == 1) ? ' nhu\u1EADn' : '';
    var tenthang = 'Th\u00E1ng ' + THANG[mm * 1 - 1] + nhuan;
    $("#thangam").html(tenthang);
    $("#namam").html('N\u0103m ' + getYearCanChi(yy));
    //document.getElementById("thangam").innerHTML = tenthang;
    //document.getElementById("namam").innerHTML = 'N\u0103m ' + getYearCanChi(yy);
    var thang = CAN[(yy * 1 * 12 + mm * 1 + 3) % 10] + " " + CHI[(mm * 1 + 1) % 12];
    $("#canchithang").html('Th\u00E1ng ' + thang);
    //document.getElementById("canchithang").innerHTML = 'Th\u00E1ng ' + thang;
    var ngay = CAN[(jd * 1 + 9) % 10] + " " + CHI[(jd * 1 + 1) % 12];
    $("#canchingay").html('Ng\u00E0y ' + ngay);
    //document.getElementById("canchingay").innerHTML = 'Ng\u00E0y ' + ngay;
    $("#canchigio").html('Gi\u1EDD ' + getCanHour0(jd) + ' ' + CHI[0]);
    //document.getElementById("canchigio").innerHTML = 'Gi\u1EDD ' + getCanHour0(jd) + ' ' + CHI[0];
    $("#tietkhi").html('Ti\u1EBFt ' + TIETKHI[getSolarTerm(jd * 1 + 1, 7.0)]);
    //document.getElementById("tietkhi").innerHTML = 'Ti\u1EBFt ' + TIETKHI[getSolarTerm(jd + 1, 7.0)];
    $("#dayinfo").html(getDayInfo(dd, mm));
    //document.getElementById("dayinfo").innerHTML = getDayInfo(dd, mm);
    $("#hoangdao").html(getGioHoangDao(jd, syear + "-" + smonth + "-" + sday));
    var menhnguhanh = TinhMenhNguHanh(syear + "-" + smonth + "-" + sday, "Ngay");

    $("#menhnguhanh1").html(menhnguhanh[0]);
    $("#menhnguhanh2").html("(" + menhnguhanh[1] + ")");
    var ngayhoangdao = TinhNgayHoangDao(syear + "-" + smonth + "-" + sday, mm);
    if (ngayhoangdao == 1) {
        $("#ngayhoangdao").html('Ng&#224;y ho&#224;ng &#273;&#7841;o');
    } else {
        $("#ngayhoangdao").html('Ng&#224;y h&#7855;c &#273;&#7841;o');
    }
    //document.getElementById("hoangdao").innerHTML = 'Gi\u1EDD ho\u00E0ng \u0111\u1EA1o: ' + getGioHoangDao(jd);
    //document.NaviForm.submit();
}

function selectCell(cellId) {
    for (var i = 0; i < 42; i++) {
        $("#cell" + i).removeClass("ngaythang").addClass("ngaythang");
        $("#cell" + i).removeClass("homnay").addClass("ngaythang");
        //document.getElementById("cell" + i).className = 'ngaythang';
    }
    $("#cell" + cellId).removeClass("ngaythang").addClass("homnay");

}
function getYearImage(year){
    return IMG[((year * 1 + 8) % 12)];
}
function getYearCanChi(year) {

    return CAN[(year * 1 + 6) % 10] + " " + CHI[(year * 1 + 8) % 12];
}

/*
 * Can cua gio Chinh Ty (00:00) cua ngay voi JDN nay
 */
function getCanHour0(jdn) {
    return CAN[(jdn - 1) * 2 % 10];
}
function getGioHoangDao2(jd, gioxem) {
    var chiOfDay = (jd + 1) % 12;
    var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.

    var ret = '<tr class="" >';
    var count = 1;
    for (var i = 0; i < 12; i++) {

        var cangio = TinhCanGio(gioxem, (i * 2 + 23) % 24);

        if (gioHD.charAt(i) == '1') {
            ret += '<td class="article-Cont" style="text-align: center"><p class="text-success bold"><span style="color: #000">' + cangio[0] + " " + CHI[i] + '<br/>';
            ret += ' (' + (i * 2 + 23) % 24 + 'H - ' + (i * 2 + 1) % 24 + 'H)</span></p></td>';

            if (count % 3 == 0)
                ret += '</tr><tr class="" > ';
            //if (count == 3) ret += '\n';
            count++;
        }
    }
    return ret;
}
function getGioHoangDao(jd, gioxem) {
    var chiOfDay = (jd + 1) % 12;
    var gioHD = GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.

    var ret = '<div class="licht-tam-tat-col1">';
    var count = 1;
    for (var i = 0; i < 12; i++) {

        var cangio = TinhCanGio(gioxem, (i * 2 + 23) % 24);

        if (gioHD.charAt(i) == '1') {
            ret += '<p>' + cangio[0] + " " + CHI[i] + '<br/>';
            ret += ' (' + (i * 2 + 23) % 24 + 'H - ' + (i * 2 + 1) % 24 + 'H)</p>';

            if (count % 2 == 0)
                ret += '</div><div class="licht-tam-tat-col1"> ';
            //if (count == 3) ret += '\n';
            count++;
        }
    }
    return ret;
}

var PI = Math.PI;

/* Discard the fractional part of a number, e.g., INT(3.2) = 3 */
function INT(d) {
    return Math.floor(d);
}

/* Compute the longitude of the sun at any time.
 * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
 * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
 */
function SunLongitude(jdn) {
    var T, T2, dr, M, L0, DL, lambda, theta, omega;
    T = (jdn - 2451545.0) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    T2 = T * T;
    dr = PI / 180; // degree to radian
    M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
    L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
    DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    theta = L0 + DL; // true longitude, degree
    // obtain apparent longitude by correcting for nutation and aberration
    omega = 125.04 - 1934.136 * T;
    lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
    // Convert to radians
    lambda = lambda * dr;
    lambda = lambda - PI * 2 * (INT(lambda / (PI * 2))); // Normalize to (0, 2*PI)
    return lambda;
}

/* Compute the sun segment at start (00:00) of the day with the given integral Julian day number.
 * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
 * The function returns a number between 0 and 23.
 * From the day after March equinox and the 1st major term after March equinox, 0 is returned.
 * After that, return 1, 2, 3 ...
 */
function getSolarTerm(dayNumber, timeZone) {
    return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24.0) / PI * 12);
}
