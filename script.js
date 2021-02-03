  'use strict';



  document.getElementById('form').slect.onchange = function () {


      location.href = document.getElementById('form').slect.value;

  }




let lang = document.querySelector('html').lang;
  let sort1a;
  let ssort1a;

  document.getElementById('f1').sort1.onchange = function () {
      
      sort1a = document.getElementById('f1').sort1.value;

      if (sort1a === '0') {

          document.getElementById('result1').textContent = '-----';
      } else if (sort1a === '1' && lang === 'ja') {

          document.getElementById('result1').textContent = '大型モニターにも対応の8K超高精細映像です';
      } else if (sort1a === '2' && lang === 'ja') {
          document.getElementById('result1').textContent = 'こちらは6K対応の高精細映像となります';
      } else if (sort1a === '3' && lang === 'ja') {
          document.getElementById('result1').textContent = 'こちらは4K対応の高画質映像となります';


      }else if (sort1a === '1' && lang === 'en'){
           document.getElementById('result1').textContent = '8K compatible with large monitors';
      }else if (sort1a === '2' && lang === 'en'){
          document.getElementById('result1').textContent = '6K high-definition video';
      }else if (sort1a === '3' && lang === 'en'){
          document.getElementById('result1').textContent = '4K high-definition video';
      }else if (sort1a === '1' && lang === 'zh'){
           document.getElementById('result1').textContent = '8K超高清视频能投影在大型显示器';
      }else if (sort1a === '2' && lang === 'zh'){
          document.getElementById('result1').textContent = '6K的高清视频';
      }else if (sort1a === '3' && lang === 'zh'){
          document.getElementById('result1').textContent = '4K的高清视频';
      }

  }


  let sort2a;
  let ssort2a;

  document.getElementById('f2').sort2.onchange = function () {
      sort2a = document.getElementById('f2').sort2.value;

     
      if (sort2a === '0') {

          document.getElementById('result2').textContent = '-----';
      } else if (sort2a === '1' && lang === 'ja') {

          document.getElementById('result2').textContent = '編集は不要な部分のカットのみ';
      } else if (sort2a === '2' && lang === 'ja') {
          document.getElementById('result2').textContent = '簡単な映像効果も追加します';
      } else if (sort2a === '3' && lang === 'ja') {
          document.getElementById('result2').textContent = '3Dアニメやモーショングラフィックス含む';


      }else if (sort2a === '1' && lang === 'en'){
           document.getElementById('result2').textContent = 'Only cut out unnecessary parts';
      }else if (sort2a === '2' && lang === 'en'){
          document.getElementById('result2').textContent = ' Cut out & add simple video effects';
      }else if (sort2a === '3' && lang === 'en'){
          document.getElementById('result2').textContent = 'Cut out & add 3D/motion effects';
      }else if (sort2a === '1' && lang === 'zh'){
           document.getElementById('result2').textContent = '削减不必要的部分的编辑';
      }else if (sort2a === '2' && lang === 'zh'){
          document.getElementById('result2').textContent = '削减不必要的部分添加简单的视频效果';
      }else if (sort2a === '3' && lang === 'zh'){
          document.getElementById('result2').textContent = '削减不必要的部分添加3D/动态图形';
      }


  }

  let sort3a;
  let ssort3a;

  document.getElementById('f3').sort3.onchange = function () {
      sort3a = document.getElementById('f3').sort3.value;

      
      
      if (sort3a === '0') {

          document.getElementById('result3').textContent = '-----';
      } else if (sort3a === '1' && lang === 'ja') {

          document.getElementById('result3').textContent = '音編集は行いません';
      } else if (sort3a === '2' && lang === 'ja') {
          document.getElementById('result3').textContent = 'BGM音楽を追加する編集のみ';
      } else if (sort3a === '3' && lang === 'ja') {
          document.getElementById('result3').textContent = '効果音や音質の調整も行います';


      }else if (sort3a === '1' && lang === 'en'){
           document.getElementById('result3').textContent = 'No sound editing';
      }else if (sort3a === '2' && lang === 'en'){
          document.getElementById('result3').textContent = 'Edit only to add BGM';
      }else if (sort1a === '3' && lang === 'en'){
          document.getElementById('result3').textContent = 'BGM&effects&adjust sound quality';
      }else if (sort3a === '1' && lang === 'zh'){
           document.getElementById('result3').textContent = '没有声音编辑';
      }else if (sort3a === '2' && lang === 'zh'){
          document.getElementById('result3').textContent = '仅编辑以添加背景音乐';
      }else if (sort3a === '3' && lang === 'zh'){
          document.getElementById('result3').textContent = '添加背景音乐和调整声音效果和音质';
      }



  }

  let sort4a;
  let ssort4a;

  document.getElementById('f4').sort4.onchange = function () {
      sort4a = document.getElementById('f4').sort4.value;

      
      if (sort4a === '0') {

          document.getElementById('result4').textContent = '-----';
      } else if (sort4a === '1' && lang === 'ja') {

          document.getElementById('result4').textContent = '照明機材をご用意させて頂きます';
      } else if (sort4a === '2' && lang === 'ja') {
          document.getElementById('result4').textContent = '機材はご自身でご用意頂きます';
      } else if (sort4a === '3' && lang === 'ja') {
          document.getElementById('result4').textContent = '野外撮影のみ等で照明が不要な場合';


      }else if (sort4a === '1' && lang === 'en'){
           document.getElementById('result4').textContent = 'We prepare lighting equipment';
      }else if (sort4a === '2' && lang === 'en'){
          document.getElementById('result4').textContent = 'You prepare the equipment yourself';
      }else if (sort4a === '3' && lang === 'en'){
          document.getElementById('result4').textContent = 'No need light for outdoor shoot etc.';
      }else if (sort4a === '1' && lang === 'zh'){
           document.getElementById('result4').textContent = '我们将准备照明设备';
      }else if (sort4a === '2' && lang === 'zh'){
          document.getElementById('result4').textContent = '您需要自己准备设备';
      }else if (sort4a === '3' && lang === 'zh'){
          document.getElementById('result4').textContent = '仅在户外拍摄不需要照明时';
      }

  }

  let sort5a;
  let ssort5a;

  document.getElementById('f5').sort5.onchange = function () {
      sort5a = document.getElementById('f5').sort5.value;

      
      if (sort5a === '0') {

          document.getElementById('result5').textContent = '-----';
      } else if (sort5a === '1' && lang === 'ja') {

          document.getElementById('result5').textContent = 'こちらで出演者ご用意は不要';
      } else if (sort5a === '2' && lang === 'ja') {
          document.getElementById('result5').textContent = '出演者を1人ご用意致します';
      } else if (sort5a === '3' && lang === 'ja') {
          document.getElementById('result5').textContent = '出演者を2人ご用意致します';
      }else if (sort5a === '4' && lang === 'ja') {
          document.getElementById('result5').textContent = '出演者を3人ご用意致します';
      }else if (sort5a === '5' && lang === 'ja') {
          document.getElementById('result5').textContent = '出演者を4人ご用意致します';
      }else if (sort5a === '6' && lang === 'ja') {
          document.getElementById('result5').textContent = '出演者を5人ご用意致します';
      }else if (sort5a === '7' && lang === 'ja') {
          document.getElementById('result5').textContent = '6人以上は別途費用ございます';
      }
else if (sort5a === '1' && lang === 'en'){
           document.getElementById('result5').textContent = 'No need to prepare performers';
      }else if (sort5a === '2' && lang === 'en'){
          document.getElementById('result5').textContent = 'We prepare 1 performer';
      }else if (sort5a === '3' && lang === 'en'){
          document.getElementById('result5').textContent = 'We prepare 2 performer';
      }else if (sort5a === '4' && lang === 'en'){
          document.getElementById('result5').textContent = 'We prepare 3 performer';
      }else if (sort5a === '5' && lang === 'en'){
          document.getElementById('result5').textContent = 'We prepare 4 performer';
      }else if (sort5a === '6' && lang === 'en'){
          document.getElementById('result5').textContent = 'We prepare 5 performer';
      }else if (sort5a === '7' && lang === 'en'){
          document.getElementById('result5').textContent = 'additional cost for 6 or more people';
      }

else if (sort5a === '1' && lang === 'zh'){
           document.getElementById('result5').textContent = '不需要准备表演者';
      }else if (sort5a === '2' && lang === 'zh'){
          document.getElementById('result5').textContent = '我们将准备一位表演者';
      }else if (sort5a === '3' && lang === 'zh'){
          document.getElementById('result5').textContent = '我们将准备二位表演者';
      }else if (sort5a === '4' && lang === 'zh'){
          document.getElementById('result5').textContent = '我们将准备三位表演者';
      }else if (sort5a === '5' && lang === 'zh'){
          document.getElementById('result5').textContent = '我们将准备四位表演者';
      }else if (sort5a === '6' && lang === 'zh'){
          document.getElementById('result5').textContent = '我们将准备五位表演者';
      }else if (sort5a === '7' && lang === 'zh'){
          document.getElementById('result5').textContent = '六位以上需支付额外费用';
      }


  }

  let sort6a;
  let ssort6a;

  document.getElementById('f6').sort6.onchange = function () {
      sort6a = document.getElementById('f6').sort6.value;

     
      if (sort6a === '0') {

          document.getElementById('result6').textContent = '-----';
      } else if (sort6a === '1' && lang === 'ja') {

          document.getElementById('result6').textContent = '字幕なし';
      } else if (sort6a === '2' && lang === 'ja') {
          document.getElementById('result6').textContent = '日本語の字幕を追加します';
      } else if (sort6a === '3' && lang === 'ja') {
          document.getElementById('result6').textContent = '英語の字幕を追加します';
      }else if (sort6a === '4' && lang === 'ja') {
          document.getElementById('result6').textContent = '中国語の字幕を追加します';
      }else if (sort6a === '5' && lang === 'ja') {
          document.getElementById('result6').textContent = '韓国語の字幕を追加します';
      }else if (sort6a === '6' && lang === 'ja') {
          document.getElementById('result6').textContent = 'その他言語の字幕を追加します';
      }
else if (sort6a === '1' && lang === 'en'){
           document.getElementById('result6').textContent = 'No subtitles';
      }else if (sort6a === '2' && lang === 'en'){
          document.getElementById('result6').textContent = 'Add Japanese subtitles';
      }else if (sort6a === '3' && lang === 'en'){
          document.getElementById('result6').textContent = 'Add English subtitles';
      }else if (sort6a === '4' && lang === 'en'){
          document.getElementById('result6').textContent = 'Add Chinese subtitles';
      }else if (sort6a === '5' && lang === 'en'){
          document.getElementById('result6').textContent = 'Add Korean subtitles';
      }else if (sort6a === '6' && lang === 'en'){
          document.getElementById('result6').textContent = 'Add subtitles in other languages';
      }
else if (sort6a === '1' && lang === 'zh'){
           document.getElementById('result6').textContent = '没有字幕';
      }else if (sort6a === '2' && lang === 'zh'){
          document.getElementById('result6').textContent = '添加日语字幕';
      }else if (sort6a === '3' && lang === 'zh'){
          document.getElementById('result6').textContent = '添加英文字幕';
      }else if (sort6a === '4' && lang === 'zh'){
          document.getElementById('result6').textContent = '添加中文字幕';
      }else if (sort6a === '5' && lang === 'zh'){
          document.getElementById('result6').textContent = '添加韩语字幕';
      }else if (sort6a === '6' && lang === 'zh'){
          document.getElementById('result6').textContent = '添加其他语言的字幕';
      }


  }

  let sort7a;
  let ssort7a;

  document.getElementById('f7').sort7.onchange = function () {
      sort7a = document.getElementById('f7').sort7.value;

      if (sort7a === '0') {

          document.getElementById('result7').textContent = '-----';
      } else if (sort7a === '1' && lang === 'ja') {

          document.getElementById('result7').textContent = '5分以内の映像作品';
      } else if (sort7a === '2' && lang === 'ja') {
          document.getElementById('result7').textContent = '30分以内の映像作品';
      } else if (sort7a === '3' && lang === 'ja') {
          document.getElementById('result7').textContent = '60分以内の映像作品';
      }else if (sort7a === '4' && lang === 'ja') {
          document.getElementById('result7').textContent = '2時間以内の映像作品';
      }else if (sort7a === '5' && lang === 'ja') {
          document.getElementById('result7').textContent = '3時間以内の映像作品';
      }
else if (sort7a === '1' && lang === 'en'){
           document.getElementById('result7').textContent = 'Video work within 5 minutes';
      }else if (sort7a === '2' && lang === 'en'){
          document.getElementById('result7').textContent = 'Video work within 30 minutes';
      }else if (sort7a === '3' && lang === 'en'){
          document.getElementById('result7').textContent = 'Video work within 60 minutes';
      }else if (sort7a === '4' && lang === 'en'){
          document.getElementById('result7').textContent = 'Video work within 2 hours';
      }else if (sort7a === '5' && lang === 'en'){
          document.getElementById('result7').textContent = 'Video work within 3 hours';
      }
else if (sort7a === '1' && lang === 'zh'){
           document.getElementById('result7').textContent = '5分钟内完成视频工作';
      }else if (sort7a === '2' && lang === 'zh'){
          document.getElementById('result7').textContent = '30分钟内完成视频工作';
      }else if (sort7a === '3' && lang === 'zh'){
          document.getElementById('result7').textContent = '60分钟内完成视频工作';
      }else if (sort7a === '4' && lang === 'zh'){
          document.getElementById('result7').textContent = '2小时内完成视频工作';
      }else if (sort7a === '5' && lang === 'zh'){
          document.getElementById('result7').textContent = '3小时内完成视频工作';
      }

  }

  let sort8a;
  let ssort8a;

  document.getElementById('f8').sort8.onchange = function () {
      sort8a = document.getElementById('f8').sort8.value;

      if (sort8a === '0') {

          document.getElementById('result8').textContent = '-----';
      } else if (sort8a === '1' && lang === 'ja') {

          document.getElementById('result8').textContent = 'データのかたちでお渡しします';
      } else if (sort8a === '2' && lang === 'ja') {
          document.getElementById('result8').textContent = 'DVDメディア料金は別途必要になります';
      } else if (sort8a === '3' && lang === 'ja') {
          document.getElementById('result8').textContent = 'Blue-rayメディア料金は別途必要になります';
      }
else if (sort8a === '1' && lang === 'en'){
           document.getElementById('result8').textContent = 'Delivered in the form of data';
      }else if (sort8a === '2' && lang === 'en'){
          document.getElementById('result8').textContent = 'DVD media fee charged separately';
      }else if (sort8a === '3' && lang === 'en'){
          document.getElementById('result8').textContent = 'Blu-ray media fee charged separately';
      }
else if (sort8a === '1' && lang === 'zh'){
           document.getElementById('result8').textContent = '我们将以数据形式提供';
      }else if (sort8a === '2' && lang === 'zh'){
          document.getElementById('result8').textContent = 'DVD媒体费将单独收取';
      }else if (sort8a === '3' && lang === 'zh'){
          document.getElementById('result8').textContent = '蓝光媒体费用将另行收取';
      }

  }


  let f1aitem = [0, 186000, 162000, 156000];
  let f2aitem = [0, 42000, 89000, 165000];
  let f3aitem = [0, 0, 38000, 67000];
  let f4aitem = [0, 16000, 8200, 0];
  let f5aitem = [0, 0, 22000, 44000, 66000, 88000, 110000, 176000];
  let f6aitem = [0, 0, 36000, 36000, 32000, 32000, 45000];
  let f7aitem = [0, 1, 1.2, 1.6, 2, 2.3];
  let f8aitem = [0, 12000, 23000, 32000];




  document.getElementById('ff1').ssort1.onchange = function () {
      ssort1a = document.getElementById('ff1').ssort1.value;
  }

  document.getElementById('ff2').ssort2.onchange = function () {
      ssort2a = document.getElementById('ff2').ssort2.value;
  }

  document.getElementById('ff3').ssort3.onchange = function () {
      ssort3a = document.getElementById('ff3').ssort3.value;
  }

  document.getElementById('ff4').ssort4.onchange = function () {
      ssort4a = document.getElementById('ff4').ssort4.value;
  }

  document.getElementById('ff5').ssort5.onchange = function () {
      ssort5a = document.getElementById('ff5').ssort5.value;
  }

  document.getElementById('ff6').ssort6.onchange = function () {
      ssort6a = document.getElementById('ff6').ssort6.value;
  }

  document.getElementById('ff7').ssort7.onchange = function () {
      ssort7a = document.getElementById('ff7').ssort7.value;
  }

  document.getElementById('ff8').ssort8.onchange = function () {
      ssort8a = document.getElementById('ff8').ssort8.value;
  }



  document.getElementById('button01').onclick = function () {
      document.getElementById('goukei').textContent = `${f1aitem[sort1a]+f2aitem[sort2a]+f3aitem[sort3a]+f4aitem[sort4a]+f5aitem[sort5a]+f6aitem[sort6a]+f8aitem[sort8a]*f7aitem[sort7a]}`;

  }
  document.getElementById('button01s').onclick = function () {
      document.getElementById('goukeis').textContent = `${f1aitem[ssort1a]+f2aitem[ssort2a]+f3aitem[ssort3a]+f4aitem[ssort4a]+f5aitem[ssort5a]+f6aitem[ssort6a]+f8aitem[ssort8a]*f7aitem[ssort7a]}`;

  }




  let sort9a;
  let ssort9a;

  document.getElementById('f9').sort9.onchange = function () {
      sort9a = document.getElementById('f9').sort9.value;

      
      if (sort9a === '0') {

          document.getElementById('result9').textContent = '-----';
      } else if (sort9a === '1' && lang === 'ja') {

          document.getElementById('result9').textContent = 'まずはお試し頂けます';
      } else if (sort9a === '2' && lang === 'ja') {
          document.getElementById('result9').textContent = '1か月間サポートいたします';
      } else if (sort9a === '3' && lang === 'ja') {
          document.getElementById('result9').textContent = '3か月のお得なコースです';
      } else if (sort9a === '4' && lang === 'ja') {
          document.getElementById('result9').textContent = 'さらに長期割の6か月コース';
      }
else if (sort9a === '1' && lang === 'en'){
           document.getElementById('result9').textContent = 'You can try it first';
      }else if (sort9a === '2' && lang === 'en'){
          document.getElementById('result9').textContent = 'We will support you for one month';
      }else if (sort9a === '3' && lang === 'en'){
          document.getElementById('result9').textContent = 'the reasonable course for 3 months';
      } else if (sort9a === '4' && lang === 'en'){
          document.getElementById('result9').textContent = 'the best value course for 6 months';
      }
else if (sort9a === '1' && lang === 'zh'){
           document.getElementById('result9').textContent = '你可以先试试';
      }else if (sort9a === '2' && lang === 'zh'){
          document.getElementById('result9').textContent = '我们将为您提供一个月的支持';
      }else if (sort9a === '3' && lang === 'zh'){
          document.getElementById('result9').textContent = '3个月良好性价比的课程';
      } else if (sort9a === '4' && lang === 'zh'){
          document.getElementById('result9').textContent = '进一步的长期折扣适用';
      }


  }

  let sort10a;
  let ssort10a;

  document.getElementById('f10').sort10.onchange = function () {
      sort10a = document.getElementById('f10').sort10.value;

     if (sort10a === '0') {

          document.getElementById('result10').textContent = '-----';
      } else if (sort10a === '1' && lang === 'ja') {

          document.getElementById('result10').textContent = '1～5台のセッティングを致します';
      } else if (sort10a === '2' && lang === 'ja') {
          document.getElementById('result10').textContent = '6～10台のセッティングを致します';
      } else if (sort10a === '3' && lang === 'ja') {
          document.getElementById('result10').textContent = '11～15台のセッティングを致します';
      } else if (sort10a === '4' && lang === 'ja') {
          document.getElementById('result10').textContent = '16台以上は別途料金必要な場合あり';
      }
else if (sort10a === '1' && lang === 'en'){
           document.getElementById('result10').textContent = 'We will set up 1 to 5 PCs';
      }else if (sort10a === '2' && lang === 'en'){
          document.getElementById('result10').textContent = 'We will set up 6 to 10 PCs';
      }else if (sort10a === '3' && lang === 'en'){
          document.getElementById('result10').textContent = 'We will set up 11 to 15 PCs';
      } else if (sort10a === '4' && lang === 'en'){
          document.getElementById('result10').textContent = '16 or more required additional charges';
      }
else if (sort10a === '1' && lang === 'zh'){
           document.getElementById('result10').textContent = '我们将安装1至5台PC';
      }else if (sort10a === '2' && lang === 'zh'){
          document.getElementById('result10').textContent = '我们将安装6至10台PC';
      }else if (sort10a === '3' && lang === 'zh'){
          document.getElementById('result10').textContent = '我们将安装11至15台PC';
      } else if (sort10a === '4' && lang === 'zh'){
          document.getElementById('result10').textContent = '16台或更多台PC可能需要额外付费';
      }


  }

  let sort11a;
  let ssort11a;

  document.getElementById('f11').sort11.onchange = function () {
      sort11a = document.getElementById('f11').sort11.value;

      if (sort11a === '0') {

          document.getElementById('result11').textContent = '-----';
      } else if (sort11a === '1' && lang === 'ja') {

          document.getElementById('result11').textContent = '配信機器はご自身でご用意頂きます';
      } else if (sort11a === '2' && lang === 'ja') {
          document.getElementById('result11').textContent = 'スイッチャー等すべてレンタル可能です';
      } 
else if (sort11a === '1' && lang === 'en'){
           document.getElementById('result11').textContent = 'You need to prepare distribution device yourself';
      }else if (sort11a === '2' && lang === 'en'){
          document.getElementById('result11').textContent = 'All switchers etc. can be rented';
      }
else if (sort11a === '1' && lang === 'zh'){
           document.getElementById('result11').textContent = '您将需要自己准备分配设备。';
      }else if (sort11a === '2' && lang === 'zh'){
          document.getElementById('result11').textContent = '所有切换台等均可租用';
      }

  }


  let f9aitem = [0, 360000, 260000, 190000];
  let f10aitem = [0, 1000, 1200, 1600, 2000];
  let f11aitem = [0, 1000, 1200, 1600];

  document.getElementById('ff9').ssort9.onchange = function () {
      ssort9a = document.getElementById('ff9').ssort9.value;
  }

  document.getElementById('ff10').ssort10.onchange = function () {
      ssort10a = document.getElementById('ff10').ssort10.value;
  }

  document.getElementById('ff11').ssort11.onchange = function () {
      ssort11a = document.getElementById('ff11').ssort11.value;
  }




  document.getElementById('button02').onclick = function () {
      document.getElementById('goukei2').textContent = `${f9aitem[sort9a]+f10aitem[sort10a]+f11aitem[sort11a]}`;

  }

  document.getElementById('button02s').onclick = function () {
      document.getElementById('goukei2s').textContent = `${f9aitem[ssort9a]+f10aitem[ssort10a]+f11aitem[ssort11a]}`;

  }


  let sort12a;
  let ssort12a;

  document.getElementById('f12').sort12.onchange = function () {
      sort12a = document.getElementById('f12').sort12.value;



      if (sort12a === '0') {

          document.getElementById('result12').textContent = '-----';
      } else if (sort12a === '1' && lang === 'ja') {

          document.getElementById('result12').textContent = 'ご自宅に撮影に伺います';
      } else if (sort12a === '2' && lang === 'ja') {
          document.getElementById('result12').textContent = '式場をご用意致します';
      } else if (sort12a === '3' && lang === 'ja') {
          document.getElementById('result12').textContent = '当スタジオにて撮影を行います';
      } 
else if (sort12a === '1' && lang === 'en'){
           document.getElementById('result12').textContent = 'We will come to your home to shoot';
      }else if (sort12a === '2' && lang === 'en'){
          document.getElementById('result12').textContent = 'We will prepare a wedding hall';
      }else if (sort12a === '3' && lang === 'en'){
          document.getElementById('result12').textContent = 'We will shoot at our studio';
      } 
else if (sort12a === '1' && lang === 'zh'){
           document.getElementById('result12').textContent = '我们会来你家拍摄';
      }else if (sort12a === '2' && lang === 'zh'){
          document.getElementById('result12').textContent = '我们将准备一个婚礼大厅';
      }else if (sort12a === '3' && lang === 'zh'){
          document.getElementById('result12').textContent = '我们将在我们的工作室拍摄';
      } 

  }

  let sort13a;
  let ssort13a;

  document.getElementById('f13').sort13.onchange = function () {
      sort13a = document.getElementById('f13').sort13.value;


      if (sort13a === '0') {

          document.getElementById('result13').textContent = '-----';
      } else if (sort13a === '1' && lang === 'ja') {

          document.getElementById('result13').textContent = 'ウエディングドレス等全てご用意致します';
      } else if (sort13a === '2' && lang === 'ja') {
          document.getElementById('result13').textContent = 'ご自身で衣装はご用意頂きます';
      } 
else if (sort13a === '1' && lang === 'en'){
           document.getElementById('result13').textContent = 'We will prepare all wedding dresses etc.';
      }else if (sort13a === '2' && lang === 'en'){
          document.getElementById('result13').textContent = 'You will need to prepare your own costume';
      }
else if (sort13a === '1' && lang === 'zh'){
           document.getElementById('result13').textContent = '我们将准备所有婚纱等。。';
      }else if (sort13a === '2' && lang === 'zh'){
          document.getElementById('result13').textContent = '您将需要准备自己的服装';
      }

  }

  let sort14a;
  let ssort14a;

  document.getElementById('f14').sort14.onchange = function () {
      sort14a = document.getElementById('f14').sort14.value;


if (sort14a === '0') {

          document.getElementById('result14').textContent = '-----';
      } else if (sort14a === '1' && lang === 'ja') {

          document.getElementById('result14').textContent = 'こちらではご用意致しません';
      } else if (sort14a === '2' && lang === 'ja') {
          document.getElementById('result14').textContent = '司会者の手配をさせて頂きます';
      } else if (sort14a === '3' && lang === 'ja') {
          document.getElementById('result14').textContent = '宗教に合わせた手配を行わせて頂きます';
      } else if (sort14a === '4' && lang === 'ja') {
          document.getElementById('result14').textContent = '両方の手配をさせて頂きます';
      }
else if (sort14a === '1' && lang === 'en'){
           document.getElementById('result14').textContent = 'You need to prepare by yourself';
      }else if (sort14a === '2' && lang === 'en'){
          document.getElementById('result14').textContent = 'We will arrange a moderator';
      }else if (sort14a === '3' && lang === 'en'){
          document.getElementById('result14').textContent = 'We will make arrangements for religions.';
      } else if (sort14a === '4' && lang === 'en'){
          document.getElementById('result14').textContent = 'We will arrange both';
      }
else if (sort14a === '1' && lang === 'zh'){
           document.getElementById('result14').textContent = '不需要主持人或宗教人士';
      }else if (sort14a === '2' && lang === 'zh'){
          document.getElementById('result14').textContent = '我们将安排主持人';
      }else if (sort14a === '3' && lang === 'zh'){
          document.getElementById('result14').textContent = '我们将根据您的宗教信仰进行安排';
      } else if (sort14a === '4' && lang === 'zh'){
          document.getElementById('result14').textContent = '我们会同时安排';
      }
  }


  let f12aitem = [0, 190000, 360000, 280000];
  let f13aitem = [0, 52000, 0];
  let f14aitem = [0, 0, 48000, 63000, 120000];


  document.getElementById('ff12').ssort12.onchange = function () {
      ssort12a = document.getElementById('ff12').ssort12.value;
  }

  document.getElementById('ff13').ssort13.onchange = function () {
      ssort13a = document.getElementById('ff13').ssort13.value;
  }

  document.getElementById('ff14').ssort14.onchange = function () {
      ssort14a = document.getElementById('ff14').ssort14.value;
  }






  document.getElementById('button03').onclick = function () {
      document.getElementById('goukei3').textContent = `${f12aitem[sort12a]+f13aitem[sort13a]+f14aitem[sort14a]}`;

  }

  document.getElementById('button03s').onclick = function () {
      document.getElementById('goukei3s').textContent = `${f12aitem[ssort12a]+f13aitem[ssort13a]+f14aitem[ssort14a]}`;

  }


  let sort15a;
  let ssort15a;

  document.getElementById('ff15').ssort15.onchange = function () {
      ssort15a = document.getElementById('ff15').ssort15.value;
  }

  document.getElementById('f15').sort15.onchange = function () {
      sort15a = document.getElementById('f15').sort15.value;



      if (sort15a === '0') {

          document.getElementById('result15').textContent = '-----';
      } else if (sort15a === '1' && lang === 'ja') {

          document.getElementById('result15').textContent = '気軽にお試し頂けるコースです';
      } else if (sort15a === '2' && lang === 'ja') {
          document.getElementById('result15').textContent = '割引が適用のお得なコースです';
      } else if (sort15a === '3' && lang === 'ja') {
          document.getElementById('result15').textContent = '登録者1万人にむけて徹底サポート致します';
      }
else if (sort15a === '1' && lang === 'en'){
           document.getElementById('result15').textContent = 'a course that you can feel free to try';
      }else if (sort15a === '2' && lang === 'en'){
          document.getElementById('result15').textContent = 'This is a great course with discounts';
      }else if (sort15a === '3' && lang === 'en'){
          document.getElementById('result15').textContent = 'support for 10,000 registrants';
      }
      
else if (sort15a === '1' && lang === 'zh'){
           document.getElementById('result15').textContent = '这是您可以随意尝试的课程';
      }else if (sort15a === '2' && lang === 'zh'){
          document.getElementById('result15').textContent = '这是一个很棒的折扣课程';
      }else if (sort15a === '3' && lang === 'zh'){
          document.getElementById('result15').textContent = '我们将为10,000名注册人提供全面支持';
      }


  }

  let sort16a;
  let ssort16a;



  document.getElementById('ff16').ssort16.onchange = function () {
      ssort16a = document.getElementById('ff16').ssort16.value;
  }

  document.getElementById('f16').sort16.onchange = function () {
      sort16a = document.getElementById('f16').sort16.value;

      if (sort16a === '0') {

          document.getElementById('result16').textContent = '-----';
      } else if (sort16a === '1' && lang === 'ja') {

          document.getElementById('result16').textContent = 'カメラはご自身でご用意頂きます';
      } else if (sort16a === '2' && lang === 'ja') {
          document.getElementById('result16').textContent = '各メーカー取り揃えております';
      } else if (sort16a === '3' && lang === 'ja') {
          document.getElementById('result16').textContent = 'より高画質な映像撮影ができるカメラです';
      } else if (sort16a === '4' && lang === 'ja') {
          document.getElementById('result16').textContent = '最高画質で撮影可能な機材をご用意します';
      }
else if (sort16a === '1' && lang === 'en'){
           document.getElementById('result16').textContent = 'You will need to prepare your own camera';
      }else if (sort16a === '2' && lang === 'en'){
          document.getElementById('result16').textContent = 'We have cameras from each manufacturer';
      }else if (sort16a === '3' && lang === 'en'){
          document.getElementById('result16').textContent = 'cameras that can shoot higher quality images.';
      } else if (sort16a === '4' && lang === 'en'){
          document.getElementById('result16').textContent = 'equipments can shoot with the highest image quality';
      }
else if (sort16a === '1' && lang === 'zh'){
           document.getElementById('result16').textContent = '您将需要准备自己的相机';
      }else if (sort16a === '2' && lang === 'zh'){
          document.getElementById('result16').textContent = '我们有来自每个制造商的相机';
      }else if (sort16a === '3' && lang === 'zh'){
          document.getElementById('result16').textContent = '是可以拍摄更高质量图像的相机的';
      } else if (sort16a === '4' && lang === 'zh'){
          document.getElementById('result16').textContent = '我们将准备可以拍摄最高图像质量的设备';
      }

  }

  let sort17a;
  let ssort17a;

  document.getElementById('ff17').ssort17.onchange = function () {
      ssort17a = document.getElementById('ff17').ssort17.value;
  }

  document.getElementById('f17').sort17.onchange = function () {
      sort17a = document.getElementById('f17').sort17.value;

      if (sort17a === '0') {

          document.getElementById('result17').textContent = '-----';
      } else if (sort17a === '1' && lang === 'ja') {

          document.getElementById('result17').textContent = '照明等はご自身でご用意頂きます';
      } else if (sort17a === '2' && lang === 'ja') {
          document.getElementById('result17').textContent = '照明機器のみこちらでご用意致します';
      } else if (sort17a === '3' && lang === 'ja') {
          document.getElementById('result17').textContent = 'マイクのみこちらでご用意致します';
      } else if (sort17a === '4' && lang === 'ja') {
          document.getElementById('result17').textContent = '両方のご用意をこちらでさせて頂きます';
      }
else if (sort17a === '1' && lang === 'en'){
           document.getElementById('result17').textContent = 'You need to prepare your lighting/mic';
      }else if (sort17a === '2' && lang === 'en'){
          document.getElementById('result17').textContent = 'We will prepare only lighting equipment';
      }else if (sort17a === '3' && lang === 'en'){
          document.getElementById('result17').textContent = 'We will prepare only the mic';
      } else if (sort17a === '4' && lang === 'en'){
          document.getElementById('result17').textContent = 'We will prepare both mic and lighting';
      }
else if (sort17a === '1' && lang === 'zh'){
           document.getElementById('result17').textContent = '您将需要准备自己的照明设备等';
      }else if (sort17a === '2' && lang === 'zh'){
          document.getElementById('result17').textContent = '我们只有照明设备';
      }else if (sort17a === '3' && lang === 'zh'){
          document.getElementById('result17').textContent = '我们只有麦克风';
      } else if (sort17a === '4' && lang === 'zh'){
          document.getElementById('result17').textContent = '我们将在这里准备两个';
      }

  }


  let f15aitem = [0, 53000, 128000, 248000];
  let f16aitem = [0, 56000, 78000, 120000];
  let f17aitem = [0, 0, 38000, 26000, 78000];



  document.getElementById('button04').onclick = function () {
      document.getElementById('goukei4').textContent = `${f15aitem[sort15a]+f16aitem[sort16a]+f17aitem[sort17a]}`;

  }

  document.getElementById('button04s').onclick = function () {
      document.getElementById('goukei4s').textContent = `${f15aitem[ssort15a]+f16aitem[ssort16a]+f17aitem[ssort17a]}`;

  }

  /* let sorta;
          
          document.getElementById('form01').sort001.onchange = function(){
            sorta = parseInt(document.getElementById('form01').sort001.value);
          }
          
          let coursea;
          
          document.getElementById('form02').course001.onchange = function() {
        coursea = parseInt(document.getElementById('form02').course001.value);
          }
          
          document.getElementById('button1').onclick =function(){
              document.getElementById('result').textContent = `${sorta + coursea}`;
          }*/