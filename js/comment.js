// 导航栏
var show = true
$('.nav-move').click(function () {
  if (show) {
    $('.headerm').css({ 'top': '65px', 'opacity': '1' })
    show = !show
  } else {
    $('.headerm').css({ 'top': '-300%', 'opacity': '0' })
    show = !show
  }
})
// 关于我们
$('.aboutus-nav ul li').click(function () {
  $(this).addClass('aboutus-navact').siblings().removeClass('aboutus-navact')
  $('.aboutus-list>div').removeClass('show').addClass('hide')
  $('.aboutus-list>div').eq($(this).index()).removeClass('hide').addClass('show')
})
$('.technologyaboutus-nav ul li').click(function () {
  $(this).addClass('technologyaboutus-navact').siblings().removeClass('technologyaboutus-navact')
  $('.technologyaboutus-list>div').removeClass('show').addClass('hide')
  $('.technologyaboutus-list>div').eq($(this).index()).removeClass('hide').addClass('show')
})
$('.technologylist-span span').click(function () {
  $(this).addClass('span-act').siblings().removeClass('span-act')
  $('.technologylist>div').removeClass('show').addClass('hide')
  $('.technologylist>div').eq($(this).index()).removeClass('hide').addClass('show')
})
// 提交简历
$('.uplodebtn').click(function () {
  $('.ejectbox').css('display', 'block')
  // $('body').css('overflow','hidden')
})
$('.ejectbox').click(function () {
  $(this).css('display', 'none')
})
// 产品中心
$('.wrap-productnav div').click(function () {
  $('.wrap-productnav div').find('span').removeClass('liact')
  console.log($(this))
  $(this).find('span').addClass('liact')
  $('.productclassification-box>div').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
  // productclassification-box
})
// 发展历程
$('.developmentlistbox').on("swipeleft", function () {
  alert("You swiped left!");
});
$(".developmentlistbox").on("swiperight", function () {
  alert("You swiped right!");
});

// 公共
$('.wrapbox li').click(function() {
  $(this).addClass('wrapbox-act').siblings().removeClass('wrapbox-act')
  $('.box>div').removeClass('showblock').addClass('showhide')
  $('.box>div').eq($(this).index()).removeClass('showhide')
})
