import { h, FunctionalComponent } from "preact";

import * as Styled from "../styled";

const Polygon = Styled.Polygon;
const Path = Styled.Path;

export interface IArmyProps {
  viewBox: string;
  location: { x: number; y: number };
  empire: string;
  colour: string;
}
const Army: FunctionalComponent<IArmyProps> = (props: IArmyProps) => (
  <g
    transform={`translate(${props.location.x - 11} ${
      props.location.y - 20
    }) scale(0.055)`}
  >
    <g>
      {/* <!-- Wheels --> */}
      <path
        style="fill:#999999;"
        d="M145.687,374.175c0-13.504-10.951-24.455-24.455-24.455c-13.516,0-24.467,10.951-24.467,24.455
        s10.951,24.455,24.467,24.455C134.736,398.63,145.687,387.679,145.687,374.175z"
      />
      <path
        style="fill:#999999;"
        d="M231.205,378.426c0-11.159-9.045-20.204-20.204-20.204c-11.147,0-20.192,9.045-20.192,20.204
        s9.045,20.204,20.192,20.204C222.16,398.63,231.205,389.585,231.205,378.426z"
      />
      <path
        style="fill:#999999;"
        d="M332.952,372.615c0-14.37-11.656-26.026-26.026-26.026c-14.359,0-26.014,11.656-26.014,26.026
        c0,14.37,11.656,26.014,26.014,26.014C321.297,398.63,332.952,386.986,332.952,372.615z"
      />
      <path
        style="fill:#999999;"
        d="M392.975,358.557c4.875-3.315,8.075-8.906,8.075-15.248c0-10.177-8.259-18.437-18.437-18.437
        c-10.189,0-18.448,8.259-18.448,18.437c0,10.189,8.259,18.437,18.448,18.437C386.448,361.745,390.029,360.567,392.975,358.557z"
      />
      <path
        style="fill:#999999;"
        d="M31.025,369.289c2.403,0.866,4.99,1.34,7.693,1.34c12.441,0,22.537-10.085,22.537-22.537
        c0-12.441-10.096-22.537-22.537-22.537c-12.453,0-22.537,10.096-22.537,22.537c0,9.727,6.157,18.009,14.786,21.174
        C30.99,369.265,31.002,369.277,31.025,369.289z"
      />
    </g>
    <g>
      {/* <!-- Hatch --> */}
      <path
        style="fill:#FFFFFF"
        d="M233.099,174.515v14.151h-5.302H165.73v-14.151c0-6.758,5.476-12.233,12.233-12.233h42.903
        C227.624,162.282,233.099,167.757,233.099,174.515z"
      />
      {/* <!-- Turret tip --> */}
      <Polygon
        colourId={props.colour}
        shade="light"
        points="488.196,113.372 503.34,150.129 444.761,174.261 442.162,167.942 432.216,143.834
        429.617,137.515 	"
      />
    </g>
    {/* <!-- Turret --> */}
    <Path
      colourId={props.colour}
      shade="medium"
      d="M432.216,143.834l9.946,24.108l-155.036,63.904l-2.16,0.289c-2.299-8.294-6.388-16.045-12.037-22.653
      L432.216,143.834z"
    />
    {/* <!-- Treads --> */}
    <Path
      colourId={props.colour}
      shade="shadow"
      d="M392.975,358.557l-29.445,28.244c-7.901,7.589-18.437,11.829-29.388,11.829h-27.216
      c14.37,0,26.026-11.644,26.026-26.014c0-14.37-11.656-26.026-26.026-26.026c-14.359,0-26.014,11.656-26.014,26.026
      c0,14.37,11.656,26.014,26.014,26.014h-95.926c11.159,0,20.204-9.045,20.204-20.204s-9.045-20.204-20.204-20.204
      c-11.147,0-20.192,9.045-20.192,20.204s9.045,20.204,20.192,20.204h-89.768c13.504,0,24.455-10.951,24.455-24.455
      s-10.951-24.455-24.455-24.455c-13.516,0-24.467,10.951-24.467,24.455s10.951,24.455,24.467,24.455h-18.102
      c-6.457,0-12.846-1.259-18.829-3.685l-53.277-25.656c2.403,0.866,4.99,1.34,7.693,1.34c12.441,0,22.537-10.085,22.537-22.537
      c0-12.441-10.096-22.537-22.537-22.537l343.895-0.682c-10.189,0-18.448,8.259-18.448,18.437c0,10.189,8.259,18.437,18.448,18.437
      C386.448,361.745,390.029,360.567,392.975,358.557z"
    />
    <Path
      colourId={props.colour}
      shade="light"
      d="M287.127,247.995v11.171H106.4v-11.171c0-7.867,1.559-15.572,4.517-22.711
      c2.957-7.127,7.301-13.677,12.857-19.245c11.124-11.124,26.222-17.374,41.956-17.374h62.067c7.867,0,15.572,1.559,22.711,4.517
      c7.127,2.946,13.677,7.289,19.245,12.857c1.109,1.109,2.172,2.253,3.177,3.442c5.649,6.608,9.738,14.359,12.037,22.653
      C286.387,237.252,287.127,242.589,287.127,247.995z"
    />
    <Path
      colourId={props.colour}
      shade="medium"
      d="M157.699,225.286c2.957-7.127,7.301-13.677,12.857-19.245c11.124-11.124,26.222-17.374,41.956-17.374
      H165.73c-15.733,0-30.832,6.249-41.956,17.374c-5.556,5.568-9.9,12.118-12.857,19.245c-2.957,7.139-4.517,14.844-4.517,22.711
      v11.171h46.782v-11.171C153.182,240.129,154.742,232.424,157.699,225.286z"
    />
    <Polygon
      colourId={props.colour}
      shade="light"
      points="352.336,294.572 56.069,294.572 41.191,294.572 59.823,259.166 106.4,259.166
      287.127,259.166 307.619,259.166 "
    />
    <Polygon
      colourId={props.colour}
      shade="medium"
      points="106.4,259.166 59.823,259.166 41.191,294.573 56.069,294.573 101.835,294.573
      120.468,259.166 "
    />
    <g>
      <path
        style="fill: black;"
        d="M382.607,316.208c-0.006,0-343.907,0.684-343.907,0.684c-17.196,0.009-31.184,14.002-31.184,31.2
        c0,13.229,8.28,24.554,19.928,29.085l53.095,25.569c0.163,0.079,0.329,0.152,0.497,0.221c7.063,2.869,14.497,4.325,22.097,4.325
        h231.004c13.26,0,25.83-5.056,35.396-14.238l28.988-27.821c6.775-4.931,11.191-12.918,11.191-21.921
        C409.711,328.367,397.552,316.208,382.607,316.208z M392.384,343.312c0,5.39-4.385,9.775-9.775,9.775
        c-5.391,0-9.776-4.385-9.776-9.775c0-5.391,4.385-9.776,9.776-9.776C387.997,333.536,392.384,337.921,392.384,343.312z
        M38.717,334.219c7.65,0,13.874,6.224,13.874,13.874s-6.224,13.874-13.874,13.874s-13.874-6.224-13.874-13.874
        S31.068,334.219,38.717,334.219z M105.434,374.174c0-8.709,7.085-15.794,15.794-15.794s15.794,7.085,15.794,15.794
        c0,8.694-7.062,15.766-15.748,15.79h-0.089C112.496,389.94,105.434,382.866,105.434,374.174z M199.469,378.428
        c0-6.362,5.176-11.538,11.538-11.538s11.538,5.175,11.538,11.538c0,6.346-5.152,11.511-11.493,11.536h-0.089
        C204.621,389.94,199.469,384.776,199.469,378.428z M289.577,372.611c0-9.569,7.786-17.355,17.355-17.355
        c9.569,0,17.355,7.786,17.355,17.355c0,9.554-7.762,17.329-17.31,17.353h-0.089C297.338,389.94,289.577,382.165,289.577,372.611z
        M357.534,380.554c-5.693,5.464-12.998,8.709-20.794,9.303c3.092-4.924,4.876-10.78,4.876-17.244
        c0-19.124-15.559-34.683-34.683-34.683c-19.124,0-34.683,15.559-34.683,34.683c0,6.512,1.807,12.407,4.941,17.353h-39.867
        c1.632-3.435,2.548-7.318,2.548-11.536c0-15.916-12.948-28.865-28.865-28.865s-28.865,12.948-28.865,28.865
        c0,4.218,0.916,8.099,2.548,11.536h-34.373c2.561-4.698,4.032-10.073,4.032-15.79c0-18.263-14.858-33.121-33.121-33.121
        s-33.12,14.857-33.12,33.12c0,5.018,1.138,9.77,3.144,14.038c-1.162-0.35-2.314-0.746-3.451-1.2l-29.852-14.376
        c7.28-5.717,11.97-14.59,11.97-24.543c0-5.004-1.191-9.733-3.293-13.929l290.691-0.578c-1.166,3.021-1.811,6.299-1.811,9.725
        c0,10.747,6.286,20.051,15.375,24.432L357.534,380.554z"
      />
      <path
        style="fill: black;"
        d="M511.348,146.824l-15.147-36.751c-0.876-2.124-2.559-3.814-4.681-4.697
        c-2.122-0.884-4.506-0.888-6.631-0.012l-58.573,24.14c-3.843,1.584-5.934,5.613-5.224,9.544l-145.962,60.159
        c-9.356-9.084-20.866-15.17-33.372-17.767v-6.931c0-11.519-9.372-20.89-20.89-20.89h-42.912c-11.519,0-20.89,9.371-20.89,20.89
        v6.055c-14.879,1.881-28.64,8.575-39.417,19.351c-12.843,12.843-19.916,29.918-19.916,48.081v2.509H59.819
        c-3.217,0-6.169,1.782-7.667,4.629l-17.417,33.091c-6.136,1.343-12.155,3.248-18.008,5.756L5.253,298.9
        c-4.398,1.885-6.435,6.978-4.55,11.376c1.885,4.399,6.978,6.434,11.376,4.55l11.474-4.918c10.334-4.429,21.275-6.675,32.519-6.675
        H352.34h34.438l18.97,12.851c1.489,1.008,3.179,1.492,4.852,1.492c2.777,0,5.506-1.333,7.181-3.805
        c2.683-3.962,1.647-9.349-2.314-12.032l-21.171-14.341c-1.435-0.971-3.127-1.491-4.86-1.491h-34.08l-42.353-33.53
        c-1.531-1.212-3.425-1.871-5.377-1.871h-11.831v-2.509c0-3.395-0.248-6.752-0.734-10.05l142.596-58.769
        c1.629,2.361,4.303,3.754,7.115,3.754c1.1,0,2.218-0.211,3.298-0.656l58.573-24.14c2.124-0.876,3.814-2.559,4.697-4.681
        C512.22,151.333,512.224,148.949,511.348,146.824z M174.395,174.509c0-1.965,1.598-3.563,3.563-3.563h42.912
        c1.965,0,3.563,1.598,3.563,3.563v5.492h-50.037L174.395,174.509L174.395,174.509z M327.44,285.907H56.075h-0.536l9.512-18.074
        h239.561L327.44,285.907z M115.063,250.506v-2.509c0-13.534,5.271-26.257,14.84-35.828c9.569-9.569,22.294-14.84,35.828-14.84
        h62.066c13.534,0,26.258,5.271,35.828,14.84c9.569,9.571,14.841,22.295,14.841,35.828v2.509H115.063z M286.322,213.337
        l141.191-58.192l1.635,3.96l1.704,4.134l-140.552,57.928C289.144,218.478,287.822,215.862,286.322,213.337z M449.479,162.952
        l-4.524-10.961l-4.025-9.767l42.552-17.538l8.544,20.731L449.479,162.952z"
      />
    </g>
  </g>
);

export default Army;
