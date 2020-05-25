var fso = new ActiveXObject("Scripting.FileSystemObject");
var filename = "C:\\Users\\HTML\\HTML\\appandme\\Menimal-1\\메니멀\\write.txt";

function createFile(mbti){
    if(!fso.FileExists(filename)){
        fso.CreateTextFile(filename,true);
    }
    var f = fso.OpenTextFile(filename,8,true,-1)
    f.Write(mbti);
    f.close();    
}



