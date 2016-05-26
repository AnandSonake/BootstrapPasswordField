window.bootstrappasswordfield= (function(window,document,undefined){
  var Bootstrappass= function (element)
  {
    this.element=element;
  };  
  var passelements=document.querySelectorAll('[data-bootstrappasswordfield-change]');  
  Bootstrappass.prototype={  
            BootstrapIt: function(){                  
                var random = 'data-bootstrappasswordfield-id-' + [ Math.floor( Math.random() * 9999 ) ];            
                var newElement=document.createElement('input');
                newElement.id=random;
                newElement.className = 'data-bootstrappasswordfield-checkbox';
                newElement.type = 'checkbox';
                newElement.setAttribute( 'data-bootstrappasswordfield-checkbox', '' );              
                this.element.parentNode.appendChild( newElement );
        }  
  };  
   for ( var i = 0; i < passelements.length; i++ ) {
        var newele=new Bootstrappass( passelements[i] );
        newele.BootstrapIt();
    }
  var showHide=function()
  {
      var lChildNodes = this.parentNode.childNodes;
      for(var i=0;i<lChildNodes.length;i++)
      {
          var self=lChildNodes[i];
          if ( ( self.nodeName.toLowerCase() === 'input' ) && ( self.hasAttribute( 'data-bootstrappasswordfield-change' ) ) ) {
          self.type = this.checked ? 'text' : 'password';
      }
      }
  };  
  var dataCheckbox = document.querySelectorAll( '[data-bootstrappasswordfield-checkbox]' );
  for ( var j = 0; j < dataCheckbox.length; j++ ) {
    dataCheckbox[j].onchange = showHide;
  }
})(window,document);