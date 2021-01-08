const gridContainer= document.querySelector(".container");
const counter= document.querySelector(".counter");
const diffSelect= document.querySelector(".difficulty");

window.addEventListener("DOMContentLoaded", function(){

	let howManyBlocks=8;
	let arrayOfBlocks=[];
	let timeout=2000;

	diffSelect.addEventListener("change", function(e){
		gridContainer.innerHTML="";
		arrayOfBlocks=[];
		switch(e.target.value){
			case("8"):

			gridContainer.style.gridTemplateColumns="repeat(4,1fr)";
			break;

			case("18"):
			gridContainer.style.gridTemplateColumns="repeat(6,1fr)";

			break;
		}

		howManyBlocks=e.target.value;
		renderBlocks();
	})

function renderBlocks(){
	let revealedBlock;
	let revealedBlockDOM;
	let comparedBlock;
	let clickCount=0;


	counter.innerText=clickCount;

	for(var i=0; i<howManyBlocks; i++)
	{

		
		arrayOfBlocks.push(i+1,i+1);

	}
		arrayOfBlocks.sort(()=>Math.random()-0.5);



	arrayOfBlocks.forEach(block=>{
		const newDOMBlock= document.createElement("div");
		const blockBackground=document.createElement("div");
		

		blockBackground.classList.add("background");
		blockBackground.innerText=block;
		blockBackground.style.backgroundImage=`url(https://placeimg.com/200/200/${block})`
		newDOMBlock.classList.add("block");

				newDOMBlock.appendChild(blockBackground);

		// newDOMBlock.innerText=block;
		newDOMBlock.addEventListener("click", function(){
			clickCount++;
			counter.innerText=clickCount;
			// this.style.transform="rotateY(0deg)";
			this.classList.remove("hidden");
			if(!revealedBlock)
			{
			revealedBlock=this.childNodes[0].innerText;
			revealedBlockDOM=this;
			}
			else
			{

			comparedBlock=this.childNodes[0].innerText;
			if(comparedBlock===revealedBlock){
				revealedBlock=null;
				comparedBlock=null;

			}
				else{
			setTimeout(()=>{
				this.classList.add("hidden");
				revealedBlockDOM.classList.add("hidden");
				revealedBlock=null;
				comparedBlock=null;

			},2000)
}
		}
		})
		gridContainer.appendChild(newDOMBlock);
		timeout+=50;
		console.log(timeout);
		setTimeout(()=>{
			newDOMBlock.classList.add("hidden");
		}, timeout);
	})
timeout=2000;
}
	renderBlocks();

})