function w2jconvert(){
    const year = parseInt(document.getElementById('yearInput').value);
            let era = "";
            let JY = 0;

            if (year >= 2019) {
                era = "令和";
                JY = year - 2018;
            } else if (year >= 1989) {
                era = "平成";
                JY = year - 1988;
            } else if (year >= 1926) {
                era = "昭和";
                JY = year - 1925;
            } else if (year >= 1912) {
                era = "大正";
                JY = year - 1911;
            } else if (year >= 1868) {
                era = "明治";
                JY = year - 1867;
            } else {
                document.getElementById('result').innerText = "1868年以前の西暦には対応していません。";
                return;
            }

            const wareki = (JY === 1) ? `${era}元年` : `${era}${JY}年`;
            document.getElementById('result').innerText = `${wareki} `;
}

function j2wconvert(){
    const era = document.getElementById("eraInput").value;
    const year = parseInt(document.getElementById("jpyearIn").value);
    let WY = 0;

    if (era == "M"){
        WY = year - 33 + 1900;
    } else if(era == "T"){
        WY = year + 11 + 1900;
    } else if(era == "S"){
        WY = year + 25 + 1900;
    }else if(era == "H"){
        WY = year - 12 + 2000;
    }else if(era == "R"){
        WY = year + 18 + 2000;
    }

    document.getElementById("wresult").innerText = WY + "年";
}