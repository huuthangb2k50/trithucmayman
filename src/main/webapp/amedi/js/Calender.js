/*var NgayBatDauChi = '1924-02-15';
var NgayBatDauCan = '1924-02-15';
var NgayBatDauNam = '1924-02-15';
var Chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ng�?", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
var Can = ["Giáp", "Ất", "Bính", "�?inh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
var KhoangGio = ["23h - 1h", "1h-3h", "3h-5h", "5h-7h", "7h-9h", "9h-11h", "11h-13h", "13h-15h", "15h-17h", "17h-19h", "19h-21h", "21h-23h"];
var MenhNguHanh = ["Hải Trung Kim", "Lư Trung H�?a", "�?ại Lâm Mộc", "Lộ Bàng Thổ", "Kiếm Phong Kim", "Sơn �?ầu H�?a", "Giản Hạ Thủy", "Thành �?ầu Thổ", "Bạch Lạp Kim", "Dương Liễu Mộc", "Tuy�?n Trung Thủy", "�?c Thượng Thổ", "Tích Lịch H�?a", "Tùng Bách Mộc", "Trư�?ng Lưu Thủy", "Sa Trung Kim", "Sơn Hạ H�?a", "Bình �?ịa Mộc", "Bích Thượng Thổ", "Kim Bạch Kim", "Phú �?ăng H�?a", "Thiên Hà Thủy", "�?ại Trạch Thổ", "Thoa Xuyến Kim", "Tang �?ồ Mộc", "�?ại Khê Thủy", "Sa Trung Thổ", "Thiên Thượng H�?a", "Thạch Lựu Mộc ", "�?ại Hải Thủy"];
var MenhNguHanh2 = ["Vàng trong biển", "Lửa trong lò", "Cây rừng lớn", "�?ất ven đư�?ng", "Vàng đầu kiếm", "Lửa trên núi", "Nước dưới sông", "�?ất trên thành", "Vàng chân đèn", "Cây dương liễu", "Nước trong giếng", "�?ất mái nhà", "Lửa sấm chớp", "Cây tùng bách", "Nước giữa dòng", "Vàng trong cát", "Lửa chân núi", "Cây đất bằng", "�?ất trên vách", "Vàng lá trắng", "Lửa đèn to", "Nước trên tr�?i", "�?ất đầm lầy", "Vàng trang sức", "Gỗ cây dâu", "Nước giữa khe lớn", "�?ất trong cát", "Lửa trên tr�?i", "Gỗ Thạch Lựu", "Nước biển lớn"];
var TietKhi = ["Lập xuân", "Vũ thủy", "Kinh trập", "Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng", "Hạ chí", "Tiểu thử", "�?ại thử", "Lập thu", "Xử thử", "Bạch lộ", "Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "�?ại tuyết", "�?ông chí", "Tiểu hàn", "�?ại hàn"];
var Truc = ["Kiến (tốt)", "Trừ (thư�?ng)", "Mãn (tốt)", "Bình (tốt)", "�?ịnh (tốt)", "Chấp (thư�?ng)", "Phá (xấu)", "Nguy (xấu)", "Thành (tốt)", "Thu (thư�?ng)", "Khai (tốt)", "Bế (xấu)"];
var TUAN = new Array("Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\341u", "Th\u1EE9 B\u1EA3y");
var THANG = new Array("Gi\u00EAng", "Hai", "Ba", "T\u01B0", "N\u0103m", "S\u00E1u", "B\u1EA3y", "T\u00E1m", "Ch\u00EDn", "M\u01B0\u1EDDi", "Mư�?i Một", "Ch\u1EA1p");
var NgayHoangDao = [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0];
var GioHoangDao = new Array(6);
var CookieName = 'SelectedDate';
var split_1 = '-'; //-- Ngăn cách giữa ngay thang
var ShowDetailUrl = '/';
var ImagePath = '/Content/web/images/';
GioHoangDao[0] = [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0];
GioHoangDao[1] = [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1];
GioHoangDao[2] = [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0];
GioHoangDao[3] = [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0];
GioHoangDao[4] = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
GioHoangDao[5] = [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1];*/

//========================================================================================
function TinhCanNgay(_NgayDuong) {
    var Index = DateDiff(NgayBatDauCan, _NgayDuong, "Ngay");
    Index = (10 + Index % 10) % 10;
    return new Array(Can[Index], Index);
}
//========================================================================================
function TinhChiNgay(_NgayDuong) {
    var Index = DateDiff(NgayBatDauChi, _NgayDuong, "Ngay");
    Index = (12 + Index % 12) % 12;
    return new Array(Chi[Index], Index);
}
//========================================================================================
function TinhCanNam(_NgayDuong) {
    var Index = DateDiff(NgayBatDauNam, _NgayDuong, "Nam");
    Index = (10 + Index % 10) % 10;
    return new Array(Can[Index], Index);
}
//========================================================================================
function TinhChiNam(_NgayDuong) {
    var Index = DateDiff(NgayBatDauNam, _NgayDuong, "Nam");
    Index = (12 + Index % 12) % 12;
    return new Array(Chi[Index], Index);
}
//========================================================================================
function TinhCanThang(_ThangAm, _NamAm) {
    Index = (12 * _NamAm + _ThangAm + 3) % 10;
    return new Array(Can[Index], Index);
}
//========================================================================================
function TinhChiThang(_ThangAm) {
    Index = (_ThangAm + 1) % 12;
    return new Array(Chi[Index], Index);
}

//========================================================================================
function TinhCanGio(_NgayDuong, _GioXem) {
    
    var ChiGio = TinhChiGio(_GioXem);
    var IndexChi = ChiGio[1];
    var Index = DateDiff(NgayBatDauCan, _NgayDuong, "Ngay");
    Index = (10 + Index % 10) % 10;// can ngay
    Index = 2 * Index % 10;// can gio ty
    if (IndexChi > 0) {
        Index = (Index + IndexChi) % 10;
    }
    return new Array(CAN[Index], Index);
}
//========================================================================================
function TinhChiGio(GioXem) {
    if (GioXem >= 23 || GioXem < 1) {
        Index = 0;
    }
    else if (GioXem >= 1 && GioXem < 3) {
        Index = 1;
    }
    else if (GioXem >= 3 && GioXem < 5) {
        Index = 2;
    }
    else if (GioXem >= 5 && GioXem < 7) {
        Index = 3;
    }
    else if (GioXem >= 7 && GioXem < 9) {
        Index = 4;
    }
    else if (GioXem >= 9 && GioXem < 11) {
        Index = 5;
    }
    else if (GioXem >= 11 && GioXem < 13) {
        Index = 6;
    }
    else if (GioXem >= 13 && GioXem < 15) {
        Index = 7;
    }
    else if (GioXem >= 15 && GioXem < 17) {
        Index = 8;
    }
    else if (GioXem >= 17 && GioXem < 19) {
        Index = 9;
    }
    else if (GioXem >= 19 && GioXem < 21) {
        Index = 10;
    }
    else if (GioXem >= 21 && GioXem < 23) {
        Index = 11;
    }

    return new Array(CHI[Index], Index);
}

//========================================================================================
function TinhNgayHoangDao(_NgayDuong, _ThangAm) {
    var Index = DateDiff(NgayBatDauChi, _NgayDuong, "Ngay");
    Index = (12 + Index % 12) % 12;
    Index = (24 + Index - (_ThangAm - 1) * 2) % 12;
    return NgayHoangDao[Index];
}
//========================================================================================
function TinhNgayHoangDao2(_NgayThangNamDuong) {
    var arrNgayThang = _NgayThangNamDuong.split(split_1);
    var _NgayDuong = parseInt(arrNgayThang[2].toString());
    var _ThangDuong = parseInt(arrNgayThang[1].toString());
    var _NamDuong = parseInt(arrNgayThang[0].toString());
    var _NgayThangNamAm = convertSolar2Lunar(_NgayDuong, _ThangDuong, _NamDuong, 7.0);
    var _ThangAm = _NgayThangNamAm[1];
    var Index = DateDiff(NgayBatDauChi, _NgayThangNamDuong, "Ngay");
    Index = (12 + Index % 12) % 12;
    Index = (24 + Index - (_ThangAm - 1) * 2) % 12;
    return NgayHoangDao[Index];
}
//========================================================================================
function TinhGioHoangDao(_NgayDuong, GioXem) {
    var _ChiNgay = TinhChiNgay(_NgayDuong);
    var IndexNgay = _ChiNgay[1];
    IndexNgay = IndexNgay % 6;
    var _ChiGio = TinhChiGio(GioXem);
    var IndexGio = _ChiGio[1];
    return GioHoangDao[IndexNgay][IndexGio];
}
//========================================================================================
function LayGioHoangDao(_NgayDuong) {
    var _DanhSachGio = '';
    var _Temp = 0;
    var _NoiDung1 = '';
    var _NoiDung2 = '';
    var _NoiDung3 = '';
    var _NoiDung4 = '';
    var _NoiDung5 = '';
    var _NoiDung6 = '';
    var _NoiDungKhac = '';
    for (var index = 0; index < 24; index += 2) {
        if (TinhGioHoangDao(_NgayDuong, index) == 1) {
            _Temp = _Temp + 1;
            if (_Temp == 1) {
                _NoiDung1 = TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
            }
            else if (_Temp == 2) {
                _NoiDung2 = TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
            }
            else if (_Temp == 3) {
                _NoiDung3 = TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
            }
            else if (_Temp == 4) {
                _NoiDung4 = TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
            }
            else if (_Temp == 5) {
                _NoiDung5 = TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
            }
            else if (_Temp == 6) {
                _NoiDung6 = TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
            }
            else {
                if (_NoiDungKhac == '') {
                    _NoiDungKhac += TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
                }
                else {
                    _NoiDungKhac += ',' + TinhCanGio(_NgayDuong, index)[0] + ' ' + TinhChiGio(index)[0] + '(' + KhoangGio[index / 2] + ')';
                }
            }
        }
    }
    _DanhSachGio = '<div class="thongtin_lichngaytot_left"><div class="thongtin_lichngaytot_noidung"><div class="thongtinleft_noidung">' + _NoiDung1 + '</div><div class="thongtinleft_noidung">' + _NoiDung2 + '</div></div></div><div class="thongtin_lichngaytot_center"><div class="thongtinleft_noidung_center">' + _NoiDung3 + '</div><div class="thongtinleft_noidung_center">' + _NoiDung4 + '</div></div><div class="thongtin_lichngaytot_right"><div class="thongtin_lichngaytot_noidung"><div class="thongtinleft_noidung_right">' + _NoiDung5 + '</div> <div class="thongtinleft_noidung_right">' + _NoiDung6 + '</div></div></div>';
    return _DanhSachGio;
}
//========================================================================================
function TinhMenhNguHanh(_NgayDuong, NamHoacNgay) {
    var Index = DateDiff(NgayBatDauChi, _NgayDuong, NamHoacNgay);
    Index = (60 + Index) % 60;
    Index = Math.floor(Index / 2);
    return new Array(MenhNguHanh[Index], MenhNguHanh2[Index], Index);
}
//========================================================================================
function TinhTietKhi(_NgayDuong) {
    var Date1 = new Date(_NgayDuong);
    var Ngay = Date1.getDate();
    var Thang = Date1.getMonth() + 1;
    var Nam = Date1.getFullYear();
    if (Thang == 2 && Ngay >= 5 && Ngay < 19) {//lap xuan
        Index = 0;
    }
    else if ((Thang == 2 && Ngay >= 19) || (Thang == 3 && Ngay < 6)) {// vu thuy
        Index = 1;
    }
    else if (Thang == 3 && Ngay >= 7 && Ngay < 21) {// kinh trap
        Index = 2;
    }
    else if ((Thang == 3 && Ngay >= 22) || (Thang == 4 && Ngay < 5)) {//xuan phan
        Index = 3;
    }
    else if (Thang == 4 && Ngay >= 6 && Ngay < 20) {// thanh minh
        Index = 4;
    }
    else if ((Thang == 4 && Ngay >= 21) || (Thang == 5 && Ngay < 6)) {//coc vu    
        Index = 5;
    }
    else if (Thang == 5 && Ngay >= 7 && Ngay < 21) {// lap ha
        Index = 6;
    }
    else if ((Thang == 5 && Ngay >= 22) || (Thang == 6 && Ngay < 5)) {// tieu man
        Index = 7;
    }
    else if (Thang == 6 && Ngay >= 7 && Ngay < 21) {//mang chung
        Index = 8;
    }
    else if ((Thang == 6 && Ngay >= 22) || (Thang == 7 && Ngay < 7)) {//Ha chi
        Index = 9;
    }
    else if (Thang == 7 && Ngay >= 8 && Ngay < 23) {// tieu thu
        Index = 10;
    }
    else if ((Thang == 7 && Ngay >= 24) || (Thang == 8 && Ngay < 8)) {// dai thu
        Index = 11;
    }
    else if (Thang == 8 && Ngay >= 9 && Ngay < 23) {// Lap thu
        Index = 12;
    }
    else if ((Thang == 8 && Ngay >= 24) || (Thang == 9 && Ngay < 8)) {// xu thu
        Index = 13;
    }
    else if (Thang == 9 && Ngay >= 9 && Ngay < 23) {// bach lo
        Index = 14;
    }
    else if ((Thang == 9 && Ngay >= 24) || (Thang == 10 && Ngay < 8)) {// thu phan
        Index = 15;
    }
    else if (Thang == 10 && Ngay >= 9 && Ngay < 23) {// Han lo
        Index = 16;
    }
    else if ((Thang == 10 && Ngay >= 24) || (Thang == 11 && Ngay < 8)) {// Suong giang
        Index = 17;
    }
    else if (Thang == 11 && Ngay >= 9 && Ngay < 22) {// Lap dong
        Index = 18;
    }
    else if ((Thang == 11 && Ngay >= 23) || (Thang == 12 && Ngay < 7)) {// Tieu tuyet
        Index = 19;
    }
    else if (Thang == 12 && Ngay >= 8 && Ngay < 22) {// dai tuyet
        Index = 20;
    }
    else if ((Thang == 12 && Ngay >= 23) || (Thang == 1 && Ngay < 6)) {// dong chi
        Index = 21;
    }
    else if (Thang == 1 && Ngay >= 7 && Ngay < 20) {// tieu han
        Index = 22;
    }
    else if ((Thang == 1 && Ngay >= 21) || (Thang == 2 && Ngay < 4)) {// dai han
        Index = 23;
    }
    else {
        var NgayJd = jdFromDate(Ngay + 1, Thang, Nam);// 0h gio ngay hom sau
        var KinhDo = getSunLongitude2(NgayJd);
        Index = Math.floor(KinhDo / 15);
        Index = (Index + 3) % 24;
    }
    return new Array(TietKhi[Index], Index);
}
//========================================================================================
function TinhTruc(_NgayDuong) {
    var TietKhiNgay = TinhTietKhi(_NgayDuong);
    var IndexTietKhi = TietKhiNgay[1];
    var _ChiNgay = TinhChiNgay(_NgayDuong);
    var IndexChi = _ChiNgay[1];
    IndexTietKhi = Math.floor(IndexTietKhi / 2);

    var Index = (12 + IndexChi - IndexTietKhi - 2) % 12;

    return new Array(Truc[Index], Index);
}
//========================================================================================
function DateDiff(StartDate, EndDate, DiffType) {
    var Date1 = new Date(StartDate);
    var Date2 = new Date(EndDate);
    var start, end;
    switch (DiffType) {
        case "Nam":
            start = Date1.getFullYear(); //year as integer from..
            end = Date2.getFullYear(); //year as integer from..
            break;
        case "Ngay":
            start = Math.floor(Date1 / (3600 * 24 * 1000)); //days as integer from..
            end = Math.floor(Date2 / (3600 * 24 * 1000)); //days as integer from..
            break;
        default:
            return undefined;
    }
    var NumberDiff = end - start;
    return NumberDiff;
}
//========================================================================================
function jdFromDate(dd, mm, yy) {

    var a, y, m, jd;
    a = Math.floor((14 - mm*1) / 12);
    y = yy*1 + 4800 - a;
    m = mm*1 + 12 * a - 3;
    jd = dd*1 + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    if (jd < 2299161) {
        jd = dd*1 + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
    }
    return jd;
}
//========================================================================================
function jdToDate(jd) {
    
    var a, b, c, d, e, m, day, month, year;
    if (jd > 2299160) { // After 5/10/1582, Gregorian calendar
        a = jd + 32044;
        b = Math.floor((4 * a + 3) / 146097);
        c = a - Math.floor((b * 146097) / 4);
    } else {
        b = 0;
        c = jd + 32082;
    }
    d = Math.floor((4 * c + 3) / 1461);
    e = c - Math.floor((1461 * d) / 4);
    m = Math.floor((5 * e + 2) / 153);
    day = e - Math.floor((153 * m + 2) / 5) + 1;
    month = m + 3 - 12 * Math.floor(m / 10);
    year = b * 100 + d - 4800 + Math.floor(m / 10);
    return new Array(day, month, year,jd);
}
//========================================================================================
function getNewMoonDay(k, timeZone) {

    var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
    T = k / 1236.85; // Time in Julian centuries from 1900 January 0.5
    T2 = T * T;
    T3 = T2 * T;
    dr = Math.PI / 180;

    Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
    Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); // Mean new moon
    M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3; // Sun's mean anomaly
    Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3; // Moon's mean anomaly
    F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; // Moon's argument of latitude
    C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
    C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
    C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
    C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
    C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
    C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
    if (T < -11) {
        deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
    } else {
        deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
    }
    ;
    JdNew = Jd1 + C1 - deltat;
    return Math.floor(JdNew + 0.5 + timeZone / 24);
}
//========================================================================================
function getSunLongitude(jdn, timeZone) {

    var T, T2, dr, M, L0, DL, L;
    T = (jdn - 2451545.5 - timeZone / 24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    T2 = T * T;
    dr = Math.PI / 180; // degree to radian
    M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
    L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
    DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    L = L0 + DL; // true longitude, degree
    L = L * dr;
    L = L - Math.PI * 2 * (Math.floor(L / (Math.PI * 2))); // Normalize to (0, 2*PI)
    return Math.floor(L / Math.PI * 6)
}
function getSunLongitude2(jdn) {
    var timeZone = 7.0;
    var T, T2, dr, M, L0, DL, L;
    T = (jdn - 2451545.5 - timeZone / 24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    T2 = T * T;
    dr = Math.PI / 180; // degree to radian
    M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
    L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
    DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
    DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
    L = L0 + DL; // true longitude, degree
    L = Math.floor(L) % 360;
    return L;
}
//========================================================================================
function getLunarMonth11(yy, timeZone) {

    var k, off, nm, sunLong;
    off = jdFromDate(31, 12, yy) - 2415021;
    k = Math.floor(off / 29.530588853);
    nm = getNewMoonDay(k, timeZone);
    sunLong = getSunLongitude(nm, timeZone); // sun longitude at local midnight
    if (sunLong >= 9) {
        nm = getNewMoonDay(k - 1, timeZone);
    }
    return nm;
}
//========================================================================================
function getLeapMonthOffset(a11, timeZone) {

    var k, last, arc, i;
    k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    last = 0;
    i = 1; // We start with the month following lunar month 11
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    do {
        last = arc;
        i++;
        arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    } while (arc != last && i < 14);
    return i - 1;
}
//========================================================================================
function convertSolar2Lunar(dd, mm, yy) {
    var timeZone = 7.0;
    var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
    var lunarMonthWithLeap = '';
    dayNumber = jdFromDate(dd, mm, yy);
    k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);
    monthStart = getNewMoonDay(k + 1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = getNewMoonDay(k, timeZone);
    }
    a11 = getLunarMonth11(yy, timeZone);
    b11 = a11;
    if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = getLunarMonth11(yy - 1, timeZone);
    } else {
        lunarYear = yy + 1;
        b11 = getLunarMonth11(yy + 1, timeZone);
    }
    lunarDay = dayNumber - monthStart + 1;
    diff = Math.floor((monthStart - a11) / 29);
    lunarLeap = 0;
    lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
        leapMonthDiff = getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff == leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear -= 1;
    }
    if (lunarLeap > 0) {
        lunarMonthWithLeap = Math.floor(lunarMonth).toString() + '(Nhuận)';
    }
    else {
        lunarMonthWithLeap = Math.floor(lunarMonth).toString();
    }
    return new Array(lunarDay, lunarMonth, lunarYear, dayNumber,lunarMonthWithLeap);
}
//========================================================================================
function convertLunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap) {
    var timeZone = 7.0;
    var k, a11, b11, off, leapOff, leapMonth, monthStart;
    if (lunarMonth*1 < 11) {
        a11 = getLunarMonth11(lunarYear*1 - 1, timeZone);
        b11 = getLunarMonth11(lunarYear*1, timeZone);
    } else {
        a11 = getLunarMonth11(lunarYear*1, timeZone);
        b11 = getLunarMonth11(lunarYear*1 + 1, timeZone);
    }
    off = lunarMonth*1 - 11;
    if (off < 0) {
        off += 12;
    }
    if (b11 - a11 > 365) {
        leapOff = getLeapMonthOffset(a11, timeZone);
        leapMonth = leapOff - 2;
        if (leapMonth < 0) {
            leapMonth += 12;
        }
        if (lunarLeap*1 != 0 && lunarMonth*1 != leapMonth) {
            return new Array(0, 0, 0);
        } else if (lunarLeap*1 != 0 || off >= leapOff) {
            off += 1;
        }
    }
    k = Math.floor(0.5 + (a11 - 2415021.076998695) / 29.530588853);
    monthStart = getNewMoonDay(k + off, timeZone);
    return jdToDate(monthStart + lunarDay*1 - 1);
}
//========== calendario add-on ==============================================================================

function CreateCalendarUC() {
//var date = new Date();
    $calendar = $('#calendar');
    cal = $calendar.calendario({
        onDayClick: function ($el, $contentEl, dateProperties) {
            DayClick($el, $contentEl, dateProperties);
        },
        caldata: null,
        displayWeekAbbr: true
    });
    $month = $('#custom-month').val(cal.getMonthName());
    $year = $('#custom-year').val(cal.getYear());
//$daymonthyear = $('#daymonthyear').val(cal.getDay() + split_1 + cal.getMonthName() + split_1 + cal.getYear());
//$daymonthyear.val(date.getFullYear() + split_1 + (date.getMonth() + 1) + split_1 + date.getDate());
    $('#custom-next').on('click', function () {
        cal.gotoNextMonth(updateMonthYear);
    });
    $('#custom-prev').on('click', function () {
        cal.gotoPreviousMonth(updateMonthYear);
    });
    $('#custom-current').on('click', function () {
        cal.gotoNow(updateMonthYear);
    });
// add
    $('#custom-month').on('change', function () {
        var NewMonth = parseInt($('#custom-month').val()) - 1;
        var NewYear = parseInt($('#custom-year').val());
        cal.goto(NewMonth, NewYear, updateMonthYear)
    });
    $('#custom-year').on('change', function () {
        var NewMonth = parseInt($('#custom-month').val()) - 1;
        var NewYear = parseInt($('#custom-year').val());
        cal.goto(NewMonth, NewYear, updateMonthYear)
    });
    /*$('#custom-year').on('keypress', function (e) {
     if (e.keyCode == 13) {
     var NewMonth = parseInt($('#custom-month').val()) - 1;
     var NewYear = parseInt($('#custom-year').val());
     cal.goto(NewMonth, NewYear, updateMonthYear)
     return false; // prevent the button click from happening
     }
     });*/
    function updateMonthYear() {
//$month.val(cal.getMonthName());
//$year.val(cal.getYear());
        /*var currDate = new Date();
         var SelectedDate = (cal.getDay() == null || cal.getDay() == '' ? currDate.getDate() : cal.getDay()) + split_1
         + (cal.getMonthName() == null || cal.getMonthName() == '' ? currDate.getMonth() + 1 : cal.getMonthName()) + split_1
         + cal.getYear();
         $daymonthyear.val(SelectedDate);*/
        $month = $('#custom-month').val(cal.getMonthName());
        $year = $('#custom-year').val(cal.getYear());
        ShowDayDetail();
    }


    function DayClick($el, $contentEl, dateProperties) {
        var currDate = new Date();
        /*var SelectedDate = (GetFullString(dateProperties.day) == '' ? currDate.getDate() : GetFullString(dateProperties.day)) + split_1
         + (GetFullString(dateProperties.month) == '' ? (currDate.getMonth() + 1) : GetFullString(dateProperties.month)) + split_1 
         + dateProperties.year.toString();*/
        var yyyymmdd = dateProperties.year.toString() + split_1 + GetFullString(dateProperties.month) + split_1 + GetFullString(dateProperties.day);
//$daymonthyear.val(SelectedDate);
        $.cookie(CookieName, yyyymmdd, {expires: 7, path: '/'});
        var CurentUrl = '' + window.location;
        if (CurentUrl.indexOf(ShowDetailUrl) < 0) {
            window.location = ShowDetailUrl;
        }
        else {
            $(".fc-selectedday").removeClass("fc-selectedday");
            $el.addClass("fc-selectedday");
            ShowDayDetail(); // 
        }

    }
//cal.gotoNow(updateMonthYear);
}
//========================================================================================
function CreateCalendarFull() {
    var cal = $('#calendar').calendario({
        onDayClick: function ($el, $contentEl, dateProperties) {
            var SelectedDate = dateProperties.year.toString() + split_1 + GetFullString(dateProperties.month) + split_1 + GetFullString(dateProperties.day);
            $.cookie(CookieName, SelectedDate, {expires: 7, path: '/'});
            var CurentUrl = '' + window.location;
            if (CurentUrl.indexOf(ShowDetailUrl) < 0) {
                window.location = ShowDetailUrl;
            }
            else {
                $(".fc-selectedday").removeClass("fc-selectedday");
                $el.addClass("fc-selectedday");
            }

        },
        caldata: null
    }),
            $month = $('#custom-month').val(cal.getMonthName()),
            $year = $('#custom-year').val(cal.getYear());

    $('#custom-next').on('click', function () {
        cal.gotoNextMonth(updateMonthYear);
    });
    $('#custom-prev').on('click', function () {
        cal.gotoPreviousMonth(updateMonthYear);
    });
    $('#custom-current').on('click', function () {
        cal.gotoNow(updateMonthYear);
    });

// add
    $('#custom-month').on('change', function () {
        var NewMonth = parseInt($('#custom-month').val()) - 1;
        var NewYear = parseInt($('#custom-year').val());
        cal.goto(NewMonth, NewYear, updateMonthYear)
    });
    $('#custom-year').on('change', function () {
        var NewMonth = parseInt($('#custom-month').val()) - 1;
        var NewYear = parseInt($('#custom-year').val());
        cal.goto(NewMonth, NewYear, updateMonthYear)
    });
    $('#custom-year').on('keypress', function (e) {
        if (e.keyCode == 13) {
            var NewMonth = parseInt($('#custom-month').val()) - 1;
            var NewYear = parseInt($('#custom-year').val());
            cal.goto(NewMonth, NewYear, updateMonthYear)
            return false; // prevent the button click from happening
        }
    });
    function updateMonthYear() {
        $month.val(cal.getMonthName());
        $year.val(cal.getYear());
        ShowDayDetail();
    }


}
function GetSelectedDate() {
    var SelectedDate = $.cookie(CookieName);
    var ListDate;
    if (!SelectedDate) {
        var DateNow = new Date();
        SelectedDate = DateNow.getFullYear().toString() + split_1 + DateNow.getMonth().toString() + split_1 + DateNow.getDate().toString();
        ListDate = SelectedDate.split(split_1);
    }
    else {
        ListDate = SelectedDate.split(split_1);
    }
    return new Array(ListDate[2], ListDate[1], ListDate[0], SelectedDate);
}
//========================================================================================
function ShowDayDetail() {
//===============client =========================================================================
    var GioHienTai = new Date();
    var NgayDaChon = GetSelectedDate();
    var NgayThangNamDuong = NgayDaChon[3];
    var NgayDuong = parseInt(NgayDaChon[0]);
    var ThangDuong = parseInt(NgayDaChon[1]);
    var NamDuong = parseInt(NgayDaChon[2]);
    var NgayThangNamAm = convertSolar2Lunar(NgayDuong, ThangDuong, NamDuong, 7.0);
    var NgayAm = parseInt(NgayThangNamAm[0]);
    var ThangAm = parseInt(NgayThangNamAm[1]);
    var NamAm = parseInt(NgayThangNamAm[2]);
    var CanGio = TinhCanGio(NgayThangNamDuong, GioHienTai.getHours());
    var ChiGio = TinhChiGio(GioHienTai.getHours());
    var CanNgay = TinhCanNgay(NgayThangNamDuong);
    var ChiNgay = TinhChiNgay(NgayThangNamDuong);
    var CanThang = TinhCanThang(ThangAm, NamAm);
    var ChiThang = TinhChiThang(ThangAm);
    var CanNam = TinhCanNam(NgayThangNamDuong);
    var ChiNam = TinhChiNam(NgayThangNamDuong);
    var NgayHoangDao = TinhNgayHoangDao(NgayThangNamDuong, ThangAm);
    var DanhSachGioHoangDao = LayGioHoangDao(NgayThangNamDuong);
    var MenhNgay = TinhMenhNguHanh(NgayThangNamDuong, "Ngay");
    var MenhNam = TinhMenhNguHanh(NgayThangNamDuong, "Nam");
    var TietKhi = TinhTietKhi(NgayThangNamDuong);
    var Truc = TinhTruc(NgayThangNamDuong);
    var HoangDao = '';
    var HuongXuatHanh = '';
    var TuoiXungKhac = '';
    if (NgayHoangDao == 1) {
        HoangDao = '<div class="ngayhoangdao">Ngày hoàng đạo <img src="' + ImagePath + 'hoangdao.png"></img></div>';
    }
    else {
        HoangDao = '<div class="ngayhacdao">Ngày hắc đạo <img src="' + ImagePath + 'ngay-hac-dao.png"></img></div>';
    }
//===============bind data ==============================================
    $("#thangnamduong").html("Tháng " + GetFullString(ThangDuong) + " Năm " + GetFullString(NamDuong));
    $("#ngayduong").html(GetFullString(NgayDuong));
    $("#ThuTuan").html(GetTuan(NgayDuong, ThangDuong, NamDuong));
    $("#thangam").html(GetThang(ThangAm));
    $("#ngayam").html(GetFullString(NgayAm));
    $("#battu").html("<div class='thongtinleft_noidung'><strong>Năm " + CanNam[0] + ' ' + ChiNam[0] + "</strong></div>" + "<div class='thongtinleft_noidung'>Tháng " + CanThang[0] + ' ' + ChiThang[0] + "</div>" + "<div class='thongtinleft_noidung'>Ngày " + CanNgay[0] + ' ' + ChiNgay[0] + "</div>" + "<div class='thongtinleft_noidung' id='clock'></div><div class='thongtinleft_noidung'>Gi�? " + CanGio[0] + ' ' + ChiGio[0] + "</div>");
    $("#hoangdao").html(HoangDao);
    $("#giohoangdao").html(DanhSachGioHoangDao);
    $("#menhngay").html("<b>Mệnh ngày:</b><br />" + MenhNgay[0] + '<br />(' + MenhNgay[1] + ')');
    $("#menhnam").html(MenhNam[0] + '(' + MenhNam[1] + ')');
    $("#tietkhi").html("<b>Tiết khí:</b><br />" + TietKhi[0]);
    $("#truc").html(Truc[0]);
    AddlAnhNen(NgayDuong, ThangDuong, NamDuong);
//AddAnhConGiap(NgayThangNamDuong);
    AddAnhConGiapTheoNgay(ChiNgay[0]);
//===============json =========================================================================
    var NhiThapBatTu = '';
    var NgayNayNamXuaTrongNuoc = '';
    var NgayNayNamXuaQuocTe = '';
    var SaoTot = '';
    var SaoXau = '';
    var JsonUrl = '';
    var Holiday = '';
    JsonUrl = BuldJsonUrl(GetFullString(NgayDuong) + GetFullString(ThangDuong) + GetFullString(NamDuong));
    $.getJSON(JsonUrl, {
        format: "json"
    })
            .done(function (data) {
                $("#huongxuathanh").html(data.HuongXuatHanh);
                $("#tuoixungkhac").html(data.TuoiXungKhac);
                $("#DanhNgon").html(data.DanhNgon);
// bind Nhi thap bat tu
                $.each(data.mListNhiThapBatTusView, function (i, item) {
                    NhiThapBatTu += item.Contents;
                });
                $("#nhithapbattu").html(NhiThapBatTu);

                $.each(data.mListHolidays, function (i, item) {
                    Holiday += item.HolidayDesc + '<br />';
                });
                $("#Holiday").html(Holiday);

// bind sao ngay
                $.each(data.mListSaosView, function (i, item) {
                    if (item.SaoTypeId == 1) {
                        SaoTot += '' + item.SaoName + ': ' + item.SaoDesc + '<br />';
                    }
                    else {
                        SaoXau += '' + item.SaoName + ': ' + item.SaoDesc + '<br />';
                    }
                });
                $("#saotot").html(SaoTot);
                $("#saoxau").html(SaoXau);
                $.each(data.mListNgayNayNamXuasView, function (i, item) {// bind Ngay nay nam xua
                    if (item.EventTypeDesc == 'Sự kiện trong nước') {
                        NgayNayNamXuaTrongNuoc += '<div class="tieudechiet_day"><div class="tieudechiet_day12">'
                                + item.EventTime
                                + '</div><div class="tieudechiet_day13">'
                                + item.EventContent
                                + '</div></div>';
                    }
                    else if (item.EventTypeDesc == 'Sự kiện Quốc tế') {
                        NgayNayNamXuaQuocTe += '<div class="tieudechiet_day"><div class="tieudechiet_day12">'
                                + item.EventTime
                                + '</div><div class="tieudechiet_day13">'
                                + item.EventContent
                                + '</div></div>';
                    }
                });
                $("#NgayNayNamXuaTrongNuoc").html(NgayNayNamXuaTrongNuoc);
                $("#NgayNayNamXuaQuocTe").html(NgayNayNamXuaQuocTe);
            });
}
//========================================================================================
function BuldJsonUrl(strDate) {
    var saparator = ',';
    var Url = '/CalendarService.svc/DayDetailView_Get/';
    var BPId = '1';
    var APId = '1';
    var AppId = 1;
    var PlaId = 1;
    var Key = $("input[id *='hdfJsonAppKey']").val();
    var Ver = '1_0';
    Url += strDate + saparator + BPId;
    Url += saparator + APId;
    Url += saparator + AppId;
    Url += saparator + PlaId;
    Url += saparator + Key;
    Url += saparator + Ver;
    return Url;
}
//========================================================================================
function GetFullString(Number) {
    var strNumbber = Number < 10 ? '0' + Number.toString() : Number.toString();
    return strNumbber;
}
//========================================================================================
function GetTuan(ngay, thang, nam) {
    var jd = jdFromDate(ngay, thang, nam);
    return TUAN[(jd + 1) % 7];
}
//========================================================================================
function GetThang(Number) {
    Number = Number - 1;
    return "Tháng " + THANG[Number];
}
//========================================================================================
function AddlAnhNen(ngay, thang, nam) {
    try
    {
        var imageURL = ImagePath + "anh-nen/nen" + String(GetRandomNumber()) + ".png";
        $("#bg_lichngaytot").css("background-image", "url('" + imageURL + "')");
    }
    catch (err) {
        alert(err);
    }
}
//========================================================================================
function AddAnhConGiap(_NgayDuong) {
    var _Chi = ["Ti", "Suu", "Dan", "Mao", "Thin", "Ty", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    var Index = DateDiff(NgayBatDauNam, _NgayDuong, "Nam");
    Index = (12 + Index % 12) % 12;
    var _ChiNam = Array(_Chi[Index], Index);
    var imageURL = ImagePath + "con-giap/" + _ChiNam[0] + ".png";
    $("#thongtin_lichngaytot").css("background-image", "url('" + imageURL + "')");
}
//========================================================================================
function AddAnhConGiapTheoNgay(_ChiNgay) {
    var _Chi = ["Ti", "Suu", "Dan", "Mao", "Thin", "Ty", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"];
    if (_ChiNgay == "Tí")
        _ChiNgay = "Ty";
    else if (_ChiNgay == "Sửu")
        _ChiNgay = "Suu";
    else if (_ChiNgay == "Dần")
        _ChiNgay = "Dan";
    else if (_ChiNgay == "Mão")
        _ChiNgay = "Mao";
    else if (_ChiNgay == "Thìn")
        _ChiNgay = "Thin";
    else if (_ChiNgay == "Tỵ")
        _ChiNgay = "Ti";
    else if (_ChiNgay == "Tý")
        _ChiNgay = "Ty";
    else if (_ChiNgay == "Ng�?")
        _ChiNgay = "Ngo";
    else if (_ChiNgay == "Mùi")
        _ChiNgay = "Mui";
    else if (_ChiNgay == "Thân")
        _ChiNgay = "Than";
    else if (_ChiNgay == "Dậu")
        _ChiNgay = "Dau";
    else if (_ChiNgay == "Hợi")
        _ChiNgay = "Hoi";
    else
        _ChiNgay = "Tuat";
    var imageURL = ImagePath + "con-giap/" + _ChiNgay + ".png";
    $("#thongtin_lichngaytot").css("background-image", "url('" + imageURL + "')");
}
//========================================================================================
function GetRandomNumber() {
    var number = Math.floor((Math.random() * 10) + 1);
    if (number > 6) {
        if (number == 10)
            number = 1;
        else
            number = 10 - number;
    }
    return number;
}
//========================================================================================
$(document).ready(function () {

});
/**
 
 */

