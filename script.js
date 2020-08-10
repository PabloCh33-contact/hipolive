	
//responsive
		var MenuItems = document.getElementById("MenuItems");

		MenuItems.style.maxHeight = "0px";

		function menutoggle(){
			if(MenuItems.style.maxHeight =="0px")
				{
					MenuItems.style.maxHeight = "200px"
				}
			else
				{
					MenuItems.style.maxHeight = "0px"
				}	
			}
//Star avis
			const allStars = document.querySelectorAll(".fa-star");
			//console.log("allStars", allStars);

			init();

			function init(){
				allStars.forEach(star => {
					star.addEventListener("click", getRating);
					star.addEventListener("mouseover", addCSS);
					star.addEventListener("mouseleave", removeCSS);
				});
				}

				function getRating(e) {
					console.log(e.target.dataset, e.target.nodeName, e.target.nodeType);
				}

				function addCSS(e, css = "checked") {
					const overedStar = e.target;
					overedStar.classList.add(css);
					const previousSiblings = getPreviousSiblings(overedStar);
					console.log("previousSiblings", previousSiblings);
					previousSiblings.forEach((elem) => elem.classList.add(css));
				}
				function removeCSS(e, css = "checked") {
					e.target.classList.remove(css);
				}

				function getPreviousSiblings(elem) {
					console.log("elem.previousSiblings", elem.previousSiblings);
					let siblings = [];
					const spanNodeType = 1;
					while ((elem = elem.previousSiblings)) {
						if (elem.nodeType === spanNodeType) {
							siblings = [elem, ...siblings];
						}
					}
					return siblings;

				}







