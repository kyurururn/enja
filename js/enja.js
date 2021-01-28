document.getElementById("input_txt").value = "print Hello!Enja!"

sample_count = 0;

//サンプルリスト
function sample(){
  var sample_list ={
  0:"print Hello!Enja!\n//Hello!Enja!と出力",
  1:"a = 5\nb = Hello\nc = [1,2,3]\nd = [[1,2,3],[4,5,6]]\ne = true\n\nprint a\nPRINT b\nPrInt c\nｐｒｉｎｔ c[2]\nｐrｉnｔ d\nｐrIＮｔ d[1][2]\nプリント e",
  2:"和歌山の人口 = 963579\n和歌山の面積 = 4725\nプリント 人口密度は + 和歌山の人口 / 和歌山の面積",
  3:"a = 3\nif a = 5\n  print aは5です\nelif a = 3\n  print aは3です\nelse\n  print aは5でも3でもありません\n\nもし a = 5\n  print aは5です\n違えばもし a = 3\n  print aは3です\n違えば\n  print aは5でも3でもありません\n",
  4:"a = 0\nwhile a < 10\n  a++\n  print a\n\n繰り返し a<20\n  a++\n  print a",
  5:"count = 0\nloop 5\n  count++\n  print count\n\nループ 5\n  count++\n  print count",
  6:"print round(1.5)\n\nprint ceil(1.5)\n\nprint floor(1.5)\n\nprint random(1,10)\n\nprint abs(-2)\n\nprint pi",
  7:"print 四捨五入(1.5)\n\nprint 切り上げ(1.5)\n\nprint 切り捨て(1.5)\n\nprint ランダム(1,10)\n\nprint 絶対値(-2)\n\nprint 円周率",
  8:"a = [1,2,3,4,5]\nprint a\n\na.pop\na.shift\nprint a\n\na.unshift(1)\na.push(5)\nprint a\n\na[3] *= 10\nprint a\nprint a.length",
  9:"a = [1,2,3,4,5]\nprint a\n\na.ポップ\na.シフト\nprint a\n\na.アンシフト(1)\na.プッシュ(5)\nprint a\n\na[3] *= 10\nprint a\n\ncount = 0\nloop a.length\n  count++\n  print a[count]",
  10:"def plus(a,b)\n  return a+b\n\nprint plus(1,10)\n",
  11:"関数 check(a)\n  if a%2 = 0\n    戻り値 true\n  else\n    戻り値 false\n\nif(check(1))\n print 偶数です\nelse\n print 奇数です",
  12:"toWA サンダルをもう買っている\n\n和歌山弁 体が温かい\n\nprint toWA(サンダルを) + もう買っている"
  }
  document.getElementById("input_txt").value = sample_list[sample_count % 13];
  sample_count++
}





variable_value = {};
def_value = {};
start_time = 0;
out = "";

const flatten =
a => a.reduce(
    (acc, e) => Array.isArray( e ) ? [...acc, ...flatten( e )]
                                   : [...acc, e ]
    ,[]
  )

function dimen_1(a){
  var result = [];
  for(var i = 0; i < a.length; i++){
    result.push(a[i]);
  }
  return result;
}



var transdata=[//"surface_form"→標準語 "wakayamaSurface_form"→和歌山弁。surface_formの文字列を発見したら、和歌山弁に変換。
//その他"pos"で品詞を指定可能。mae---とか、ato---というやつは、前の語やあとの語を見て、その変換を行うか決定する。
    {"surface_form":"サンダル","wakayamaSurface_form":"せった"},
    {"surface_form":"サンダル","wakayamaSurface_form":"水せった","maeSurface_form":"ビーチ","note":"delete 3"},
    {"surface_form":"ある","wakayamaSurface_form":"ちゃーる","maeSurface_form":"て","note":"delete 1","maePos":"助詞"},
    {"surface_form":"ない","wakayamaSurface_form":"ん","pos":"助動詞","maePos":"動詞"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","maeSurface_form":"来"},
   
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","maeSurface_form":"こ"},
    //{"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","maeSurface_form":"し"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","maeSurface_form":"着"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","maeSurface_form":"き"},
    //{"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"イ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"キ"},
    //{"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"シ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"チ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"ニ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"ヒ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"ミ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"リ"},
    
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"エ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"ケ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"セ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"テ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"ネ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"ヘ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"メ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","reading":"レ"},
    {"surface_form":"ない","wakayamaSurface_form":"やん","pos":"助動詞","maeSurface_form":"でき"},

    {"surface_form":"面白い","wakayamaSurface_form":"おもしゃい"},
    {"surface_form":"おもしろい","wakayamaSurface_form":"おもしゃい"},
    {"surface_form":"面白く","wakayamaSurface_form":"おもしゃく"},
    {"surface_form":"おもしろく","wakayamaSurface_form":"おもしゃく"},
    {"surface_form":"で","wakayamaSurface_form":"といて","maeSurface_form":"ない"},
    {"surface_form":"今日","wakayamaSurface_form":"きょうわ"},
    {"surface_form":"だ","wakayamaSurface_form":"や","pos":"助動詞","maePos":"名詞"},
    //{"surface_form":"だ","wakayamaSurface_form":"や","pos":"助動詞"},
    {"surface_form":"よ","wakayamaSurface_form":"で","pos":"助動詞"},
    {"surface_form":"だけど","wakayamaSurface_form":"やけど"},
    {"surface_form":"明日","wakayamaSurface_form":"あいた"},
    {"surface_form":"明るい","wakayamaSurface_form":"あかい"},
    {"surface_form":"明るく","wakayamaSurface_form":"あかく"},
    {"surface_form":"あかるい","wakayamaSurface_form":"あかい"},
    {"surface_form":"あかるく","wakayamaSurface_form":"あかく"},

    {"surface_form":"よ","wakayamaSurface_form":"で","pos":"助詞","maePos":"動詞"},

    {"surface_form":"歪む","wakayamaSurface_form":"いがむ"},//終止形,連体形
    {"surface_form":"歪ま","wakayamaSurface_form":"いがま"},//未然形
    {"surface_form":"歪ん","wakayamaSurface_form":"いがん"},//連用形
    {"surface_form":"歪も","wakayamaSurface_form":"いがも"},//未然形
    {"surface_form":"歪め","wakayamaSurface_form":"いがめ"},//命令形
    {"surface_form":"歪める","wakayamaSurface_form":"いがめる"},

    {"surface_form":"ゆがむ","wakayamaSurface_form":"いがむ"},//終止形,連体形
    {"surface_form":"ゆがま","wakayamaSurface_form":"いがま"},//未然形
    {"surface_form":"ゆがん","wakayamaSurface_form":"いがん"},//連用形
    {"surface_form":"ゆがも","wakayamaSurface_form":"いがも"},//未然形
    {"surface_form":"ゆがめ","wakayamaSurface_form":"いがめ"},//命令形       
    {"surface_form":"ゆがめる","wakayamaSurface_form":"いがめる"},        

    {"surface_form":"なぞる","wakayamaSurface_form":"えぞる"},
    {"surface_form":"なぞら","wakayamaSurface_form":"えぞら"},
    {"surface_form":"なぞっ","wakayamaSurface_form":"えぞっ"},
    {"surface_form":"なぞろ","wakayamaSurface_form":"えぞろ"},
    {"surface_form":"なぞれ","wakayamaSurface_form":"えぞれ"},
    {"surface_form":"なぞれる","wakayamaSurface_form":"えぞれる"},

    {"surface_form":"体","wakayamaSurface_form":"かだら"},
    {"surface_form":"からだ","wakayamaSurface_form":"かだら"},
    {"surface_form":"昨日","wakayamaSurface_form":"きんの"},
    {"surface_form":"きのう","wakayamaSurface_form":"きんの"},
    {"surface_form":"ものさし","wakayamaSurface_form":"さし"},
    {"surface_form":"7月","wakayamaSurface_form":"なながつ"},
    {"surface_form":"七月","wakayamaSurface_form":"なながつ"},
    {"surface_form":"しちがつ","wakayamaSurface_form":"なながつ"},
    
    {"surface_form":"温かい","wakayamaSurface_form":"ぬくい"},
    {"surface_form":"温かく","wakayamaSurface_form":"ぬくく"},
    {"surface_form":"です","wakayamaSurface_form":"や"},
    {"surface_form":"です","maePos":"形容詞","wakayamaSurface_form":"わ"},
    {"surface_form":"だっ","wakayamaSurface_form":"やっ"},

    {"surface_form":"とても","wakayamaSurface_form":"むっちゃ"},
    {"surface_form":"でしょ","wakayamaSurface_form":"やろ"},
    {"surface_form":"の","wakayamaSurface_form":"ん","pos":"名詞","maePos":"動詞"},
    {"surface_form":"の","wakayamaSurface_form":"の","pos":"名詞","last_sentence":"ん"},
    {"surface_form":"ぬ","pos":"助動詞","wakayamaSurface_form":"ん"},
    {"surface_form":"いる","wakayamaSurface_form":"おる"},
    {"surface_form":"いる","wakayamaSurface_form":"ちゃーる","maeSurface_form":"て","note":"delete 1","maePos":"助詞"},
    {"surface_form":"ある","maeSurface_form":"で","maePos":"助動詞","wakayamaSurface_form":"や","note":"delete 1"},
    {"surface_form":"あっ","maeSurface_form":"で","maePos":"助動詞","wakayamaSurface_form":"やっ","note":"delete 1"},
    {"surface_form":"あろ","maeSurface_form":"で","maePos":"助動詞","wakayamaSurface_form":"やろ","note":"delete 1"},
    //{"surface_form":"あっ","maeSurface_form":"で","maePos":"助動詞","wakayamaSurface_form":"やっ","note":"delete 1"},
    //{"surface_form":"そう","wakayamaSurface_form":"みたい"},
    {"surface_form":"てる","wakayamaSurface_form":"ちゃーる","pos":"動詞"},
    //{"surface_form":"た","pos":"助動詞","wakayamaSurface_form":"とった"}
    
    {"surface_form":"い","wakayamaSurface_form":"お","pos":"動詞","conjugated_form":"未然形"},
    {"surface_form":"い","wakayamaSurface_form":"おら","pos":"動詞","conjugated_form":"未然形","atoSurface_form":"ない"},
    {"surface_form":"い","wakayamaSurface_form":"おり","pos":"動詞","conjugated_form":"連用形","atoPos":"動詞"},
    {"surface_form":"い","wakayamaSurface_form":"おっ","pos":"動詞","conjugated_form":"連用形","atoPos":"助詞"},
    
    //{"surface_form":"い","wakayamaSurface_form":"お","pos":"動詞","conjugated_form":"未然形"},
    //{"surface_form":"いる","wakayamaSurface_form":"おる"}
    
    {"surface_form":"もの","wakayamaSurface_form":"ん","maePos":"動詞"},
   
    {"surface_form":"する","wakayamaSurface_form":"やる","conjugated_form":"基本形"},
    {"surface_form":"し","wakayamaSurface_form":"やら","conjugated_form":"未然形"},
    {"surface_form":"し","wakayamaSurface_form":"やっ","conjugated_form":"連用形","atoPos":"助動詞"},
    {"surface_form":"し","wakayamaSurface_form":"やって","conjugated_form":"連用形","atoSurface_form":"、"},//ok
    {"surface_form":"しろ","wakayamaSurface_form":"やれ","conjugated_form":"命令形"},
    

    {"surface_form":"する","wakayamaSurface_form":"する","conjugated_form":"基本形","maePos":"名詞"},
    {"surface_form":"し","wakayamaSurface_form":"し","conjugated_form":"連用形","maePos":"名詞"},
    {"surface_form":"し","wakayamaSurface_form":"し","conjugated_form":"連用形","maePos":"名詞","atoPos":"動詞"},
    {"surface_form":"し","wakayamaSurface_form":"し","conjugated_form":"連用形","maePos":"名詞","atoSurface_form":"、"},
    {"surface_form":"し","wakayamaSurface_form":"し","conjugated_form":"未然形","maePos":"名詞"},
    {"surface_form":"しろ","wakayamaSurface_form":"しろ","conjugated_form":"命令形","maePos":"名詞"},

    {"surface_form":"し","wakayamaSurface_form":"せ","atoSurface_form":"ない","atoPos":"助動詞"},
    //{"surface_form":"a","wakayamaSurface_form":"b","atoPos":"名詞"}, 
    {"surface_form":"沢山","wakayamaSurface_form":"ようさん"},
    {"surface_form":"たくさん","wakayamaSurface_form":"ようさん"},
    {"surface_form":"良い","wakayamaSurface_form":"ええ"},
    {"surface_form":"終わり","wakayamaSurface_form":"しまい","pos":"名詞"},
    {"surface_form":"トゲ","wakayamaSurface_form":"しゃくっば"},
    {"surface_form":"面子","wakayamaSurface_form":"しゃっけん"},
    {"surface_form":"里芋","wakayamaSurface_form":"ずいきいも"},
    {"surface_form":"サトイモ","wakayamaSurface_form":"ずいきいも"},
    {"surface_form":"すいません","wakayamaSurface_form":"すまんよー"},
    {"surface_form":"それ","wakayamaSurface_form":"そえ"},
    {"surface_form":"突然","wakayamaSurface_form":"そんなり"},
    {"surface_form":"頭","wakayamaSurface_form":"すこ"},
    {"surface_form":"服装","wakayamaSurface_form":"なり"},
    {"surface_form":"蒲焼","wakayamaSurface_form":"なんばやき"},
    {"surface_form":"近く","wakayamaSurface_form":"はた"},
    {"surface_form":"ちかく","wakayamaSurface_form":"はた"},
    {"surface_form":"傍","wakayamaSurface_form":"はた"},
    {"surface_form":"そば","wakayamaSurface_form":"はた"},
    {"surface_form":"一昨日","wakayamaSurface_form":"おとつい"},
    {"surface_form":"おととい","wakayamaSurface_form":"おとつい"},
    {"surface_form":"お前","wakayamaSurface_form":"おまい"},
    {"surface_form":"おまえ","wakayamaSurface_form":"おまい"},
    {"surface_form":"同じ","wakayamaSurface_form":"おんなじ"},
    {"surface_form":"カワハギ","wakayamaSurface_form":"はげ"},
    {"surface_form":"牛乳","wakayamaSurface_form":"にゅうにゅう"},
    {"surface_form":"姉ちゃん","wakayamaSurface_form":"ねーやん"},
    {"surface_form":"寝室","wakayamaSurface_form":"ねや"},
    {"surface_form":"頭","wakayamaSurface_form":"のうてん"},
    {"surface_form":"かぼちゃ","wakayamaSurface_form":"なんきん"},
    {"surface_form":"ただ","wakayamaSurface_form":"かあ"},
    {"surface_form":"つい","wakayamaSurface_form":"かあ"},
    {"surface_form":"かゆい","wakayamaSurface_form":"かい"},
    {"surface_form":"痒い","wakayamaSurface_form":"かい"},
    {"surface_form":"炎天下","wakayamaSurface_form":"かんかんでり"},
    {"surface_form":"ラーメン","wakayamaSurface_form":"きいそば"},
    {"surface_form":"初耳","wakayamaSurface_form":"ききはじめ"},
    {"surface_form":"大丈夫","wakayamaSurface_form":"きつかいない"},
    {"surface_form":"壊れる","wakayamaSurface_form":"くだく"},
    {"surface_form":"ありがとう","wakayamaSurface_form":"おおきに"},
    {"surface_form":"和歌山駅","wakayamaSurface_form":"わえき"},
    {"surface_form":"夕立ち","wakayamaSurface_form":"よだって"},
    {"surface_form":"夕立","wakayamaSurface_form":"よだって"},
    {"surface_form":"太刀魚","wakayamaSurface_form":"たっちょ"},
    {"surface_form":"まぐろ","wakayamaSurface_form":"よこわ"},
    {"surface_form":"マグロ","wakayamaSurface_form":"よこわ"},
    {"surface_form":"鮪","wakayamaSurface_form":"よこわ"},
    {"surface_form":"たくさん","wakayamaSurface_form":"ようさん"},
    {"surface_form":"引っ越し","wakayamaSurface_form":"やどがえ"},
    {"surface_form":"ひっこし","wakayamaSurface_form":"やどがえ"},
    {"surface_form":"あれ","wakayamaSurface_form":"あい"},
    {"surface_form":"鮎","wakayamaSurface_form":"あい"},
    {"surface_form":"あゆ","wakayamaSurface_form":"あい"},
    {"surface_form":"アイゴ","wakayamaSurface_form":"あい"},
    {"surface_form":"残念","wakayamaSurface_form":"あいそない"},
    {"surface_form":"ざんねん","wakayamaSurface_form":"あいそない"},
    {"surface_form":"明日","wakayamaSurface_form":"あいた"},
    {"surface_form":"秋田","wakayamaSurface_form":"あいた"},
    {"surface_form":"あした","wakayamaSurface_form":"あいた"},
    {"surface_form":"彼奴","wakayamaSurface_form":"あいら"},
    {"surface_form":"あれ","wakayamaSurface_form":"あえ"},
    {"surface_form":"アオリイカ","wakayamaSurface_form":"あおいか"},
    {"surface_form":"自分","wakayamaSurface_form":"あが"},
    {"surface_form":"あんな","wakayamaSurface_form":"あがな"},
    {"surface_form":"だめ","wakayamaSurface_form":"あかん"},
    {"surface_form":"駄目","wakayamaSurface_form":"あかん"},
    {"surface_form":"ダメ","wakayamaSurface_form":"あかん"},
    {"surface_form":"さつま揚げ","wakayamaSurface_form":"あげ"},
    {"surface_form":"台所","wakayamaSurface_form":"たなもと"},
    {"surface_form":"夕立","wakayamaSurface_form":"だぶり"},
    {"surface_form":"牛乳","wakayamaSurface_form":"ちち"},
    {"surface_form":"目脂","wakayamaSurface_form":"めめくそ"},
    {"surface_form":"麦粒腫","wakayamaSurface_form":"めばちこ"},
    {"surface_form":"メッサオークワ","wakayamaSurface_form":"めっさ"},
    {"surface_form":"松ぼっくり","wakayamaSurface_form":"ちっちろ"},
    {"surface_form":"眉毛","wakayamaSurface_form":"まひげ"},
    {"surface_form":"友達","wakayamaSurface_form":"つれ"},
    {"surface_form":"呪い","wakayamaSurface_form":"またい"},
    {"surface_form":"のろい","wakayamaSurface_form":"またい"},
    {"surface_form":"五目飯","wakayamaSurface_form":"まぜごはん"},
    {"surface_form":"自転車","wakayamaSurface_form":"てこ"},
    {"surface_form":"つむじ","wakayamaSurface_form":"まいまい"},
    {"surface_form":"サトウキビ","wakayamaSurface_form":"とーきび"},
    {"surface_form":"豆腐","wakayamaSurface_form":"とふ"},
    {"surface_form":"蕁麻疹","wakayamaSurface_form":"ほろし"},
    {"surface_form":"じんましん","wakayamaSurface_form":"ほろし"},
    {"surface_form":"雑巾","wakayamaSurface_form":"どっきん"},
    {"surface_form":"不器用","wakayamaSurface_form":"どぐさい"},
    {"surface_form":"ゴキブリ","wakayamaSurface_form":"へいはち"},
    {"surface_form":"とうもろこし","wakayamaSurface_form":"ふくろきび"},
    {"surface_form":"揉み上げ","wakayamaSurface_form":"びん"},
    {"surface_form":"マイワシ","wakayamaSurface_form":"ひらご"},
    {"surface_form":"蛾","wakayamaSurface_form":"ひゅうろ"},
    {"surface_form":"天秤","wakayamaSurface_form":"びし"},
    {"surface_form":"水族館","wakayamaSurface_form":"すいどっかん"},
    {"surface_form":"ゴキブリ","wakayamaSurface_form":"あま"},
    {"surface_form":"甘えん坊","wakayamaSurface_form":"あまえたれ"},
    {"surface_form":"飴","wakayamaSurface_form":"あめちゃん"},
    {"surface_form":"アメ","wakayamaSurface_form":"あめちゃん"},
    {"surface_form":"加減","wakayamaSurface_form":"あんばい"},
    {"surface_form":"かげん","wakayamaSurface_form":"あんばい"},
    {"surface_form":"兄ちゃん","wakayamaSurface_form":"あんにゃん"},
    {"surface_form":"まあまあ","wakayamaSurface_form":"いくらも"},
    {"surface_form":"全く","wakayamaSurface_form":"いっこも"},
    {"surface_form":"まったく","wakayamaSurface_form":"いっこも"},
    {"surface_form":"ぜんぜん","wakayamaSurface_form":"いっこも"},
    {"surface_form":"全然","wakayamaSurface_form":"いっこも"},
    {"surface_form":"家","wakayamaSurface_form":"うち"},
    {"surface_form":"とても","wakayamaSurface_form":"えらい"},
    {"surface_form":"大層","wakayamaSurface_form":"えらい"},
    {"surface_form":"台所","wakayamaSurface_form":"ながし"},
    {"surface_form":"蝮","wakayamaSurface_form":"はび"},
    {"surface_form":"マムシ","wakayamaSurface_form":"はい"},
    {"surface_form":"まむし","wakayamaSurface_form":"はび"},
    {"surface_form":"黒鯛","wakayamaSurface_form":"ばばたれ"},
    {"surface_form":"クロダイ","wakayamaSurface_form":"ばばたれ"},
    {"surface_form":"ティッシュ","wakayamaSurface_form":"はなかみ"},
    {"surface_form":"お手玉","wakayamaSurface_form":"ななこ"},
    {"surface_form":"祝日","wakayamaSurface_form":"さいじつ"},
    {"surface_form":"さんま","wakayamaSurface_form":"さいら"},
    {"surface_form":"サンマ","wakayamaSurface_form":"さいら"},
    {"surface_form":"秋刀魚","wakayamaSurface_form":"さいら"},
    {"surface_form":"とげ","wakayamaSurface_form":"さかばり"},
    {"surface_form":"定規","wakayamaSurface_form":"さし"},
    {"surface_form":"アドベンチャーワールド","wakayamaSurface_form":"サファリ"},
    {"surface_form":"新品","wakayamaSurface_form":"さら"},
    {"surface_form":"祖父","wakayamaSurface_form":"じじ"},
    {"surface_form":"祖母","wakayamaSurface_form":"ばば"},
    {"surface_form":"おもり","wakayamaSurface_form":"しず"},
    {"surface_form":"薪","wakayamaSurface_form":"しば"},
    {"surface_form":"肌着","wakayamaSurface_form":"じばん"},
    {"surface_form":"ジュース","wakayamaSurface_form":"があがあ","maeSurface_form":"ミックス","note":"delete 4"},
    {"surface_form":"塾","wakayamaSurface_form":"じく","maeSurface_form":"学習","note":"delete 2"},
    {"surface_form":"駅","wakayamaSurface_form":"わえき","maeSurface_form":"和歌山","note":"delete 3"},
    {"surface_form":"サンダル","wakayamaSurface_form":"水せった","maeSurface_form":"ビーチ","note":"delete 3"},
    {"surface_form":"者","wakayamaSurface_form":"へたれ","maeSurface_form":"小心","note":"delete 2"},
    {"surface_form":"さん","wakayamaSurface_form":"ぼんさん","maeSurface_form":"和尚","note":"delete 2"},
    {"surface_form":"坊さん","wakayamaSurface_form":"ぼんさん","maeSurface_form":"お","note":"delete 1"},
    {"surface_form":"イカ","wakayamaSurface_form":"まいか","maeSurface_form":"コウ","note":"delete 2"},
    {"surface_form":"げ","wakayamaSurface_form":"まひげ","maeSurface_form":"まゆ","note":"delete 2"},
    {"surface_form":"そば","wakayamaSurface_form":"中華","maeSurface_form":"中華","note":"delete 2"},
    {"surface_form":"そば","wakayamaSurface_form":"そば","maeSurface_form":"日本","note":"delete 2"},
    {"surface_form":"様","wakayamaSurface_form":"まんまいちゃん","maeSurface_form":"仏","note":"delete 1"},
    {"surface_form":"棚","wakayamaSurface_form":"みずや","maeSurface_form":"食器","note":"delete 2"},
    {"surface_form":"ボタン","wakayamaSurface_form":"みずや","maeSurface_form":"押し","note":"delete 2"},
    {"surface_form":"もらい","wakayamaSurface_form":"めばちこ","maeSurface_form":"もの","note":"delete 2"},
    {"surface_form":"あぶら","wakayamaSurface_form":"めめくそ","maeSurface_form":"め","note":"delete 1"},
    {"surface_form":"坊","wakayamaSurface_form":"やんちゃ","maeSurface_form":"暴れん","note":"delete 3"},
    {"surface_form":"ぼう","wakayamaSurface_form":"やんちゃ","maeSurface_form":"あばれん","note":"delete 4"},
    {"surface_form":"焼き","wakayamaSurface_form":"ようしょく","maeSurface_form":"ねぎ","note":"delete 2"},
    {"surface_form":"やき","wakayamaSurface_form":"ようしょく","maeSurface_form":"ねぎ","note":"delete 2"},
    {"surface_form":"御","wakayamaSurface_form":"たきこみ","maeSurface_form":"五目","note":"delete 2"},
    {"surface_form":"トップ","wakayamaSurface_form":"ランニング","maeSurface_form":"タンク","note":"delete 3"},
    {"surface_form":"コーヒー","wakayamaSurface_form":"レイコー","maeSurface_form":"アイス","note":"delete 3"},
    {"surface_form":"7","wakayamaSurface_form":"なながつ","maeSurface_form":"月","note":"delete 1"},
    {"surface_form":"7","wakayamaSurface_form":"なぬか","maeSurface_form":"日","note":"delete 1"},
    {"surface_form":"船","wakayamaSurface_form":"さげ","maeSurface_form":"一本釣り","note":"delete 4"},
    {"surface_form":"さけば","wakayamaSurface_form":"わめか"},

    {"surface_form":"さけび","wakayamaSurface_form":"わめき"},

    {"surface_form":"さけぶ","wakayamaSurface_form":"わめく"},

    {"surface_form":"さけべ","wakayamaSurface_form":"わめけ"},

    {"surface_form":"さけぼ","wakayamaSurface_form":"わめこ"},

    {"surface_form":"さけべる","wakayamaSurface_form":"わめける"},

    {"surface_form":"せこい","wakayamaSurface_form":"こすい"},

    {"surface_form":"ずるい","wakayamaSurface_form":"こすい"},


    {"surface_form":"やわらかく","wakayamaSurface_form":"やわく"},
    {"surface_form":"やわらかい","wakayamaSurface_form":"やわい"},

    {"surface_form":"うるさい","wakayamaSurface_form":"やかましい"},

    {"surface_form":"うるさく","wakayamaSurface_form":"やかましく"},

    {"surface_form":"帰ら","wakayamaSurface_form":"いな"},

    {"surface_form":"帰り","wakayamaSurface_form":"いに"},

    {"surface_form":"帰っ","wakayamaSurface_form":"いん"},

    {"surface_form":"帰る","wakayamaSurface_form":"いぬ"},

    {"surface_form":"帰れ","wakayamaSurface_form":"いね"},

    {"surface_form":"帰れる","wakayamaSurface_form":"いねる"},

    {"surface_form":"壊れ","wakayamaSurface_form":"もじけ"},

    {"surface_form":"壊れる","wakayamaSurface_form":"もじける"},

    {"surface_form":"こわれ","wakayamaSurface_form":"もじけ"},

    {"surface_form":"こわれる","wakayamaSurface_form":"もじける"},

    {"surface_form":"かえら","wakayamaSurface_form":"いな"},

    {"surface_form":"かえり","wakayamaSurface_form":"いに"},

    {"surface_form":"かえっ","wakayamaSurface_form":"いん"},

    {"surface_form":"かえる","wakayamaSurface_form":"いぬ"},

    {"surface_form":"かえれ","wakayamaSurface_form":"いね"},

    {"surface_form":"おかしかろ","wakayamaSurface_form":"いやらしかろ"},

    {"surface_form":"おかしく","wakayamaSurface_form":"いやらし"},

    {"surface_form":"おかしかっ","wakayamaSurface_form":"いやらしかっ"},

    {"surface_form":"おかしい","wakayamaSurface_form":"いやらし"},

    {"surface_form":"おかしけれ","wakayamaSurface_form":"いやらしけれ"},

    {"surface_form":"壊す","wakayamaSurface_form":"もじく"},

    {"surface_form":"こわす","wakayamaSurface_form":"もじく"},

    {"surface_form":"壊さ","wakayamaSurface_form":"もじか"},

    {"surface_form":"こわさ","wakayamaSurface_form":"もじか"},

    {"surface_form":"壊し","wakayamaSurface_form":"もじき"},

    {"surface_form":"こわし","wakayamaSurface_form":"もじき"},

    {"surface_form":"壊せ","wakayamaSurface_form":"もじけ"},

    {"surface_form":"こわせ","wakayamaSurface_form":"もじけ"},

    {"surface_form":"壊そ","wakayamaSurface_form":"もじこ"},

    {"surface_form":"壊せる","wakayamaSurface_form":"もじける"},

    {"surface_form":"こわそ","wakayamaSurface_form":"もじこ"},
    {"surface_form":"寒い","wakayamaSurface_form":"さぶい"},

    {"surface_form":"新しい","wakayamaSurface_form":"さら"},

    {"surface_form":"柔らかい","wakayamaSurface_form":"しなこい"},
    {"surface_form":"おかしかろ","wakayamaSurface_form":"いやらしかろ"},

    {"surface_form":"おかしく","wakayamaSurface_form":"いやらし"},

    {"surface_form":"おかしかっ","wakayamaSurface_form":"いやらしかっ"},

    {"surface_form":"おかしい","wakayamaSurface_form":"いやらし"},

    {"surface_form":"おかしけれ","wakayamaSurface_form":"いやらしけれ"},



    {"surface_form":"触ら","wakayamaSurface_form":"いらわ"},

    {"surface_form":"触り","wakayamaSurface_form":"いらい"},

    {"surface_form":"触っ","wakayamaSurface_form":"いらっ"},

    {"surface_form":"触る","wakayamaSurface_form":"いらう"},

    {"surface_form":"触れ","wakayamaSurface_form":"いらえ"},



    {"surface_form":"さわら","wakayamaSurface_form":"いらわ"},

    {"surface_form":"さわり","wakayamaSurface_form":"いらり"},

    {"surface_form":"さわっ","wakayamaSurface_form":"いらっ"},

    {"surface_form":"さわる","wakayamaSurface_form":"いらう"},

    {"surface_form":"さわれ","wakayamaSurface_form":"いらえ"},

    //{"surface_form":"終わり","wakayamaSurface_form":"しまい"},

    {"surface_form":"つらい","wakayamaSurface_form":"しんどい"},

    {"surface_form":"苦しい","wakayamaSurface_form":"しんどい"},

    {"surface_form":"疲れる","wakayamaSurface_form":"しんどい"},

    {"surface_form":"酸っぱい","wakayamaSurface_form":"すい"},

    {"surface_form":"うるさい","wakayamaSurface_form":"せせこましい"},
    {"surface_form":"持つ","wakayamaSurface_form":"さげる"},

    {"surface_form":"騒ぐ","wakayamaSurface_form":"しこる"},

    {"surface_form":"焼きを入れる","wakayamaSurface_form":"しばきたおす"},
    {"surface_form":"壊す","wakayamaSurface_form":"しもたる"},
    {"surface_form":"ありがとう","wakayamaSurface_form":"おおきに"},
    {"surface_form":"しみる","wakayamaSurface_form":"しゅむ"},

    {"surface_form":"腐る","wakayamaSurface_form":"すえる"},

    {"surface_form":"穴を掘る","wakayamaSurface_form":"せせる"},

    {"surface_form":"いじめる","wakayamaSurface_form":"せちがう"},
    {"surface_form":"いじめ","wakayamaSurface_form":"せちがえ"},
    {"surface_form":"いじめれ","wakayamaSurface_form":"せちがえれ"},

    {"surface_form":"触ろ","wakayamaSurface_form":"いらお"},

    {"surface_form":"さわろ","wakayamaSurface_form":"いらお"},

    {"surface_form":"冷たかろ","wakayamaSurface_form":"ひやこかろ"},

    {"surface_form":"つめたかろ","wakayamaSurface_form":"ひやこかろ"},

    {"surface_form":"冷たい","wakayamaSurface_form":"ひやこい"},

    {"surface_form":"つめたい","wakayamaSurface_form":"ひやこい"},

    {"surface_form":"冷たかっ","wakayamaSurface_form":"ひやこかっ"},

    {"surface_form":"つめたかっ","wakayamaSurface_form":"ひやこかっ"},

    {"surface_form":"冷たく","wakayamaSurface_form":"ひやこく"},

    {"surface_form":"冷たけれ","wakayamaSurface_form":"ひやこけれ"},
    {"surface_form":"かわいかろ","wakayamaSurface_form":"かいらしかろ"},

    {"surface_form":"かわいかっ","wakayamaSurface_form":"かわいらしかっ"},

    {"surface_form":"かわいく","wakayamaSurface_form":"かわいらしく"},

    {"surface_form":"かわいい","wakayamaSurface_form":"かわいらしい"},

    {"surface_form":"かわいけれ","wakayamaSurface_form":"かわいらしけれ"},



    {"surface_form":"可愛かろ","wakayamaSurface_form":"かわいらしかろ"},

    {"surface_form":"可愛かっ","wakayamaSurface_form":"かわいらしかっ"},

    {"surface_form":"可愛く","wakayamaSurface_form":"かわいらしく"},

    {"surface_form":"可愛い","wakayamaSurface_form":"かわいらしい"},

    {"surface_form":"可愛けれ","wakayamaSurface_form":"かわいらしけれ"},

    {"surface_form":"サンダル","wakayamaSurface_form":"せった"},
    {"surface_form":"集まる","wakayamaSurface_form":"たまる"},

    {"surface_form":"たたむ","wakayamaSurface_form":"たとむ"},

    {"surface_form":"畳む","wakayamaSurface_form":"たとむ"},

    {"surface_form":"柏餅","wakayamaSurface_form":"ちまき"},

    {"surface_form":"なめる","wakayamaSurface_form":"ねぶる"},

    {"surface_form":"結ば","wakayamaSurface_form":"くくら"},
    {"surface_form":"結ぼ","wakayamaSurface_form":"くくろ"},

    {"surface_form":"結び","wakayamaSurface_form":"くくり"},

    {"surface_form":"結ん","wakayamaSurface_form":"くくっ"},

    {"surface_form":"結ぶ","wakayamaSurface_form":"くくる"},

    {"surface_form":"結べ","wakayamaSurface_form":"くくれ"},

    {"surface_form":"結べる","wakayamaSurface_form":"くくれる"},



    {"surface_form":"むすぼ","wakayamaSurface_form":"くくろ"},

    {"surface_form":"むすば","wakayamaSurface_form":"くくら"},

    {"surface_form":"むすび","wakayamaSurface_form":"くくり"},
    {"surface_form":"むすん","wakayamaSurface_form":"くくっ"},

    {"surface_form":"むすぶ","wakayamaSurface_form":"くくる"},

    {"surface_form":"むすべ","wakayamaSurface_form":"くくれ"},

    {"surface_form":"むすべる","wakayamaSurface_form":"くくれる"},

    {"surface_form":"辿る","wakayamaSurface_form":"つとう"},
    {"surface_form":"辿ら","wakayamaSurface_form":"つとわ"},
    {"surface_form":"辿れ","wakayamaSurface_form":"つとえ"},
    {"surface_form":"辿っ","wakayamaSurface_form":"つとう"},
    {"surface_form":"辿り","wakayamaSurface_form":"つとい"},

    {"surface_form":"吊る","wakayamaSurface_form":"つらくる"},
    {"surface_form":"吊ら","wakayamaSurface_form":"つらくら"},
    {"surface_form":"吊り","wakayamaSurface_form":"つらくり"},
    {"surface_form":"吊っ","wakayamaSurface_form":"つくらくっ"},
    {"surface_form":"吊れ","wakayamaSurface_form":"つくらくれ"},

    {"surface_form":"付き合う","wakayamaSurface_form":"つれる"},
    {"surface_form":"付き合う","wakayamaSurface_form":"つれる"},
    {"surface_form":"付き合っ","wakayamaSurface_form":"つれ"},
    {"surface_form":"付き合わ","wakayamaSurface_form":"つれ"},
    {"surface_form":"付き合え","wakayamaSurface_form":"つれれ"},

    {"surface_form":"つきあう","wakayamaSurface_form":"つれる"},
    {"surface_form":"つきあう","wakayamaSurface_form":"つれる"},
    {"surface_form":"つきあっ","wakayamaSurface_form":"つれ"},
    {"surface_form":"つきあわ","wakayamaSurface_form":"つれ"},
    {"surface_form":"つきあえ","wakayamaSurface_form":"つれれ"},

    {"surface_form":"ぶっ殺す","wakayamaSurface_form":"てちくらわす"},
    {"surface_form":"手伝う","wakayamaSurface_form":"てとう"},
    {"surface_form":"沈殿する","wakayamaSurface_form":"とごる"},
    {"surface_form":"くすぐったかろ","wakayamaSurface_form":"こしょばかろ"},

    {"surface_form":"くすぐったく","wakayamaSurface_form":"こしょばく"},

    {"surface_form":"くすぐったい","wakayamaSurface_form":"こしょばい"},

    {"surface_form":"くすぐったけれ","wakayamaSurface_form":"こしょばけれ"},

    {"surface_form":"片付ける","wakayamaSurface_form":"なおす"},
    {"surface_form":"片づけ","wakayamaSurface_form":"なおし"},
    {"surface_form":"片づけ","wakayamaSurface_form":"なおさ","conjugated_form":"未然形"},
    {"surface_form":"片づけれ","wakayamaSurface_form":"なおせ"},
    {"surface_form":"片づけろ","wakayamaSurface_form":"なおせ"},

    {"surface_form":"捨てる","wakayamaSurface_form":"ほる"},
    {"surface_form":"捨て","wakayamaSurface_form":"ほっ","conjugated_form":"連用形"},
    {"surface_form":"捨て","wakayamaSurface_form":"ほら","conjugated_form":"未然形"},
    {"surface_form":"捨てろ","wakayamaSurface_form":"ほれ"},
    {"surface_form":"捨てれ","wakayamaSurface_form":"ほれ"},
    {"surface_form":"すてる","wakayamaSurface_form":"ほる"},
    {"surface_form":"すて","wakayamaSurface_form":"ほっ","conjugated_form":"連用形"},
    {"surface_form":"すて","wakayamaSurface_form":"ほら","conjugated_form":"未然形"},
    {"surface_form":"すてろ","wakayamaSurface_form":"ほれ"},
    {"surface_form":"すてれ","wakayamaSurface_form":"ほれ"},

    {"surface_form":"です","wakayamaSurface_form":"わ","maePos":"助動詞"},
    {"surface_form":"です","wakayamaSurface_form":"で","maeSurface_form":"だめ"}
]
//var transdata=[]
let kuromojiObj;

kuromoji.builder({dicPath : './js/kuromoji/dict/'}).build(function(error, _tokenizer) {
    if(error != null){console.log(error);}
    kuromojiObj = _tokenizer;
});


function toWa(standardLanguage){
    let getKuromojiObj = function() {return kuromojiObj;};

    function trans(str) {
        let tokenizer = getKuromojiObj();
        path = tokenizer.tokenize(str);
        console.log(path);
        return path
    }
    function toWAOneWordTrans(maedata,nowdata,atodata,sentence){//一語を変換する。
        var gosign=0
        var checkSousuu=4
        var resultData=nowdata["surface_form"];
        var note=""
        var resultNumber=-1
        //resultData=nowdata["surface_form"]
        for(var i=0;i<transdata.length;i++){
            //alert("kita")
            var gosign=0
            if(nowdata["surface_form"]==transdata[i]["surface_form"]){
                gosign=1
                //alert("yoshi" + i)   
                if(typeof transdata[i]["maeSurface_form"]=='string'){
                    if(transdata[i]["maeSurface_form"]==maedata["surface_form"]){
                        //gosign+=1
                        //alert("yoshi2"+i)
                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["atoSurface_form"]=='string'){
                    //alert("eys!"+transdata[i]["atoSurface_form"])
                    if(transdata[i]["atoSurface_form"]==atodata["surface_form"]){
                        //gosign+=1
                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["pos"]=='string'){
                    if(transdata[i]["pos"]==nowdata["pos"]){
                        //gosign+=1
                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["maePos"]=='string'){
                    if(transdata[i]["maePos"]==maedata["pos"]){
                        //gosign+=1
                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["atoPos"]=='string'){
                    if(transdata[i]["atoPos"]==atodata["pos"]){
                        //gosign+=1
                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["conjugated_form"]=='string'){
                    if(transdata[i]["conjugated_form"]==nowdata["conjugated_form"]){

                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["last_sentence"]=='string'){
                    if(transdata[i]["last_sentence"]==sentence.slice(-1)){
                    }else{
                        gosign=0
                    }
                }
                if(typeof transdata[i]["reading"]=='string'){
                    if(transdata[i]["reading"]==maedata["reading"].slice(-1)){
                    }else{
                        gosign=0
                    }
                }
            }
            if (gosign==1){
                resultNumber=i
            }
        }
        if(resultNumber!=-1){
            i=resultNumber
            if(typeof transdata[i]["note"]=="string"){
                note=transdata[i]["note"]
            }
            resultData=""
            if(note.slice(0,6)=="delete"){
                deleteSuu=note.slice(-1)
                sentence=sentence.slice(0,deleteSuu*(-1))
                console.log(transdata[i]["surface_form"])
                console.log(deleteSuu)
            }
            resultData+=transdata[i]["wakayamaSurface_form"]
        }
        sentence=sentence+resultData
        return sentence
    }
    
    var data=trans(standardLanguage);
    var FinalResult="";
    for(var i=0;i<data.length;i++){
        var maedata={"surface_form":"","pos":"","conjugated_form":"","reading":""}
        var nowdata={"surface_form":"","pos":"","conjugated_form":"","reading":""}
        var atodata={"surface_form":"","pos":"","conjugated_form":"","reading":""}
        if(i>0){maedata=data[i-1]}
        nowdata=data[i]
        if(i+1<data.length){atodata=data[i+1]}
        FinalResult=toWAOneWordTrans(maedata,nowdata,atodata,FinalResult)
    }
    return FinalResult
}









function array_delete(array,word){
  a = array;
  for(var i = 0; i < a.length; i++){
    a = a.filter(function(a){
      return a !== word[i];
    });
  }
  return a
}


function ope_check(ope){
  switch(ope){
    case "PLUS":
    case "MINUS":
    case "MULTI":
    case "DIVIS":
    case "POWER":
    case "NUMBER":
    case "BOOLEAN":
    case "STRING":
    case "REMAINDE":
    case "INT_QUOT":
    case "VARIABLE":
    case "PARAMS_S":
    case "PARAMS_E":
    case "BRACKET_S":
    case "BRACKET_E":
    case "FUNCTION":
    case "COMMA":
    case "F_S":
    case "F_E":
    case "PERIOD":
    case "EQUAL":
    case "GREATER":
    case "LESS":
    case "GREATER_EQUAL":
    case "LESS_EQUAL":
    case "NOT_EQUAL":
    case "AND":
    case "OR":
      return true;
    default:
      return false;
  }
}

function toHalfwidth(word){
  return word.replace(/[Ａ-Ｚａ-ｚ０-９ ＞ ＜ ｜ ＝ ＋ － ！ ＊ ／ ％ ＾ ｛ ｝ ［ ］ ” “ ； 、]/g,function(s){
  return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

function lexical(txt,token,f_h){
  var input_txt = txt.split("\n");
  input_txt.push("\n");
  input_txt = array_delete(input_txt,[""]);

  var count_before = 0;
  var brace_s_count = [];
  program_brace = "";
  for(var i = 0; i < input_txt.length; i++){
    var j = 0;
    while(input_txt[i].charAt(j) == " " ||input_txt[i].charAt(j) == "　"){
      j++;
    }

    if(j > count_before){
      program_brace += "{";
      if(brace_s_count.indexOf(j) == -1){
        brace_s_count.push(j);
      }
      count_before = j;
    }else if(count_before > j){
      count = brace_s_count.length - 1 - brace_s_count.indexOf(j);
      if(brace_s_count.indexOf(j) == -1){
        console.warn("インデントのミスによって正しく出力できない場合があります")
        var k = j;
        while(!brace_s_count.indexOf(k) != -1 && brace_s_count[brace_s_count.length - 1] > k){
          k++;
        }
        count = brace_s_count.length - 1 - brace_s_count.indexOf(k);
        for(var l = 0; l < count; l++){
          program_brace += "}"
        }
        count_before = k;
      }else{
        for(var k = 0; k < count; k++){
          program_brace += "}"
        }
        if(brace_s_count.indexOf(j) == -1){
          brace_s_count.push(j);
        }
        brace_s_count.splice(brace_s_count.indexOf(j) + 1,brace_s_count.length - 1);
        count_before = j;
      }
    }else{
      if(brace_s_count.indexOf(j) == -1){
        brace_s_count.push(j);
        count_before = j;
      }
    }
    program_brace += input_txt[i] + "\n";
  }

  program_brace = program_brace.split("\'").join("|\'|");
  program_brace = program_brace.split("\"").join("|\"|");
  program_brace = program_brace.split("\n").join("|\n|");
  program_brace = program_brace.split("|\n|{").join("{|\n|");
  var program_quate = program_brace.split("|");
  while(program_quate.indexOf("||") != -1){
    program_quate = program_quate.split("||").join("|");
  }

  program_quate = array_delete(program_quate,[""]);

  var program_stack = [];
  for(var i = 0; i < program_quate.length; i++){
    if(program_quate[i] == "\""){
      program_stack.push(program_quate[i]);
      i++;
      while(program_quate[i] != "\""){
        program_stack.push(program_quate[i]);
        i++;  
      }
      program_stack.push(program_quate[i]);
    }else if(program_quate[i] == "\'"){
      program_stack.push(program_quate[i]);
      i++
      while(program_quate[i] != "\'"){
        program_stack.push(program_quate[i]);
        i++;
      }
      program_stack.push(program_quate[i]);
    }else{     
      stack = program_quate[i];
      for(key in f_h){
        stack = stack.split(key).join(f_h[key]);
      }
      
      stack = stack.split(" ").join("|");
      stack = stack.split("　").join("|");
      for(var j = 0; j < token[0].length; j++){
        stack = stack.split(token[0][j]).join("|"+token[0][j]+"|");
      }
      
      for(var j = 1; j < stack.length; j++){
        if(stack.charAt(j) == "."){
          if(isNaN(stack.charAt(j-1)) && isNaN(stack.charAt(j+1))){
            stack = stack.slice(0,j)+"|.|"+stack.slice(j+1);
            j+=2;
          }
        }
      }


      while(stack.indexOf("||") != -1){
        stack = stack.split("||").join("|");
      }
      for(var k = token.length - 1; k > 0; k--){
        for(var l = 0; l < token[k].length; l++){
          var check = "";
          for(var m = 0; m < token[k][l].length; m++){
            check += token[k][l][m] + "|";
          }
          check = check.slice(0,-1);
          stack = stack.split(check).join(token[k][l]);
        }
      }
      stack_push = stack.split("|");
      stack_push = array_delete(stack_push,["",";"]);
      program_stack.push(stack_push);
    }
  }
  var program_array = flatten(program_stack);
  
  while(program_array[program_array.length - 1] == "\n" && program_array[program_array.length - 2] == "\n"){
    program_array.pop();
  }
  return program_array;
}


function purser(program,purse,equal){
  exp = [];
  type = [];
  variable = [];
  def = [];
  var def_mode = false;
  var equal_mode = false;
  for(var i = 0; i < program.length; i++){
    type.push("");
  }
  for(var i = 0; i < program.length; i++){
    if(equal.indexOf(toHalfwidth(program[i]).toLowerCase()) != -1){
      equal_mode = true;
    }
    if(toHalfwidth(program[i]).toLowerCase() in purse){
      type[i] = purse[toHalfwidth(program[i]).toLowerCase()];
    }else{
      switch(toHalfwidth(program[i]).toLowerCase()){
        case "=":
          if(equal_mode){
            type.splice(i,1,"EQUAL");
          }else{
            type.splice(i,1,"SUBSTI");
            if(type[i-1] == "STRING"){
              type.splice(i-1,1,"VARIABLE");
              if(variable.indexOf(program[i-1]) == -1){
                variable.push(program[i-1]);
              }
            }
            equal_mode = true;
          }
          break;
        case "\n":
          type.splice(i,1,"NEW_LINE");
          equal_mode = false;
          def_mode = false;
          break;
        case "\"":
        case "\'":
          type.splice(i,1,"DOUBLE_QUATE");
          type.splice(i+1,1,"STRING");
          type.splice(i+2,1,"DOUBLE_QUATE");
          i+=2;
          break;
        case "def":
        case "関数":
          type.splice(i,1,"DEFINE");
          i++;
          type.splice(i,1,"FUNCTION");
          if(def.indexOf(program[i]) == -1){
            def.push(program[i]);
          }
          def_mode = true;
          break;
        default:
          if(variable.indexOf(program[i]) != -1){
            type.splice(i,1,"VARIABLE");
          }else if(def.indexOf(program[i]) != -1){
            type.splice(i,1,"FUNCTION");
          }else if(def_mode){
            type.splice(i,1,"VARIABLE");
            variable.push(program[i]);
          }else{
            if(!isNaN(toHalfwidth(program[i]).toLowerCase())){
              program.splice(i,1,Number(toHalfwidth(program[i]).toLowerCase()));
              type.splice(i,1,"NUMBER");
            }else if(toHalfwidth(program[i]).toLowerCase() == "true"){
              program.splice(i,1,true);
              type.splice(i,1,"BOOLEAN");
            }else if(toHalfwidth(program[i]).toLowerCase() == "false"){
              program.splice(i,1,false);
              type.splice(i,1,"BOOLEAN");
            }else{
              program.splice(i,1,String(program[i]));
              type.splice(i,1,"STRING");
            }
          }
          break;
      }
    }
  }
  program = program.filter(function(a){
    return a !== "\"";
  });
  program = program.filter(function(a){
    return a !== "\'";
  });
  
  type = type.filter(function(a){
    return a !== "DOUBLE_QUATE";
  });

  return [program,type];
}


function poland(array,type,ope_priority){
  var stack = [];
  var stack_array = [];
  var stack_ope = [];
  var stack_ope_array = [];
  for(var i = 0; i < type.length; i++){
    if(type[i] == "NUMBER" || type[i] == "VARIABLE" || type[i] == "STRING" || type[i] == "BOOLEAN"){
      stack.push(type[i]);
      stack_array.push(array[i]);
    }else if(type[i] == "BRACKET_S"){
      stack.push(type[i])
      stack_array.push(array[i]);
      start = i + 1;
      var run = 1;
      while(run > 0){
        i++;
        if(type[i] == "BRACKET_S"){
          run++;
        }else if(type[i] == "BRACKET_E"){
          run--;
        }
      }
      end = i;
      poland_change = poland(array.slice(start,end),type.slice(start,end),ope_priority);
      stack.push(poland_change[1]);
      stack_array.push(poland_change[0]);
      stack.push(type[i])
      stack_array.push(array[i]);
    }else if(type[i] == "PARAMS_S"){
      start = i + 1;
      var run = 1;
      while(run > 0){
        i++;
        if(type[i] == "PARAMS_S"){
          run++;
        }else if(type[i] == "PARAMS_E"){
          run--;
        }
      }
      end = i;
      poland_change = poland(array.slice(start,end),type.slice(start,end),ope_priority);
      stack.push(poland_change[1])
      stack_array.push(poland_change[0]);
    }else if(type[i] == "FUNCTION"){
      stack.push(type[i])
      stack_array.push(array[i]);
      if(type[i+1] == "PARAMS_S"){
        stack.push("F_S");
        stack_array.push("$");
        i++;
        start = i + 1;
        var run = 1;
        while(run > 0 && i < type.length){
          i++;
          if(type[i] == "PARAMS_S"){
            run++;
          }else if(type[i] == "PARAMS_E"){
            run--;
          }
        }
        end = i;
        poland_change = poland(array.slice(start,end),type.slice(start,end),ope_priority);
        stack.push(poland_change[1])
        stack_array.push(poland_change[0]);
        stack.push("F_E");
        stack_array.push("$");
      }
    }else if(type[i] == "COMMA"){
      for(var j = 0; j < stack_ope.length; j++){
        stack.push(stack_ope[j]);
        stack_array.push(stack_ope_array[j]);
      }
      stack_ope.length = 0;
      stack_ope_array.length = 0;
      stack.push("COMMA");
      stack_array.push(",");
    }else if(type[i] == "PERIOD"){
      stack.push("PERIOD");
      stack_array.push(".");
    }else if(stack_ope.length == 0){
      stack_ope.push(type[i]);
      stack_ope_array.push(array[i]);
    }else if(ope_priority[type[i]] >= ope_priority[stack_ope[0]]){
      stack_ope.unshift(type[i]);
      stack_ope_array.unshift(array[i]);
    }else{
      while(ope_priority[type[i]] <= ope_priority[stack_ope[0]]){
        stack.push(stack_ope[0]);
        stack_array.push(stack_ope_array[0]);
        stack_ope.shift();
        stack_ope_array.shift();
      }
      stack_ope.push(type[i]);
      stack_ope_array.push(array[i]);
    }
  }
  for(var i = 0; i < stack_ope.length; i++){
    stack.push(stack_ope[i]);
    stack_array.push(stack_ope_array[i]);
  }


  return [stack_array,stack];
}

function calculate(array,type){
  var ini_variable_value = {"pi":Math.PI,
                            "円周率":Math.PI};
  var stack = [];
  var judge = true;
  var i = -1;
  while(judge){
    i++;
    switch(type[i]){
      case "PLUS":
        stack.splice(0,2,stack[1]+stack[0]);
        break;
      case "MINUS":
        if(stack.length > 1){
          stack.splice(0,2,stack[1]-stack[0]);
        }else{
          stack.splice(0,1,0-stack[0]);
        }
        break;
      case "MULTI":
        stack.splice(0,2,stack[1]*stack[0]);
        break;
      case "DIVIS":
        stack.splice(0,2,stack[1]/stack[0]);
        break;
      case "POWER":
        stack.splice(0,2,stack[1]**stack[0]);
        break;
      case "REMAINDE":
        stack.splice(0,2,stack[1]%stack[0]);
        break;
      case "INT_QUOT":
        stack.splice(0,2,Math.floor(stack[1]/stack[0]));
        break;
      case "NUMBER":
        stack.unshift(array[i]);
        break;
      case "BOOLEAN":
        stack.unshift(array[i]);
        break;
      case "STRING":
        stack.unshift(array[i]);
        break;
      case "EQUAL":
        stack.splice(0,2,stack[1] == stack[0]);
        break;
      case "AND":
        stack.splice(0,2,stack[1] && stack[0]);
        break;
      case "OR":
        stack.splice(0,2,stack[1] || stack[0]);
        break;
      case "LESS":
        stack.splice(0,2,stack[1] < stack[0]);
        break;
      case "LESS_EQUAL":
        stack.splice(0,2,stack[1] <= stack[0]);
        break;
      case "GREATER":
        stack.splice(0,2,stack > stack[0]);
        break;
      case "GREATER_EQUAL":
        stack.splice(0,2,stack[1] >= stack[0]);
        break;
      case "NOT_EQUAL":
        stack.splice(0,2,stack[1] != stack[0]);
        break;
      case "VARIABLE":
        if(array[i] in variable_value || toHalfwidth(array[i]).toLowerCase() in ini_variable_value){
          if(type[i+1] == "BRACKET_S"){
            var result = [];
            var vari_name = array[i];
            while(type[i+1] == "BRACKET_S"){
              var j = i + 1;
              var start = j + 1;
              var run = 1;
              while(run > 0 && j < array.length){
                j++;
                if(type[j] == "F_S"){
                  var run_1 = 1;
                  while(run_1 > 0 && j < array.length){
                    j++;
                    if(type[j] == "F_S"){
                      run_1++;
                    }else if(type[j] == "F_E"){
                      run_1--;
                    }
                  }
                }else if(type[j] == "BRACKET_S"){
                  run++;
                }else if(type[j] == "BRACKET_E"){
                  run--;
                }
              }
              var end = j;
              var result_a = array.slice(start,end);
              var result_t = type.slice(start,end);
              var i = j;
              result.push(calculate(result_a,result_t));
            }
            result_hold = [];
            result_hold.push(variable_value[vari_name]);
            for(var j = 0; j < result.length; j++){
              result_hold.push(result_hold[0][result[j] - 1]);
              result_hold.shift();
            }
            stack.unshift(result_hold[0]);
          }else{
            if(array[i] in variable_value){
              stack.unshift(variable_value[array[i]]);
            }else if(toHalfwidth(array[i]).toLowerCase() in ini_variable_value){
              stack.unshift(ini_variable_value[toHalfwidth(array[i]).toLowerCase()]);
            }
          }
        }else{
          stack.unshift(array[i]);
        }
        break;
      case "FUNCTION":
        var func_name = toHalfwidth(array[i]).toLowerCase();
        if(type[i+1] == "F_S"){
          i++;
          var j = i;
          var judge_v = true;
          var result_array_f = [];
          var result_type_f = [];
          while(judge_v){
            var start = j + 1;
            var run = 1;
            while(run > 0 && j < array.length){
              j++;
              if(type[j] == "F_S"){
                var run_1 = 1;
                while(run_1 > 0 && j < array.length){
                  j++;
                  if(type[j] == "F_S"){
                    run_1++;
                  }else if(type[j] == "F_E"){
                    run_1--;
                  }
                }
              }else if(type[j] == "COMMA" || type[j] == "F_E"){
                run--;
              }
            }
            var end = j;
            if(type[j] == "COMMA"){
              judge_v = true;
            }else{
              judge_v = false;
            }
            result_array_f.push(array.slice(start,end));
            result_type_f.push(type.slice(start,end));
          }
          i = j;
          var result = [];
          for(var j = 0; j < result_type_f.length; j++){
            result.push(calculate(result_array_f[j],result_type_f[j]))
          }
        }

        if(func_name in def_value){
          def_stack = def_value[func_name];
          for(var j = 0; j < result.length; j++){
            variable_value[def_stack[0][j]] = result[j]
          }
          stack.unshift(enja_run(def_stack[1],def_stack[2],out,start_time));
        }else{
          switch(toHalfwidth(func_name).toLowerCase()){
            case "towa":
            case "和歌山弁":
              if(isNaN(result)){
                stack.unshift(toWa(result[0]));
              }else{
                stack.unshift(result[0]);
              }
              break;
            case "floor":
            case "切り捨て":
              stack.unshift(Math.floor(result[0]));
              break;
            case "sqrt":
            case "平方根":
              stack.unshift(Math.sqrt(result[0]));
              break;
            case "abs":
            case "絶対値":
              stack.unshift(Math.abs(result[0]));
              break;
            case "round":
            case "四捨五入":
              stack.unshift(Math.round(result[0]));
              break;
            case "random":
            case "ランダム":
              stack.unshift(Math.floor(Math.random()*(result[1] + 1- result[0]))  + result[0]);
              break;
            case "ceil":
            case "切り上げ":
              stack.unshift(Math.ceil(result[0]));
              break;
            case "length":
            case "長さ":
              stack[0] = stack[0].length;
              break;
          }
        }

        break;
      case "BRACKET_S":
        var j = i;
        var judge = true;
        var result_array = [];
        var result_type = [];
        while(judge){
          var start = j + 1;
          var run = 1;
          while(run > 0 && j < array.length){
            j++;
            if(type[j] == "F_S"){
              var run_1 = 1;
              while(run_1 > 0 && j < array.length){
                j++;
                if(type[j] == "F_S"){
                  run_1++;
                }else if(type[j] == "F_E"){
                  run_1--;
                }
              }
            }else if(type[j] == "BRACKET_S"){
              console.log("a");
              var run_1 = 1;
              j++;
              while(run_1 > 0 && j < array.length){
                j++;
                if(type[j] == "BRACKET_S"){
                  run_1++;
                }else if(type[j] == "BRACKET_E"){
                  run_1--;
                }else if(type[j] == "F_S"){
                  var run_2 = 1;
                  while(run_2 > 0 && j < array.length){
                    j++;
                    if(type[j] == "F_S"){
                      run_2++;
                    }else if(type[j] == "F_E"){
                      run_2--;
                    }
                  }
                }
              }
            }else if(type[j] == "COMMA" || type[j] == "BRACKET_E"){
              run--;
            }
          }
          var end = j;
          if(type[j] == "COMMA"){
            judge = true;
          }else{
            judge = false;
          }
          result_array.push(array.slice(start,end));
          result_type.push(type.slice(start,end));
        }
        i = j;
        var result = [];
        if(start-end != 0){
          for(var j = 0; j < result_type.length; j++){
            result.push(calculate(result_array[j],result_type[j]));
          }
        }
        stack.unshift(result);
        break;
      
      case "PERIOD":
        break;

      default:
        judge = false;
        break;
    }

    if(i >= type.length){
      judge = false;
    }
   
  }
  
  while(stack.length >= 2){
    stack.splice(0,2,String(stack[1]) + String(stack[0]));
  }

  return stack[0];
}


function enja_run(program_array,program_type){

  var if_mode = [];
  var else_mode = [];
  var loop_number = [];
  var loop_count = [];
  var result_aa = [];
  var result_hold = [];

  for(var i = 0; i < program_type.length; i++){
    switch(program_type[i]){
      case "VARIABLE":
        var variable_name = program_array[i];
        
        if(program_type[i+1] == "BRACKET_S"){
          var result_aa = [];
          while(program_type[i+1] == "BRACKET_S"){
            var j = i + 1;
            var start = j + 1;
            var run = 1;
            while(run > 0 && j < program_array.length){
              j++;
              if(program_type[j] == "F_S"){
                var run_1 = 1;
                while(run_1 > 0 && j < program_array.length){
                  j++;
                  if(program_type[j] == "F_S"){
                    run_1++;
                  }else if(program_type[j] == "F_E"){
                    run_1--;
                  }
                }
              }else if(program_type[j] == "BRACKET_S"){
                run++;
              }else if(program_type[j] == "BRACKET_E"){
                run--;
              }
            }
            var end = j;
            var result_a = program_array.slice(start,end);
            var result_t = program_type.slice(start,end);
            var i = j;
            result_aa.push(calculate(result_a,result_t,variable_value,def_value));
          }
          result_hold = [];
          result_hold.push(variable_value[variable_name]);
          for(var j = 0; j < result_aa.length; j++){
            result_hold.push(result_hold[0][result_aa[j] - 1]);
            result_hold.shift();
          }
          for(var j = 0; j < result_aa.length; j++){
            result_aa[j] = result_aa[j] - 1;
          }

        }
        if(program_type[i+1] == "PLUS_PLUS"){
          if(result_aa.length != 0){
            var change = result_aa;
            var value = result_hold[0] + 1;
            var a = variable_value[variable_name];
            var result_1 = [];
            
            result_1.push(a);
            var process = a[change[0]];
            for(var j = 1; j < change.length; j++){
              result_1.push(process);
              process = process[j];
            }
            result_1.push(process);
            
            
            result_1[result_1.length - 1] = value;
            
            for(var j = result_1.length - 2; j >= 0; j--){
              result_1[j][change[j]] = result_1[j+1];
            }

            variable_value[variable_name] = result_1[0];
          }else{
            variable_value[variable_name] ++;
          }
          
          result_aa.length = 0;
          result_hold.length = 0;
        }else if(program_type[i+1] == "MINUS_MINUS"){
          if(result_aa.length != 0){
            var change = result_aa;
            var value = result_hold[0] - 1;
            var a = variable_value[variable_name];
            var result_1 = [];
            
            result_1.push(a);
            var process = a[change[0]];
            for(var j = 1; j < change.length; j++){
              result_1.push(process);
              process = process[j];
            }
            result_1.push(process);
            
            
            result_1[result_1.length - 1] = value;
            
            for(var j = result_1.length - 2; j >= 0; j--){
              result_1[j][change[j]] = result_1[j+1];
            }

            variable_value[variable_name] = result_1[0];
          }else{
            variable_value[variable_name] --;
          }

          result_aa.length = 0;
          result_hold.length = 0;
        }else if(program_type[i+1] == "PERIOD"){
          i++;
          if(program_type[i+2] == "F_S"){
            i++;
            var func_name = toHalfwidth(program_array[i]).toLowerCase();
            i++;
            var j = i;
            var judge_v = true;
            var result_array_f = [];
            var result_type_f = [];
            while(judge_v){
              var start = j + 1;
              var run = 1;
              while(run > 0 && j < program_array.length){
                j++;
                if(program_type[j] == "COMMA" || program_type[j] == "F_E"){
                  run--;
                }else if(program_type[j] == "F_S"){
                  var run_1 = 1;
                  while(run_1 > 0 && j < program_array.length){
                    j++;
                    if(program_type[j] == "F_S"){
                      run_1++;
                    }else if(program_type[j] == "F_E"){
                      run_1--;
                    }
                  }
                }else if(program_type[j] == "BRACKET_S"){
                  var run_1 = 1;
                  while(run_1 > 0 && j < program_array.length){
                    j++;
                    if(program_type[j] == "BRACKET_S"){
                      run_1++;
                    }else if(program_type[j] == "BRACKET_E"){
                      run_1--;
                    }
                  }
                }
              }
            var end = j;
            if(program_type[j] == "COMMA"){
              judge_v = true;
            }else{
              judge_v = false;
            }
            result_array_f.push(program_array.slice(start,end));
            result_type_f.push(program_type.slice(start,end));
            }
            i = j;
            var result = [];
            for(var j = 0; j < result_type_f.length; j++){
              result.push(calculate(result_array_f[j],result_type_f[j],variable_value,def_value));
            }

            if(result_aa.length != 0){
              var change = result_aa;

              var list = [];
              for(var j = 0; j < result_hold.length; j++){
                for(var k = 0; k < result_hold[j].length; k++){
                  list.push(result_hold[j][k]);
                }
              }
              result_hold = list;
              switch(func_name){
                case "push":
                case "プッシュ":
                  for(var k = 0; k < result.length; k++){
                    result_hold.push(result[k]);
                  }
                  break;
                
                case "unshift":
                case "アンシフト":
                  for(var k = result.length - 1; k >= 0; k--){
                    result_hold.unshift(result[k]);
                  }
                  break;
              }

              var value = result_hold;
              var a = variable_value[variable_name];
              var result_1 = [];
              
              result_1.push(a);
              var process = a[change[0]];
              for(var j = 1; j < change.length; j++){
                result_1.push(process);
                process = process[j];
              }
              result_1.push(process);
              
              result_1[result_1.length - 1] = value;
              
              for(var j = result_1.length - 2; j >= 0; j--){
                result_1[j][change[j]] = result_1[j+1];
              }
              variable_value[variable_name] = result_1[0];
              
            }else{
              switch(func_name){
                case "push":
                case "プッシュ":
                  for(var k = 0; k < result.length; k++){
                    variable_value[variable_name].push(result[k]);
                  }
                  break;
                case "unshift":
                case "アンシフト":
                  for(var k = result.length - 1; k >= 0; k--){
                    variable_value[variable_name].unshift(result[k]);
                  }
                  break;
              }
            }
          }else{
            i++;
            var func_name = toHalfwidth(program_array[i]).toLowerCase();
            if(result_aa.length != 0){
              var change = result_aa;

              var list = [];
              for(var j = 0; j < result_hold.length; j++){
                for(var k = 0; k < result_hold[j].length; k++){
                  list.push(result_hold[j][k]);
                }
              }
              result_hold = list;
              switch(func_name){
                case "pop":
                case "ポップ":
                  result_hold.pop();
                  break;
                
                case "shift":
                case "シフト":
                  result_hold.shift();
                  break;
              }


              var value = result_hold;
              var a = variable_value[variable_name];
              var result_1 = [];
              
              result_1.push(a);
              var process = a[change[0]];
              for(var j = 1; j < change.length; j++){
                result_1.push(process);
                process = process[j];
              }
              result_1.push(process);
              
              result_1[result_1.length - 1] = value;
              
              for(var j = result_1.length - 2; j >= 0; j--){
                result_1[j][change[j]] = result_1[j+1];
              }
              variable_value[variable_name] = result_1[0];
            }else{
              i++;
              switch(toHalfwidth(func_name).toLowerCase()){
                case "pop":
                case "ポップ":
                  variable_value[variable_name].pop();
                  break;
                case "shift":
                case "シフト":
                  variable_value[variable_name].shift();
                  break;
              }
            }
          }
        }else{
          i += 2;
          var start = i;
          while(ope_check(program_type[i])){
            i++;
          } 
          var end = i;
          i--;
          var result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);

          
          if(result_aa.length != 0){
            var change = result_aa;
            switch(program_type[start-1]){
              case "SUBSTI":
                var value = result;
                break;
              case "PLUS_EQUAL":
                var value = result_hold[0] + result;
                break;
              case "MINUS_EQUAL":
                var value = result_hold[0] - result;
                break;
              case "MULTI_EQUAL":
                var value = result_hold[0] * result;
                break;
              case "DIVIS_EQUAL":
                var value = result_hold[0] / result;
                break;
              case "POWER_EQUAL":
                var value= result_hold[0] ** result;
                break;
              case "REMAINDE_EQUAL":
                var value = result_hold[0] % result;
                break;
              case "INT_QUOT_EQUAL":
                var value = Math.floor(result_hold[0] / result);
                break;
            }
            var a = variable_value[variable_name];
            var result_1 = [];
            
            result_1.push(a);
            var process = a[change[0]];
            for(var j = 1; j < change.length; j++){
              result_1.push(process);
              process = process[j];
            }
            result_1.push(process);
            
            
            result_1[result_1.length - 1] = value;
            
            for(var j = result_1.length - 2; j >= 0; j--){
              result_1[j][change[j]] = result_1[j+1];
            }

            variable_value[variable_name] = result_1[0];
          }else{
            switch(program_type[start-1]){
              case "SUBSTI":
                variable_value[variable_name] = result;
                break;
              case "PLUS_EQUAL":
                variable_value[variable_name] += result;
                break;
              case "MINUS_EQUAL":
                variable_value[variable_name] -= result;
                break;
              case "MULTI_EQUAL":
                variable_value[variable_name] *= result;
                break;
              case "DIVIS_EQUAL":
                variable_value[variable_name] /= result;
                break;
              case "POWER_EQUAL":
                variable_value[variable_name] **= result;
                break;
              case "REMAINDE_EQUAL":
                variable_value[variable_name] %= result;
                break;
              case "INT_QUOT_EQUAL":
                variable_value[variable_name] = Math.floor(variable_value[variable_name] / result);
                break;
            }
          }
          result_aa.length = 0;
          result_hold.length = 0;
        }
        break;

      case "WHILE":
        i++;
        var start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        var end = i;
        i--;
        if(calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value)){
          i++;
        }else{
          var run = 1;
          i++;
          while(run > 0 && i < program_array.length){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
        }
        break;

      case "IF":
        i++;
        var start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        var end = i;
        i--;
        if(calculate(program_array.slice(start,end),program_type.slice(start,end))){
          i++;
          if_mode.push(true);
          else_mode.push(false);
        }else{
          var run = 1;
          i++;
          if_mode.push(false);
          else_mode.push(true);
          while(run > 0 && i < program_array.length){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
        }
        if(program_type[i+2] == "BRACE_E"){
          if_mode.pop();
          else_mode.pop();
        }
        break;
      
      case "ELIF":
        if(else_mode[else_mode.length - 1]){
          i++;
          var start = i;
          while(ope_check(program_type[i])){
            i++;
          }
          var end = i;
          i--;
          if(calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value)){
            if_mode.push(true);
            else_mode.push(false);
            i++;
          }else{
            var run = 1;
            if_mode.push(false);
            else_mode.push(true);
            i++;
            while(run > 0 && i < program_array.length){
              i++;
              if(program_type[i] == "BRACE_S"){
                run++;
              }else if(program_type[i] == "BRACE_E"){
                run--;
              }
            }
          }
        }else{
          var run = 1;
          if_mode.push(true);
          else_mode.push(false);
          i++;
          while(program_type[i] != "BRACE_S"){
            i++;
          }
          while(run > 0 && i < program_array.length){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
        }
        if(program_type[i+2] == "BRACE_E"){
          if_mode.pop();
          else_mode.pop();
        }
        break;

      case "ELSE":
        if(if_mode[if_mode.length - 1]){
          var run = 1;
          i += 2;
          while(run > 0){
            i++;
            if(program_type[i] == "BRACE_S"){
              run++;
            }else if(program_type[i] == "BRACE_E"){
              run--;
            }
          }
          i--;
        }
        if(else_mode){
          i++;
        }
        if_mode.pop();
        else_mode.pop();
        break;

      case "LOOP":
        j = i + 1;
        start_check = j;
        while(program_type[j] != "BRACE_S" && program_type[j] != "NEW_LINE" && j < program_type.length){
          j++;
        }
        end_check = j;
        check = program_type.slice(start_check,end_check);
        
        if(check.length > 0){
          i++;
          var start = i;
          while(ope_check(program_type[i])){
            i++;
          }
          var end = i;
          i--;
          result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);
          loop_count.push(Math.floor(Number(result)) - 1);
          if(loop_count[loop_count.length - 1] > -1){
            if(loop_number.indexOf(i) == -1){
              loop_number.push(i);
            }
            loop_mode = true;
          }else{
            loop_count.pop();
            if(loop_number.indexOf(i) != -1){
              loop_number.pop();
            }
            var run = 1;
            i++;
            while(run > 0){
              i++;
              if(program_type[i] == "BRACE_S"){
                run++;
              }else if(program_type[i] == "BRACE_E"){
                run--;
              }
            }
            loop_mode = false;
          }
        }
        break;
      
      case "BRACE_E":
        var back = 1;
        var j = i;
        while(back > 0){
          j--;
          if(program_type[j] == "BRACE_S"){
            back--;
          }else if(program_type[j] == "BRACE_E"){
            back++;
          }
        }
        while(program_type[j] != "WHILE" && program_type[j] != "LOOP" && program_type[j] != "IF" && program_type[j] != "ELIF" && program_type[j] != "ELSE" && j > 0){
          j--;
        }
        switch(program_type[j]){
          case "WHILE":
            i = j - 1;
            break;
          case "IF":
          case "ELIF":
          case "ELSE":
            break;
          case "LOOP":
            if(loop_count[loop_count.length - 1] > 0){
              while(program_type[j] != "BRACE_S"){
                j++;
              }
              loop_count[loop_count.length-1] -= 1;
              i = j;
            }else{
              loop_count.pop();
              loop_number.pop();
            }
            break;
          default:
            break;
        }
        break;

      case "PRINT":
        i++;
        var start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        var end = i;
        i--;
        result = calculate(program_array.slice(start,end),program_type.slice(start,end));
        if(Array.isArray(result)){
          result = dimen_1(result);
        }
        document.getElementById(out).innerHTML += result + "<br>";
        break;
      
      case "LOG":
        i++;
        var start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        var end = i;
        i--;
        result = calculate(program_array.slice(start,end),program_type.slice(start,end));
        console.log(result);
        break;

      case "COMMENT":
        while(program_type[i] != "NEW_LINE"){
          i++;
        }
        break;

      case "COMMENT_S":
        while(program_type[i] != "COMMENT_E" && i < program_type.length){
          i++;
        }
        break;

      case "FUNCTION":
        if(program_array[i] in def_value){
          var def_stack = def_value[program_array[i]];
          
          i++;
          var j = i;
          var judge_v = true;
          var result_array_f = [];
          var result_type_f = [];
          while(judge_v){
            var start = j + 1;
            var run = 1;
            while(run > 0 && j < program_array.length){
              j++;
              if(program_type[j] == "COMMA" || program_type[j] == "F_E"){
                run--;
              }else if(program_type[j] == "F_S"){
                var run_1 = 1;
                while(run_1 > 0 && j < program_array.length){
                  j++;
                  if(program_type[j] == "F_S"){
                    run_1++;
                  }else if(program_type[j] == "F_E"){
                    run_1--;
                  }
                }
              }else if(program_type[j] == "BRACKET_S"){
                var run_1 = 1;
                while(run_1 > 0 && j < program_array.length){
                  j++;
                  if(program_type[j] == "BRACKET_S"){
                    run_1++;
                  }else if(program_type[j] == "BRACKET_E"){
                    run_1--;
                  }
                }
              }
            }
            var end = j;
            if(program_type[j] == "COMMA"){
              judge_v = true;
            }else{
              judge_v = false;
            }
            result_array_f.push(program_array.slice(start,end));
            result_type_f.push(program_type.slice(start,end));
          }
          i = j;
          var result = [];
          for(var j = 0; j < result_type_f.length; j++){
            result.push(calculate(result_array_f[j],result_type_f[j],variable_value,def_value));
          }

          for(var j = 0; j < result.length; j++){
            variable_value[def_stack[0][j]] = result[j]
          }

          enja_run(def_stack[1],def_stack[2]);
        }else if(toHalfwidth(program_array[i]).toLowerCase() == "towa" || toHalfwidth(program_array[i]).toLowerCase() == "和歌山弁"){
          i++;
          var start = i;
          while(ope_check(program_type[i])){
            i++;
          }
          var end = i;
          i--;

          result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);

          if(isNaN(result)){
            result = toWa(result);
          }
          document.getElementById(out).innerHTML += result + "<br>";
        }
        break;

      case "RETURN":
        i++;
        var start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        var end = i;
        i--;
        result = calculate(program_array.slice(start,end),program_type.slice(start,end),variable_value,def_value);
        if(Array.isArray(result)){
          result = dimen_1(result);
        }
        if(result != undefined){
          return result;
        }else{
          return;
        }
      }
      
    if(performance.now() - start_time > 2000){
      i = program_type.length;
      time_out = true;
      console.error("!!time out");
      break;
    }
  }
}





function enja(txt,outp,debug){
  start_time = performance.now();
  out = outp;
  var input_txt = txt;
  document.getElementById(out).innerHTML = "";
  if(debug != undefined){
    var debug = document.getElementById(debug).checked;
  }else{
    var debug = false;
  }

  //全→半角
  full_half = {"＝":"=",
               "！":"!",
               "＞":">",
               "＜":"<",
               "＋":"+",
               "－":"-",
               "＊":"+",
               "／":"/",
               "％":"%",
               "＾":"^",
               "｛":"{",
               "｝":"}",
               "（":"(",
               "）":")",
               "［":"[",
               "］":"]",
               '”':'"',
               '“':'"',
               "；":";",
               "、":",",
               "＄":"$",
               "＃":"#",
               "×":"*", 
}

  //トークンの設定
  token = [["=","!",">","<","+","-","*","/","%","^","{","}","(",")","[","]",'"',";",",","$","&","#"],
           ["!=","<=",">=","==","**","+=","-=","*=","/=","^=","%=","$=","++","--","/*","/-","-/","//"],
           ["**="]];
  //演算子の設定
  purse  = {"+="    :"PLUS_EQUAL",
            "-="    :"MINUS_EQUAL",
            "*="    :"MULTI_EQUAL",
            "/="    :"DIVIS_EQUAL",
            "^="    :"POWER_EQUAL",
            "**="   :"POWER_EQUAL",
            "%="    :"REMAINDE_EQUAL",
            "$="    :"INT_QUOT_EQUAL",
            "++"    :"PLUS_PLUS",
            "--"    :"MINUS_MINUS",
            "+"     :"PLUS",
            "-"     :"MINUS",
            "*"     :"MULTI",
            "/"     :"DIVIS",
            "^"     :"POWER",
            "**"    :"POWER",
            "%"     :"REMAINDE",
            "$"     :"INT_QUOT",
            "=="    :"EQUAL",
            ">"     :"GREATER",
            "<"     :"LESS",
            ">="    :"GREATER_EQUAL",
            "<="    :"LESS_EQUAL",
            "!="    : "NOT_EQUAL",
            "{"     :"BRACE_S",
            "}"     :"BRACE_E",
            "("     :"PARAMS_S",
            ")"     :"PARAMS_E",
            "["     :"BRACKET_S",
            "]"     :"BRACKET_E",
            ","     :"COMMA",
            "."     :"PERIOD",
            "while" :"WHILE",
            "繰り返し":"WHILE",
            "if"    :"IF",
            "もし"  :"IF",
            "elif"  :"ELIF",
            "違えばもし":"ELIF",
            "else"  :"ELSE",
            "違えば" :"ELSE",
            "loop"  :"LOOP",
            "ループ" :"LOOP",
            "print" :"PRINT",
            "プリント":"PRINT",
            "log"   :"LOG",
            "ログ"  :"LOG",
            "/-"    :"COMMENT_S",
            "-/"    :"COMMENT_E",
            "//"    :"COMMENT",
            "towa"  :"FUNCTION",
            "和歌山弁":"FUNCTION",
            "floor" :"FUNCTION",
            "切り捨て":"FUNCTION",
            "sqrt"  :"FUNCTION",
            "平方根":"FUNCTION",
            "abs"   :"FUNCTION",
            "絶対値":"FUNCTION",
            "round" :"FUNCTION",
            "四捨五入":"FUNCTION",
            "random":"FUNCTION",
            "ランダム":"FUNCTION",
            "ceil"  :"FUNCTION",
            "切り上げ":"FUNCTION",
            "and"   :"AND",
            "&"     :"AND",
            "かつ":"AND",
            "or"    :"OR",
            "#"     :"OR",
            "もしくは":"OR",
            "pi"    :"VARIABLE",
            "円周率":"VARIABLE",
            "length":"FUNCTION",
            "長さ"  :"FUNCTION",
            "pop"   :"FUNCTION",
            "ポップ":"FUNCTION",
            "shift" :"FUNCTION",
            "シフト":"FUNCTION",
            "push"  :"FUNCTION",
            "プッシュ":"FUNCTION",
            "unshift":"FUNCTION",
            "アンシフト":"FUNCTION",
            "return":"RETURN",
            "戻り値" :"RETURN"
          }
  //イコールと代入の場合分け
  equal = ["while","繰り返し","if","もし","elif","違えばもし","print","プリント","log","ログ","towa","和歌山弁"];
  //演算子の優先順位
  ope_priority = {"PLUS":3,
                  "MINUS":3,
                  "MULTI":4,
                  "DIVIS":4,
                  "POWER":6,
                  "REMAINDE":5,
                  "INT_QUOT":5,
                  "EQUAL":2,
                  "GREATER":2,
                  "LESS":2,
                  "GREATER_EQUAL":2,
                  "LESS_EQUAL":2,
                  "NOT_EQUAL":2,
                  "AND":1,
                  "OR":0}

  program_divide = lexical(input_txt,token,full_half);
  program_element = purser(program_divide,purse,equal);
  

  program_array = flatten(program_element[0]);
  program_type = program_element[1];
  
  for(var i = 0; i < program_array.length; i++){

    switch(program_type[i]){
      case "PLUS":
      case "MINUS":
      case "MULTI":
      case "DIVIS":
      case "POWER":
      case "REMAINDE":
      case "INT_QUOT":
      case "FUNCTION":
      case "COMMA":
      case "EQUAL":
      case "GREATER":
      case "LESS":
      case "GREATER_EQUAL":
      case "LESS_EQUAL":
      case "NOT_EQUAL":
      case "AND":
      case "OR":
        while(ope_check(program_type[i])){
          i--;
        }
        i++;
        var start = i;
        while(ope_check(program_type[i])){
          i++;
        }
        var end = i;
        change_poland = poland(program_array.slice(start,end),program_type.slice(start,end),ope_priority);
        array_add = flatten(change_poland[0]);
        type_add = flatten(change_poland[1])
        program_array.splice(start,end-start,array_add);
        program_type.splice(start,end-start,type_add);
        program_array = flatten(program_array);
        program_type = flatten(program_type);
        break;
      default:
        break;
    }
  }
  program_array = flatten(program_array);
  program_type = flatten(program_type);



  

  
  for(var i = 0; i < program_type.length; i++){
    if(program_type[i] == "DEFINE"){
      var def_name = program_array[i+1];
      var def_variable = [];
      start_1 = i;
      while(program_type[i] != "BRACE_S" && i < program_type.length){
        i++;
        if(program_type[i] == "VARIABLE"){
          def_variable.push(program_array[i]);
        }
      }
      var start = i + 2;
      var run = 1;
      while(run > 0 && i < program_type.length){
        i++;
        if(program_type[i] == "BRACE_S"){
          run++;
        }else if(program_type[i] == "BRACE_E"){
          run--;
        }
      }
      var end = i + 1;

      var def_array = program_array.slice(start,end-1);
      var def_type = program_type.slice(start,end-1);

      for(var j = 0; j < def_array.length; j++){
        if(def_variable.indexOf(def_array[j]) != -1){
          def_type.splice(j,1,"VARIABLE");
        }
      }

      program_array.splice(start_1,end-start_1);
      program_type.splice(start_1,end-start_1);
      i -= end-start_1;
      def_value[def_name] = [def_variable,def_array,def_type]
    }
  }

  if(debug){
    console.log(program_array);
    console.log(program_type);
    console.log(def_value);
  }


  enja_run(program_array,program_type);
  
  if(debug){
    console.log(variable_value);
  }
  const end_time = performance.now();
  console.warn((end_time - start_time)+"ms");
}