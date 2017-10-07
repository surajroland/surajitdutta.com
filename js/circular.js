/* Examples */
(function($) {

  $('.first.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.1,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.second.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.2,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.third.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.3,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.fourth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.4,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.fifth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.5,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.sixth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.6,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.seventh.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.7,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.eighth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.8,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.ninth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.9,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });

  $('.tenth.technical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 1.0,
    animation: false,
    lineCap: 'round',
    fill: {color: 'tomato'}
  });


  $('.first.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.1,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.second.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.2,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.third.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.3,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.fourth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.4,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.fifth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.5,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.sixth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.6,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.seventh.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.7,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.eighth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.8,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.ninth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 0.9,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
  });

  $('.tenth.nontechnical.circle').circleProgress({
    startAngle: -Math.PI/2 ,
    value: 1.0,
    animation: false,
    lineCap: 'round',
    fill: {color: '#555'}
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
