import { NextPage } from "next";
import { useState } from "react";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { AnimatePresence, motion } from "framer-motion";

import PageSelector from "../components/PageSelector";
import AnimateScaler from "../components/AnimateScaler";
import SEO from "../components/SEO";

export interface ConversionResult {
  result: string[];
  conversion: {
    failed: number;
    received: number;
    successed: number;
  };
}

const Index: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [splitChar, setSplitChar] = useState("");
  const [input, setInput] = useState("");
  const [showDiag, setShowDiag] = useState(false);
  const [result, setResult] = useState<ConversionResult>();

  const submit = async () => {
    if (input === "" || loading) return;

    setLoading(true);

    fetch("/api/item-conversions", {
      method: "POST",
      body: JSON.stringify({
        input,
        splitChar: splitChar === "" ? "\n" : splitChar,
      }),
    })
      .then((r) => r.json())
      .then((json) => {
        setResult(json as ConversionResult);
        setShowDiag(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SEO
        title="Item Conversions | tf2.tools"
        description="Easy to use tool to convert items into different formats!"
      />
      <Dialog
        header="Result"
        visible={showDiag}
        style={{ width: "70em" }}
        footer={
          <Button
            className="mt-2"
            label="Ok"
            icon="pi pi-check"
            onClick={() => setShowDiag(false)}
            autoFocus
          />
        }
        onHide={() => setShowDiag(false)}
      >
        <p className="m-0 mb-2">
          Conversion complete: {result?.conversion.successed} items converted
          out of {result?.conversion.received}, {result?.conversion.failed}{" "}
          failed.
        </p>
        <InputTextarea
          readOnly
          autoResize
          rows={1}
          style={{ width: "100%" }}
          value={result?.result.join("\n")}
          onFocus={(e) => e.target.select()}
        ></InputTextarea>
      </Dialog>

      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 col-12">
          <AnimateScaler>
            <Card
              title="What's this?"
              style={{ width: "100%", marginBottom: "1em" }}
            >
              <p className="m-0">
                This is a tool made mainly for people who use trading bots
                allows you to easily convert lists of item names into skus and
                vice versa. The SKUS are currently generated following
                marketplace.tf&apos;s standards.
              </p>
            </Card>
          </AnimateScaler>
          <AnimateScaler>
            <Card
              title="Item Conversions"
              style={{ width: "100%", marginBottom: "2em" }}
            >
              <AnimatePresence>
                <motion.div className="flex" key="checkbox">
                  <div className="field-checkbox">
                    <Checkbox
                      onChange={(e) => setShowAdvanced(e.checked)}
                      checked={showAdvanced}
                      name="isSKUS"
                      inputId="isSKUS"
                    ></Checkbox>
                    <label htmlFor="isSKUS">Show advanced settings</label>
                  </div>
                </motion.div>

                {showAdvanced && (
                  <motion.div
                    key="advanced"
                    className="my-1 mt-2"
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <InputText
                      style={{ width: "100%" }}
                      id="splitChar"
                      value={splitChar}
                      placeholder="Split Character"
                      onChange={(e) => setSplitChar(e.target.value)}
                    />
                  </motion.div>
                )}
                <motion.div
                  key="input"
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.2 }}
                >
                  <InputTextarea
                    rows={5}
                    cols={30}
                    autoResize
                    style={{ width: "100%" }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      "Split each item identifierer by a " +
                      (splitChar === "" ? "space" : `${splitChar}`) +
                      " character!"
                    }
                  />
                  <Button
                    label="Submit"
                    loading={loading}
                    className="mt-1"
                    style={{ width: "100%" }}
                    onClick={() => {
                      submit();
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </Card>
          </AnimateScaler>
        </div>
      </div>
    </>
  );
};

export default Index;
