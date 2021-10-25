new CircleType(document.getElementById('arc1')).radius(260);
new CircleType(document.getElementById('arc2')).radius(260);
new CircleType(document.getElementById('arc3')).radius(260);
new CircleType(document.getElementById('arc4')).radius(260);
new CircleType(document.getElementById('arc5')).radius(260).dir(-1);
new CircleType(document.getElementById('arc6')).radius(260).dir(-1);
new CircleType(document.getElementById('arc7')).radius(260).dir(-1);

$('.outer-1').css({'transform':'rotate(284deg)'})
$('.outer-2').css({'transform':'rotate(335deg)'})
$('.outer-3').css({'transform':'rotate(24deg)'})
$('.outer-4').css({'transform':'rotate(76deg)'})
$('.outer-5').css({'transform':'rotate(309deg)'})
$('.outer-7').css({'transform':'rotate(49deg)'})

$('.outer-1').hover(function() {
    $(this).css({
        'transform':'scale(1.5) rotate(284deg)'
    })
}, function() {
    $(this).css({
        'transform':'scale(1) rotate(284deg)'
    })
})

$('.outer-2').hover(function() {
    $(this).css({
        'transform':'scale(1.5) rotate(335deg)'
    })
}, function() {
    $(this).css({
        'transform':'scale(1) rotate(335deg)'
    })
})

$('.outer-3').hover(function() {
    $(this).css({
        'transform':'scale(1.5) rotate(24deg)'
    })
}, function() {
    $(this).css({
        'transform':'scale(1) rotate(24deg)'
    })
})

$('.outer-4').hover(function() {
    $(this).css({
        'transform':'scale(1.5) rotate(76deg)'
    })
}, function() {
    $(this).css({
        'transform':'scale(1) rotate(76deg)'
    })
})

$('.outer-5').hover(function() {
    $(this).css({
        'transform':'scale(1.5) rotate(309deg)'
    })
}, function() {
    $(this).css({
        'transform':'scale(1) rotate(309deg)'
    })
})

$('.outer-7').hover(function() {
    $(this).css({
        'transform':'scale(1.5) rotate(49deg)'
    })
}, function() {
    $(this).css({
        'transform':'scale(1) rotate(49deg)'
    })
})

new CircleType(document.getElementById('inner-arc1')).radius(150);
new CircleType(document.getElementById('inner-arc2')).radius(120);
new CircleType(document.getElementById('inner-arc3')).radius(70);
new CircleType(document.getElementById('inner-arc4')).radius(70).dir(-1);
new CircleType(document.getElementById('inner-arc5')).radius(120).dir(-1);
new CircleType(document.getElementById('inner-arc6')).radius(150).dir(-1);