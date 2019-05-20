/*global $*/
$(document).ready(function(){
  
function score_indicate(){
  let subject_points = [Number($('#national_language').val()),
                        Number($('#english').val()),
                        Number($('#mathematics').val()),
                        Number($('#science').val()),
                        Number($('#society').val())
                        ];
                          
  let sum = subject_points[0];
  sum = sum + subject_points[1];
  sum = sum + subject_points[2];
  sum = sum + subject_points[3];
  sum = sum + subject_points[4];
  console.log(sum);
  
//    変数subject_pointsを設定#id内のvalを取ってきなさい
//    Numberオブジェクトは引っ張ってきたval値を数字として変換する。
//    [Number($('#national_language').val()), Number($('#english').val()), Number($('#mathematics').val()), Number($('#science').val()), Number($('#society').val()) ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される

    $("#sum_indicate").text(sum);
    
    // ここに、上記を参考にして平均点を出力する処理を書き込む
  let number = subject_points.length;
  let average = sum /number;
    $("#average_indicate").text(average);
};
  
  function get_achievement(){
//  const average = document.getElementById(average_indicate);
  let average_display=$('#average_indicate').text()
//  console.log(average_display);
  let answer;
  if (average_display >= 80){
    //この部分所処理の仕方
    answer = "A";
  }
  else if (average_display >= 60){
    answer =  "B";
  }
  else if (average_display >= 40){
    answer = "C";
  }
  else {
    answer = "D";
  }
  console.log(answer);
  $("#evaluation").text(answer) ;

  
  };
      
  
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
 

  function get_pass_or_failure(){
    
  let subject_points = [Number($('#national_language').val()),
                        Number($('#english').val()),
                        Number($('#mathematics').val()),
                        Number($('#science').val()),
                        Number($('#society').val())
                        ];
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
  let number = subject_points.length;
  //console.log(number);
  //console.log(subject_points);
  let judge
  for(let i=0; i<number; i++){
  if (subject_points[i] < 60){
    judge = "不合格";
    break}
    else{
      judge = "合格"
    }
  }
  console.log(judge);
  $("#judge").text(judge);
};

  function judgement(){
    let finalEvaluation = $('#evaluation').text();
    let finalJudge = $('#judge').text();

    
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。
    // （ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${finalEvaluation}です。${finalJudge}です。</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
// // ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、
// 書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。
// 課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// // 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない

