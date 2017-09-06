var abi;
var myContractInstance;
var MyContract;
var web3;

function check_test(web2,abi2,MyContract2,myContractInstance2){
    console.log("It's working! :D");
    console.log("web2 =>"+web2, "abi=>"+abi2,"MyContract2=>"+MyContract2,"myContractInstance2=>"+myContractInstance2 );
      abi=abi2;
      MyContract=MyContract2;
      myContractInstance=myContractInstance2;
      web3 = web2;
    return "It's working!";
}

function sample_tx(){
web3.eth.sendTransaction({from:web3.eth.accounts[0],to:'0xcb45d75b3b65885a394a4272c647a7ec3f8a9d57',
value: web3.fromWei((0), 'wei')},function(err, result){
                      if(!err){
                        console.log(result);
                      } else {
                        console.log(err);
                      }
                    });
}
