// Add your rxjs imports here
import { forkJoin, from, Observable, interval, fromEvent, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

/*
 * Update the four slideshow's images.
 */
function updateImages(
  link0: string,
  link1: string,
  link2: string,
  link3: string
): void {
  let links: string[] = [link0, link1, link2, link3];
  let imageObservers: Observable<any>[] = [];
  document
    .getElementById("slideshow")
    ?.childNodes.forEach((node: ChildNode) => {
      if (node.nodeType == Node.ELEMENT_NODE) {
        if (links.length) {
          let element: HTMLElement = node as HTMLElement;
          element.classList.add("loading");
          element.style.backgroundImage = "url('" + links.shift() + "')";
          element.classList.remove("loading");
        }
      }
    });
}
/*
 * This API endpoint returns a JSON message of the following format:
 * {
 * "status": "success",
 * "message": "<url of a random image>"
 * }
 */
const apiUrl: string = "https://dog.ceo/api/breeds/image/random";

const btnElm = document.getElementById("btn");
let isPlaying: boolean = false;
const stopPlay: Subject<any> = new Subject();
let imageSubscriber = interval(5000);

btnElm?.addEventListener("click", function () {
  isPlaying = !isPlaying;
  if (isPlaying) {
    btnElm.innerHTML = "Stop";
    imageSubscriber.pipe(takeUntil(stopPlay)).subscribe((val) => {
      fetchInfoAndUpdate();
    });
  } else {
    stopPlay.next();
    btnElm.innerHTML = "Start";
  }
});

const fetchInfoAndUpdate = () => {
  const observerList: Observable<any>[] = [];
  for (let i = 0; i < 4; i++) {
    observerList.push(from(fetch(apiUrl).then((res) => res.json())));
  }
  forkJoin(observerList).subscribe((response) => {
    console.log(response);
    updateImages(
      response[0].message,
      response[1].message,
      response[2].message,
      response[3].message
    );
  });
};
