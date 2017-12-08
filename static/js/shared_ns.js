var Shared = {};

Trillo.prePageShown = function() {
  $('body').attr('data-ma-theme', "green");
  // Active Stat
  $('body').on('focus', '.search__text', function() {
    $(this).closest('.search').addClass('search--focus');
  });

  // Clear
  $('body').on('blur', '.search__text', function() {
    $(this).val('');
    $(this).closest('.search').removeClass('search--focus');
  });
}