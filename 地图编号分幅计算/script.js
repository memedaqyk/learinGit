/**
 * Created by 29062 on 2016/5/31.
 */
var c, d;
var H, latitude,longitude ,L ;
var la_change_A = 4;
var long_change_A = 6;
var long_change_B = 3;
var la_change_B = 2;
var long_change_C = 1.5;
var la_change_C = 1;
var long_change_D = 0.5;
var la_change_D = 1/3;
var long_change_E = 0.25;
var la_change_E = 1/6;
var long_change_F = 0.125;
var la_change_F = 1/12;
var long_change_G = 0.0625;
var la_change_G = 1/24;
var count_1;
var number;
function calculate(){
    var long_degree = document.getElementsByTagName("input")[0].value;

    var long_min = document.getElementsByTagName("input")[1].value;
    var long_sec = document.getElementsByTagName("input")[2].value;
    var la_degree = document.getElementsByTagName("input")[3].value;
    var la_min = document.getElementsByTagName("input")[4].value;
    var la_sec = document.getElementsByTagName("input")[5].value;
    // alert(lag_degree);
    // alert(lag_min/60);
    if(long_degree.length != 0 && la_degree.length != 0)
    {
        latitude = Number(la_degree) + Number(la_min/60) + Number(la_sec/3600);
        // alert(latitude);
        longitude = Number(long_degree) + Number(long_min/60) + Number(long_sec/3600);
        H = Math.floor(latitude/la_change_A) + 1;
        L = Math.floor(longitude/long_change_A) + 31;
        var H2 = String.fromCharCode(H + 64);
        var value_A = document.getElementsByTagName("input")[6];//1:100万
        var value_B = document.getElementsByTagName("input")[7];//1:50万
        var value_C = document.getElementsByTagName("input")[8];//1:25万
        var value_D = document.getElementsByTagName("input")[9];//1:10万
        var value_E = document.getElementsByTagName("input")[10];//1:5万
        var value_F = document.getElementsByTagName("input")[11];//1:2.5万
        var value_G = document.getElementsByTagName("input")[12];//1:1万
        var value_1 = H2 + "-" + Number(L);
        value_A.setAttribute("value",value_1);
        // alert(value_A);
        var W_B = 3 -  Math.floor((latitude%la_change_A)/la_change_B)*2 +Math.floor((longitude%long_change_A)/long_change_B);
        // alert(W_B);
        var W2 = String.fromCharCode(W_B + 64);
        var value_2 = H2 + "-" + Number(L) + "-" + W2;
        value_B.setAttribute("value", value_2);

        var W_C = 13 - Math.floor((latitude%la_change_A)/la_change_C)*4 + Math.floor((longitude%long_change_A)/long_change_C);
        // alert(longitude%long_change_B);
        var value_3 = H2 + "-" + Number(L) + "-[" + Number(W_C)+"]" ;
        value_C.setAttribute("value", value_3);

        var W_D = 133 - Math.floor((latitude%la_change_A)/(la_change_D))*12 + Math.floor((longitude%long_change_A)/(long_change_D));
        //alert(Math.floor((longitude%long_change_A)/(long_change_D)));
        var value_4 = H2 + "-" + Number(L) + "-" + Number(W_D);
        value_D.setAttribute("value", value_4);

        var W_E = 3 - Math.floor((latitude%la_change_D)/(la_change_E))*2 + Math.floor((longitude%long_change_D)/(long_change_E));
        //alert(Math.floor((longitude%long_change_A)/(long_change_D)));
        var W_5 = String.fromCharCode(W_E + 64);
        var value_5 = H2 + "-" + Number(L) + "-" + Number(W_D) + "-" + W_5;
        value_E.setAttribute("value", value_5);

        var W_F = 3 - Math.floor((latitude%la_change_E)/(la_change_F))*2 + Math.floor((longitude%long_change_E)/(long_change_F));
        //alert(Math.floor((longitude%long_change_A)/(long_change_D)));
        // var W_6 = String.fromCharCode(W_E + 64);
        var value_6 = H2 + "-" + Number(L) + "-" + Number(W_D) + "-" + W_5 + "-" + Number(W_F);
        value_F.setAttribute("value", value_6);

        var W_G = 57 - Math.floor((latitude%la_change_D)/(la_change_G))*8 + Math.floor((longitude%long_change_D)/(long_change_G));
        //alert(Math.floor((longitude%long_change_A)/(long_change_D)));
        var value_7 = H2 + "-" + Number(L) + "-" + Number(W_D) + "-(" + W_G + ")";
        value_G.setAttribute("value", value_7);

        var value_A_new = document.getElementsByTagName("input")[13];//1:100万
        var value_B_new = document.getElementsByTagName("input")[14];//1:50万
        var value_C_new = document.getElementsByTagName("input")[15];//1:25万
        var value_D_new = document.getElementsByTagName("input")[16];//1:10万
        var value_E_new = document.getElementsByTagName("input")[17];//1:5万
        var value_F_new = document.getElementsByTagName("input")[18];//1:2.5万
        var value_G_new = document.getElementsByTagName("input")[19];//1:1万

        var c_1 = 4/la_change_A - Math.floor((latitude%4)/la_change_A);
        var d_1 = Math.floor((longitude%6)/long_change_A) + 1;
        judge(c_1,d_1);
        var value_1_new = H2 + Number(L) + "A" + c + d;
        value_A_new.setAttribute("value", value_1_new);

        var c_2 = 4/la_change_B - Math.floor((latitude%4)/la_change_B);
        var d_2 = Math.floor((longitude%6)/long_change_B) + 1;
        judge(c_2,d_2);
        var value_2_new = H2 + Number(L) + "B" + c + d;
        value_B_new.setAttribute("value", value_2_new);

        var c_3= 4/la_change_C - Math.floor((latitude%4)/la_change_C);
        var d_3 = Math.floor((longitude%6)/long_change_C) + 1;
        judge(c_3, d_3);
        var value_3_new = H2 + Number(L) + "C" + c + d;
        value_C_new.setAttribute("value", value_3_new);

        var c_4 = 4/la_change_D - Math.floor((latitude%4)/la_change_D);
        var d_4 = Math.floor((longitude%6)/long_change_D) + 1;
        judge(c_4, d_4);
        var value_4_new = H2 + Number(L) + "D" + c + d;
        value_D_new.setAttribute("value", value_4_new);

        var c_5 = 4/la_change_E - Math.floor((latitude%4)/la_change_E);
        var d_5 = Math.floor((longitude%6)/long_change_E) + 1;
        judge(c_5,d_5);
        var value_5_new = H2 + Number(L) + "E" + c + d;
        value_E_new.setAttribute("value", value_5_new);

        var c_6 = 4/la_change_F - Math.floor((latitude%4)/la_change_F);
        var d_6 = Math.floor((longitude%6)/long_change_F) + 1;
        judge(c_6, d_6);
        var value_6_new = H2 + Number(L) + "F" + c + d;
        value_F_new.setAttribute("value", value_6_new);

        var c_7 = 4/la_change_G - Math.floor((latitude%4)/la_change_G);
        var d_7 = Math.floor((longitude%6)/long_change_G) + 1;
        judge(c_7, d_7);
        var value_7_new = H2 + Number(L) + "G" + c + d;
        value_G_new.setAttribute("value", value_7_new);
    }

}

function judge(c_i,d_i){
    if(c_i < 10)
    {
        c_i = "00" + c_i;
    } else if(c_i < 100)
    {
        c_i = "0" + c_i;
    }else
    {
        c_i = "c_i";
    }

    if(d_i < 10)
    {
        d_i = "00" + d_i;
    } else if(d_i < 100)
    {
        d_i = "0" + d_i;
    }else
    {
        d_i = "d_i";
    }
    c = c_i;
    d = d_i;
}
function calculate_2() {
    //旧地图
    var value_a = document.getElementsByTagName("input")[20].value;
    var value_b = document.getElementsByTagName("input")[21].value;
    var value_c = document.getElementsByTagName("input")[22].value;
    var value_d = document.getElementsByTagName("input")[23].value;
    var value_e = document.getElementsByTagName("input")[24].value;
    value_a = value_a.charCodeAt(0) - 64;
    var long_a = (value_b - 31) * 6;
    // alert(long_a);
    var long_a_1 = long_a + 6;
    var la_a = (value_a - 1) * 4;
    var la_a_1 = la_a + 4;

    var value_f = document.getElementsByTagName("input")[25].value;
    var value_i = document.getElementsByTagName("input")[26].value;
    var value_j = document.getElementsByTagName("input")[27].value;
    var value_k = document.getElementsByTagName("input")[28].value;
    var value_l = document.getElementsByTagName("input")[29].value;
    if(value_b.length != 0){
        var value_1 = document.getElementsByTagName("input")[30].value = long_a + "°";
        var value_2 = document.getElementsByTagName("input")[31].value = long_a_1 + "°";
        var value_3 = document.getElementsByTagName("input")[32].value = la_a + "°";
        var value_4 = document.getElementsByTagName("input")[33].value = la_a_1 + "°";
    }

    //1:50万
    if ((value_c == "A" || value_c == "B" || value_c == "C" || value_c == "D") && value_c.length != 0) {
        var W = value_c.charCodeAt(0) - 64;
        var long_b = long_a + ((W - 1) % 2) * long_change_B;
        var long_b_1 = long_b + long_change_B;
        var la_b = la_a + Math.floor((4 - W) / 2) * la_change_B;
        var la_b_1 = la_b + la_change_B;
        var value_5 = document.getElementsByTagName("input")[34].value = long_b + "°";
        var value_6 = document.getElementsByTagName("input")[35].value = long_b_1 + "°";
        var value_7 = document.getElementsByTagName("input")[36].value = la_b + "°";
        var value_8 = document.getElementsByTagName("input")[37].value = la_b_1 + "°";
    } else if ((value_c == "[1]" ||value_c == "[2]"||value_c == "[3]" ||value_c == "[4]" ||value_c == "[5]" ||value_c== "[6]"||value_c == "[7]"||value_c == "[8]"||value_c == "[9]"||value_c == "[10]"||value_c == "[11]"||value_c == "[12]"||value_c == "[13]"||value_c == "[14]"||value_c == "[15]"||value_c == "[16]") && value_c.length != 0) {
        //1:25万
        var value_c_1 = value_c.replace(/[^0-9]/ig,"");
        //alert(value_c_1);
        var W_1 = value_c_1;
        var long_c = long_a + ((W_1 - 1) % 4) * long_change_C;
        var long_c_int = parseInt(long_c);
        var long_c_point = long_c - long_c_int;
        var long_c_min = Math.round(long_c_point * 60);

        var long_c_1 = long_c + long_change_C;
        //alert(long_c_1);
        var long_c_1_int = parseInt(long_c_1);
        var long_c_1_point = long_c_1 - long_c_1_int;
        var long_c_1_min = Math.round(long_c_1_point * 60);

        var la_c = la_a + Math.floor((16 - W_1) / 4) * la_change_C;
        var la_c_1 = la_c + la_change_C;
        var value_9 = document.getElementsByTagName("input")[38].value = long_c_int + "°" +long_c_min + "'";
        var value_10 = document.getElementsByTagName("input")[39].value = long_c_1_int + "°" + long_c_1_min + "'";
        var value_11 = document.getElementsByTagName("input")[40].value = la_c + "°";
        var value_12 = document.getElementsByTagName("input")[41].value = la_c_1 + "°";
    } else if(value_c.length != 0){
        //1:10万
        //alert(2);
        var W_3 = value_c;
        var long_d = long_a + ((W_3 - 1) % 12) * long_change_D;
        var long_d_int = parseInt(long_d);
        //alert(long_d);
        var long_d_point = long_d - long_d_int;
        var long_d_min = Math.round(long_d_point * 60);

        var long_d_1 = long_d + long_change_D;
        var long_d_1_int = parseInt(long_d_1);
        var long_d_1_point = long_d_1 - long_d_1_int;
        var long_d_1_min = Math.round(long_d_1_point) * 60;
        //alert(long_d_1_min);

        var la_d = la_a + Math.floor((144 - W_3 )/ 12 ) * la_change_D;
        var la_d_int = parseInt(la_d);
        var la_d_point = la_d - la_d_int;
        var la_d_min = Math.round(la_d_point * 60);

        var la_d_1 = la_d + la_change_D;
        var la_d_1_int = parseInt(la_d_1);
        var la_d_1_point = la_d_1 - la_d_1_int;
        var la_d_1_min = Math.round(la_d_1_point * 60);

        var value_13 = document.getElementsByTagName("input")[42].value = long_d_int + "°" + long_d_min + "'";
        var value_14 = document.getElementsByTagName("input")[43].value = long_d_1_int + "°" +long_d_1_min + "'";
        var value_15 = document.getElementsByTagName("input")[44].value = la_d_int + "°" + la_d_min + "'";
        var value_16 = document.getElementsByTagName("input")[45].value = la_d_1_int + "°" + la_d_1_min + "'";
    }
    //1:5万
    if ((value_d == "A" || value_d == "B" || value_d == "C" || value_d == "D") && value_d.length != 0) {
       // alert(2);
        var W_2 = value_d.charCodeAt(0) - 64;
        var long_e = long_d + ((W_2 - 1) % 2) * long_change_E;
        var long_e_int = parseInt(long_e);
        var long_e_point = long_e - long_e_int;
        var long_e_min = Math.round(long_e_point * 60);

        var long_e_1 = long_e + long_change_E;
        var long_e_1_int = parseInt(long_e_1);
        var long_e_1_point = long_e_1 - long_e_1_int;
        var long_e_1_min = Math.round(long_e_1_point * 60);

        var la_e = la_d + Math.floor((4 - W_2) / 2) * la_change_E;
        var la_e_int = parseInt(la_e);
        var la_e_point = la_e - la_e_int;
        var la_e_min = Math.round(la_e_point * 60);

        var la_e_1 = la_e + la_change_E;
        var la_e_1_int = parseInt(la_e_1);
        var la_e_1_point = la_e_1 - la_e_1_int;
        var la_e_1_min = Math.round(la_e_1_point * 60);
        if(la_e_1_min == 60 ){
            la_e_1_min = 0;
            la_e_1_int += 1;
        }

        var value_17 = document.getElementsByTagName("input")[46].value = long_e_int + "°" + long_e_min + "'";
        var value_18 = document.getElementsByTagName("input")[47].value = long_e_1_int + "°" + long_e_1_min + "'";
        var value_19 = document.getElementsByTagName("input")[48].value = la_e_int + "°" + la_e_min + "'";
        var value_20 = document.getElementsByTagName("input")[49].value = la_e_1_int + "°" + la_e_1_min + "'";
    }else if(judge_2() && (value_d.length != 0)){
        //1:1万
        var value_g_1 = value_d.replace(/[^0-9]/ig,"");
        //alert(value_g_1);
        var W_4 = value_g_1;
        var long_g = long_d + ((W_4 - 1) % 8) * long_change_G;
        var long_g_int = parseInt(long_g);
        var long_g_point = long_g - long_g_int;
        var long_g_min = Math.floor(long_g_point * 60);
        var long_g_min_point = long_g_point*60 - parseInt(long_g_min);
        var long_g_sec = Math.round(long_g_min_point*60);

        var long_g_1 = long_g + long_change_G;
        var long_g_1_int = parseInt(long_g_1);
        var long_g_1_point = long_g_1 - long_g_1_int;
        var long_g_1_min = Math.floor(long_g_1_point * 60);
        var long_g_1_min_point = long_g_1_point*60 - parseInt(long_g_1_min);
        var long_g_1_sec = Math.round(long_g_1_min_point*60);

        var la_g = la_d + Math.floor((64 - W_4) / 8) * la_change_G;
        var la_g_int = parseInt(la_g);
        var la_g_point = la_g - la_g_int;
        var la_g_min = Math.floor(la_g_point * 60);
        var la_g_min_point = la_g_point*60 - parseInt(la_g_min);
        var la_g_sec = Math.round(la_g_min_point*60);

        var la_g_1 = la_g + la_change_G;
        var la_g_1_int = parseInt(la_g_1);
        var la_g_1_point = la_g_1 - la_g_1_int;
        var la_g_1_min = Math.floor(la_g_1_point * 60);
        var la_g_1_min_point = la_g_1_point*60 - parseInt(la_g_1_min);
        var la_g_1_sec = Math.round(la_g_1_min_point*60);
        if(la_g_1_sec == 60){
            la_g_1_sec = 0;
            la_g_1_min += 1;
        }

        var value_21 = document.getElementsByTagName("input")[54].value = long_g_int + "°" + parseInt(long_g_min) + "'" + long_g_sec + "''";
        var value_22 = document.getElementsByTagName("input")[55].value = long_g_1_int + "°" + parseInt(long_g_1_min) + "'" + long_g_1_sec + "''";
        var value_23 = document.getElementsByTagName("input")[56].value = la_g_int + "°" + parseInt(la_g_min) + "'" + la_g_sec + "''";
        var value_24 = document.getElementsByTagName("input")[57].value = la_g_1_int + "°" + parseInt(la_g_1_min) + "'" + la_g_1_sec + "''";
        //alert(judge_2());
    }
    //1:2.5万
    if((value_d == "A" || value_d == "B" || value_d == "C" || value_d == "D") && value_e.length != 0){
        var W_5 = value_e;
        var long_f = long_e + ((W_5 - 1) % 2) * long_change_F;
        var long_f_int = parseInt(long_f);
        var long_f_point = long_f - long_f_int;
        var long_f_min = Math.floor(long_f_point * 60);
        var long_f_min_point = long_f_point*60 - parseInt(long_f_min);
        var long_f_sec = Math.round(long_f_min_point*60);
        //alert(long_f_point);

        var long_f_1 = long_f + long_change_F;
        var long_f_1_int = parseInt(long_f_1);
        var long_f_1_point = long_f_1 - long_f_1_int;
        var long_f_1_min = Math.floor(long_f_1_point * 60);
        var long_f_1_min_point = long_f_1_point*60 - parseInt(long_f_1_min);
        var long_f_1_sec = Math.round(long_f_1_min_point*60);

        var la_f = la_e + Math.floor((4 - W_5 )/ 2 ) * la_change_F;
        var la_f_int = parseInt(la_f);
        var la_f_point = la_f - la_f_int;
        var la_f_min = Math.round(la_f_point * 60);

        var la_f_1 = la_f + la_change_F;
        var la_f_1_int = parseInt(la_f_1);
        var la_f_1_point = la_f_1 - la_f_1_int;
        var la_f_1_min = Math.round(la_f_1_point * 60);

        var value_25 = document.getElementsByTagName("input")[50].value = long_f_int + "°" + parseInt(long_f_min) + "'" + long_f_sec + "''";
        var value_26 = document.getElementsByTagName("input")[51].value = long_f_1_int + "°" + parseInt(long_f_1_min) + "'" + long_f_1_sec + "''";
        var value_27 = document.getElementsByTagName("input")[52].value = la_f_int + "°" + la_f_min + "'";
        var value_28 = document.getElementsByTagName("input")[53].value = la_f_1_int + "°" +la_f_1_min + "'";
   }
    var a_1 = value_f.charCodeAt(0) - 64;
    var b_1 = value_i;
    var c_1 = value_k.replace(/[^0-9]/ig,"");
    var d_1 = value_l.replace(/[^0-9]/ig,"");
    var long_new_a =(b_1 - 31)*6 + (d_1 - 1)*long_change_A;
    var long_new_a_1 = long_new_a + long_change_A;
    var la_new_a = (a_1 -1)*4 + (4/la_change_A - c_1)*la_change_A;
    var la_new_a_1 = la_new_a + la_change_A;
    //1:100万
    if(value_j == "A"){
        var value_29 = document.getElementsByTagName("input")[58].value = long_new_a + "°" ;
        var value_30 = document.getElementsByTagName("input")[59].value = long_new_a_1 + "°" ;
        var value_31 = document.getElementsByTagName("input")[60].value = la_new_a + "°" ;
        var value_32 = document.getElementsByTagName("input")[61].value = la_new_a_1 + "°" ;
    }

    var c_2 = value_k.replace(/[^0-9]/ig,"");
    var d_2 = value_l.replace(/[^0-9]/ig,"");
    var long_new_b = (b_1 - 31)*6 + (d_2 - 1)*long_change_B;
    var long_new_b_1 = long_new_b + long_change_B;
    var la_new_b = (a_1 -1)*4 + (4/la_change_B - c_2)*la_change_B;
    var la_new_b_1 = la_new_b + la_change_B;
    //1:50万
    if(value_j == "B"){
        var value_33 = document.getElementsByTagName("input")[62].value = long_new_b + "°" ;
        var value_34 = document.getElementsByTagName("input")[63].value = long_new_b_1 + "°" ;
        var value_35 = document.getElementsByTagName("input")[64].value = la_new_b + "°" ;
        var value_36 = document.getElementsByTagName("input")[65].value = la_new_b_1 + "°" ;
    }

    var c_3 = value_k.replace(/[^0-9]/ig,"");
    var d_3 = value_l.replace(/[^0-9]/ig,"");
    var long_new_c = (b_1 - 31)*6 + (d_3 - 1)*long_change_C;
    var long_new_c_int = parseInt(long_new_c);
    var long_new_c_point = long_new_c - long_new_c_int;
    var long_new_c_min = Math.round(long_new_c_point * 60);

    var long_new_c_1 = long_new_c + long_change_C;
    var long_new_c_1_int = parseInt(long_new_c_1);
    var long_new_c_1_point = long_new_c_1 - long_new_c_1_int;
    var long_new_c_1_min = Math.round(long_new_c_1_point * 60);

    var la_new_c = (a_1 -1)*4 + (4/la_change_C - c_3)*la_change_C;
    var la_new_c_1 = la_new_c + la_change_C;
    //1:25万
    if(value_j == "C"){
        var value_37 = document.getElementsByTagName("input")[66].value = long_new_c_int + "°"+ long_new_c_min + "'" ;
        var value_38 = document.getElementsByTagName("input")[67].value = long_new_c_1_int + "°" +long_new_c_1_min + "'" ;
        var value_39 = document.getElementsByTagName("input")[68].value = la_new_c + "°" ;
        var value_40 = document.getElementsByTagName("input")[69].value = la_new_c_1 + "°" ;
    }

    var c_4 = value_k.replace(/[^0-9]/ig,"");
    var d_4 = value_l.replace(/[^0-9]/ig,"");
    var long_new_d = (b_1 - 31)*6 + (d_4 - 1)*long_change_D;
    var long_new_d_int = parseInt(long_new_d);
    var long_new_d_point = long_new_d - long_new_d_int;
    var long_new_d_min = Math.round(long_new_d_point * 60);

    var long_new_d_1 = long_new_d + long_change_D;
    var long_new_d_1_int = parseInt(long_new_d_1);
    var long_new_d_1_point = long_new_d_1 - long_new_d_1_int;
    var long_new_d_1_min = Math.round(long_new_d_1_point * 60);

    var la_new_d = (a_1 -1)*4 + (4/la_change_D - c_4)*la_change_D;
   // alert(la_new_d);
    var la_new_d_int = parseInt(la_new_d);
    var la_new_d_point = la_new_d - la_new_d_int;
    var la_new_d_min = Math.round(la_new_d_point * 60);

    var la_new_d_1 = la_new_d + la_change_D;
    var la_new_d_1_int = parseInt(la_new_d_1);
    var la_new_d_1_point = la_new_d_1 - la_new_d_1_int;
    var la_new_d_1_min = Math.round(la_new_d_1_point * 60);
    //1:10万
    if(value_j == "D"){
        var value_41 = document.getElementsByTagName("input")[70].value = long_new_d_int + "°" + long_new_d_min + "'" ;
        var value_42 = document.getElementsByTagName("input")[71].value = long_new_d_1_int + "°" + long_new_d_1_min + "'" ;
        var value_43 = document.getElementsByTagName("input")[72].value = la_new_d_int + "°" + la_new_d_min + "'";
        var value_44 = document.getElementsByTagName("input")[73].value = la_new_d_1_int + "°" + la_new_d_1_min + "'"  ;
    }

    var c_5 = value_k.replace(/[^0-9]/ig,"");
    var d_5 = value_l.replace(/[^0-9]/ig,"");
    var long_new_e = (b_1 - 31)*6 + (d_5 - 1)*long_change_E;
    var long_new_e_int = parseInt(long_new_e);
    var long_new_e_point = long_new_e - long_new_e_int;
    var long_new_e_min = Math.round(long_new_e_point * 60);

    var long_new_e_1 = long_new_e + long_change_E;
    var long_new_e_1_int = parseInt(long_new_e_1);
    var long_new_e_1_point = long_new_e_1 - long_new_e_1_int;
    var long_new_e_1_min = Math.round(long_new_e_1_point * 60);

    var la_new_e = (a_1 -1)*4 + (4/la_change_E - c_5)*la_change_E;
    var la_new_e_int = parseInt(la_new_e);
    var la_new_e_point = la_new_e - la_new_e_int;
    var la_new_e_min = Math.round(la_new_e_point * 60);

    var la_new_e_1 = la_new_e + la_change_E;
    var la_new_e_1_int = parseInt(la_new_e_1);
    var la_new_e_1_point = la_new_e_1 - la_new_e_1_int;
    var la_new_e_1_min = Math.round(la_new_e_1_point * 60);
    //1:5万
    if(value_j == "E"){
        var value_45 = document.getElementsByTagName("input")[74].value = long_new_e_int + "°" + long_new_e_min + "'" ;
        var value_46 = document.getElementsByTagName("input")[75].value = long_new_e_1_int + "°" + long_new_e_1_min + "'" ;
        var value_47 = document.getElementsByTagName("input")[76].value = la_new_e_int + "°" + la_new_e_min + "'";
        var value_48 = document.getElementsByTagName("input")[77].value = la_new_e_1_int + "°" + la_new_e_1_min + "'"  ;
    }

    var c_6 = value_k.replace(/[^0-9]/ig,"");
    var d_6 = value_l.replace(/[^0-9]/ig,"");
    var long_new_f = (b_1 - 31)*6 + (d_6 - 1)*long_change_F;
    var long_new_f_int = parseInt(long_new_f);
    var long_new_f_point = long_new_f - long_new_f_int;
    var long_new_f_min = Math.floor(long_new_f_point * 60);
    var long_new_f_min_point = long_new_f_point*60 - parseInt(long_new_f_min);
    var long_new_f_sec = Math.round(long_new_f_min_point*60);

    var long_new_f_1 = long_new_f + long_change_F;
    var long_new_f_1_int = parseInt(long_new_f_1);
    var long_new_f_1_point = long_new_f_1 - long_new_f_1_int;
    var long_new_f_1_min = Math.floor(long_new_f_1_point * 60);
    //alert(long_new_f_1_min);
    var long_new_f_1_min_point = long_new_f_1_point*60 - parseInt(long_new_f_1_min);
    var long_new_f_1_sec = Math.round(long_new_f_1_min_point*60);

    var la_new_f = (a_1 -1)*4 + (4/la_change_F - c_6)*la_change_F;
    var la_new_f_int = parseInt(la_new_f);
    var la_new_f_point = la_new_f - la_new_f_int;
    var la_new_f_min = Math.round(la_new_f_point * 60);

    var la_new_f_1 = la_new_f + la_change_F;
    var la_new_f_1_int = parseInt(la_new_f_1);
    var la_new_f_1_point = la_new_f_1 - la_new_f_1_int;
    var la_new_f_1_min = Math.round(la_new_f_1_point * 60);
    //1:2.5万
    if(value_j == "F"){
        var value_49 = document.getElementsByTagName("input")[78].value = long_new_f_int + "°" + parseInt(long_new_f_min) + "'" + long_new_f_sec + "''" ;
        var value_50 = document.getElementsByTagName("input")[79].value = long_new_f_1_int + "°" + parseInt(long_new_f_1_min) + "'" + long_new_f_1_sec + "''";
        var value_51 = document.getElementsByTagName("input")[80].value = la_new_f_int + "°" + la_new_f_min + "'";
        var value_52 = document.getElementsByTagName("input")[81].value = la_new_f_1_int + "°" + la_new_f_1_min + "'"  ;
    }

    var c_7 = value_k.replace(/[^0-9]/ig,"");
    var d_7 = value_l.replace(/[^0-9]/ig,"");
    var long_new_g = (b_1 - 31)*6 + (d_7 - 1)*long_change_G;
    var long_new_g_int = parseInt(long_new_g);
    var long_new_g_point = long_new_g - long_new_g_int;
    var long_new_g_min = Math.floor(long_new_g_point * 60);
    var long_new_g_min_point = long_new_g_point*60 - parseInt(long_new_g_min);
    var long_new_g_sec = Math.round(long_new_g_min_point*60);

    var long_new_g_1 = long_new_g + long_change_G;
    var long_new_g_1_int = parseInt(long_new_g_1);
    var long_new_g_1_point = long_new_g_1 - long_new_g_1_int;
    //alert(long_new_g_1_min)
    var long_new_g_1_min = Math.floor(long_new_g_1_point * 60);
  // alert(long_new_g_1_min);
    var long_new_g_1_min_point = long_new_g_1_point*60 - parseInt(long_new_g_1_min);
    var long_new_g_1_sec = Math.round(long_new_g_1_min_point*60);

    var la_new_g = (a_1 -1)*4 + (4/la_change_G - c_7)*la_change_G;
    var la_new_g_int = parseInt(la_new_g);
    var la_new_g_point = la_new_g - la_new_g_int;
    var la_new_g_min = Math.floor(la_new_g_point * 60);
    if(la_new_g_min == 60){
        la_new_g_min = 0;
        la_new_g += 1;
    }
    var la_new_g_min_point = la_new_g_point*60 - parseInt(la_new_g_min);
    var la_new_g_sec = Math.round(la_new_g_min_point*60);
    if(la_new_g_sec == 60){
        la_new_g_sec = 0;
        la_new_g_min += 1;
    }

    var la_new_g_1 = la_new_g + la_change_G;
    var la_new_g_1_int = parseInt(la_new_g_1);
    var la_new_g_1_point = la_new_g_1 - la_new_g_1_int;
    var la_new_g_1_min = Math.floor(la_new_g_1_point * 60);
    if(la_new_g_1_min == 60){
        la_new_g_1_min = 0;
        la_new_g_1 += 1;
    }
    var la_new_g_1_min_point = la_new_g_1_point*60 - parseInt(la_new_g_1_min);
    var la_new_g_1_sec = Math.round(la_new_g_1_min_point*60);
    if(la_new_g_1_sec == 60){
        la_new_g_1_sec = 0;
        la_new_g_1_min += 1;
    }
    //1:1万
    if(value_j == "G"){
        var value_53 = document.getElementsByTagName("input")[82].value = long_new_g_int + "°" + parseInt(long_new_g_min) + "'" + long_new_g_sec + "''" ;
        var value_54 = document.getElementsByTagName("input")[83].value = long_new_g_1_int + "°" + parseInt(long_new_g_1_min) + "'" + long_new_g_1_sec + "''";
        var value_55 = document.getElementsByTagName("input")[84].value = la_new_g_int + "°"  + parseInt(la_new_g_min) + "'" + la_new_g_sec + "''" ;;
        var value_56 = document.getElementsByTagName("input")[85].value = la_new_g_1_int + "°" + parseInt(la_new_g_1_min) + "'" + la_new_g_1_sec + "''";
    }
}
function judge_2(){
    var value_d = document.getElementsByTagName("input")[23].value;
    for(var i = 1; i <= 64; i++){
        var letter ="(i)";
        var letter_1 = letter.replace(/i/, i.toString());
        while(value_d == letter_1){
            return i;
        }
}
}


