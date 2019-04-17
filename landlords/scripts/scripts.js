console.log("Hello World!");

var elServicesRental = document.getElementById('listing');
var elServicesManage = document.getElementById('management');
var elListingBtn = document.querySelector('.rental-listing');
var elManageBtn = document.querySelector('.rental-manage');


elServicesRental.style.display = 'none';
elServicesManage.style.display = 'none';

elListingBtn.addEventListener('click', function(e) {
  elServicesRental.style.display = 'grid';
  elServicesManage.style.display = 'none';
});

elManageBtn.addEventListener('click', function(e) {
  elServicesRental.style.display = 'none';
  elServicesManage.style.display = 'grid';
});
