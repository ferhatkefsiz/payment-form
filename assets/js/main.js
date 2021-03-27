// Index.html 

// Pop up function for product

function popup() {
  window.open('/html/paymentform.html', 'width=1856,height=800,left=250,top=100,scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no')
}


// Ödeme.html 

/* Optional Javascript to close the radio button version by clicking it again */
var myRadios = document.getElementsByName('tabs2');
var setCheck;
var x = 0;
for (x = 0; x < myRadios.length; x++) {
  myRadios[x].onclick = function () {
    if (setCheck != this) {
      setCheck = this;
    } else {
      this.checked = false;
      setCheck = null;
    }
  };
}
