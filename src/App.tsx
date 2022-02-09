import "./index.css";
import "./App.css";

import { SkedifyPlugin, SkedifyPluginProvider } from "@skedify/plugin-react";

const config = {
  appointment: {
    subject_id: "21"
  }
};

const scriptSrc = `https://plugin.staging.skedify.io/bankvanbreda/skedify-plugin.js`;

const defaultConfig = {
  scriptSrc,
  language: "nl-be",
  flow: "S'TQC",
  meeting_types: "video",
  timezone: "Europe/Brussels",
  oauth: {
    client: "3thwHbBTXFmnfQIN2R0zug0UbKiP7DTallmDJqWG"
  },
  appointment: {
    office_id: "1"
  }
};

export default function App() {
  return (
    <SkedifyPluginProvider value={defaultConfig}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <div style={{ display: "flex", gap: "4rem", justifyItems: "center" }}>
          <SkedifyPlugin id="skedify-plugin-wrapper" style={{ width: 400 }} configuration={config} />
          <SkedifyPlugin
            id="skedify-plugin-wrapper"
            style={{ width: 400 }}
            configuration={{ appointment: { subject_id: "20" } }}
          />
          <SkedifyPlugin
            id="skedify-plugin-wrapper"
            style={{ width: 400 }}
            configuration={{ appointment: { subject_id: "9" } }}
          />
        </div>
      </div>
    </SkedifyPluginProvider>
  );
}
