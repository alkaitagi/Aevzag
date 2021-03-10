import mapboxgl from "mapbox-gl";
import ResizeObserver from "resize-observer-polyfill";
import { onUnmounted } from "vue";

export let map: mapboxgl.Map;

function bindCamera() {
  const camera = {
    center: new mapboxgl.LngLat(45, 43),
    zoom: 5,
  };

  if (localStorage.camera)
    Object.assign(camera, JSON.parse(localStorage.camera));
  onUnmounted(() => (localStorage.camera = JSON.stringify(camera)));

  map.setZoom(camera.zoom);
  map.setCenter(camera.center);

  map.on("move", () => (camera.center = map.getCenter()));
  map.on("zoom", () => (camera.zoom = map.getZoom()));
}

function bindTheme() {
  function setStyle({ matches }: MediaQueryList | MediaQueryListEvent) {
    const theme = matches ? "dark" : "light";
    map.setStyle(`mapbox://styles/mapbox/${theme}-v10`);
  }
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  query.addEventListener("change", setStyle);
  setStyle(query);
}

function bindResize() {
  const observer = new ResizeObserver(() => map.resize());
  observer.observe(map.getContainer());
}

export function createMap(container = "map") {
  map = new mapboxgl.Map({
    container,
    minZoom: 2,
    maxZoom: 10,
    doubleClickZoom: false,
    accessToken:
      "pk.eyJ1IjoiYWxrYWl0YWdpIiwiYSI6ImNrZngwYTlqZjA1Mm4ycm5rcW94YmV4bHoifQ.c--QtLURoBAPTqqrLGZ0qQ",
  });

  bindCamera();
  bindTheme();
  bindResize();

  onUnmounted(() => map?.remove());
}