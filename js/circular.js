/* Examples */
(function($) {

  $('.first.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.1,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.second.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.2,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.third.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.3,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.fourth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.4,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.fifth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.5,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.sixth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.6,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.seventh.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.7,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.eighth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.8,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.ninth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.9,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });

  $('.tenth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 1.0,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'},
    size: 80
  });


  $('.first.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.1,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.second.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.2,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.third.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.3,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.fourth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.4,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.fifth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.5,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.sixth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.6,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.seventh.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.7,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.eighth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.8,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.ninth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.9,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  $('.tenth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 1.0,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'},
    size: 80
  });

  // $('.second.circle').circleProgress({
  //   value: 0.6
  // }).on('circle-animation-progress', function(event, progress) {
  //   $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  // });
  //
  //
  // $('.third.circle').circleProgress({
  //   value: 0.75,
  //   fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
  // }).on('circle-animation-progress', function(event, progress, stepValue) {
  //   $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  // });
  //
  //
  // var c4 = $('.forth.circle');
  //
  // c4.circleProgress({
  //   startAngle: -Math.PI / 4 * 3,
  //   value: 0.5,
  //   lineCap: 'round',
  //   fill: {color: '#ffa500'}
  // });
  //
  //
  // // Let's emulate dynamic value update
  // setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
  // setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
  // setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);
  //
  //
  // $('.fifth.circle').circleProgress({
  //   value: 0.7
  //
  // });
})(jQuery);
