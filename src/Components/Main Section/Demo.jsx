import React from "react";
import styles from "./Demo.module.css";
import usdImg from "../../assets/usd_unreal.png";
import compoundImg from "../../assets/compound.png";
import demoGraph from "../../assets/Demo_graph.png";

const Demo = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["main"]}>
        <div className={styles["divpanel"]}>
          <div className={styles["divmarketoverview"]}>
            <div className={styles["divmarketoverviewstats"]}>
              <div className={styles["divmarketoverviewstatsitem"]}>
                <span className={styles["text"]}>
                  <span>Total Earning</span>
                </span>
                <div className={styles["total"]}>$249.99M</div>
              </div>
              <div className={styles["divmarketoverviewstatsitem1"]}>
                <span className={styles["text"]}>
                  <span>Earn APR</span>
                </span>
                <div className={styles["percentage"]}>
                  <img src={usdImg} alt="pseudo158" className={styles["logo"]} />
                  <span className={styles["logoPercentage"]}>3.14%</span>
                </div>
              </div>
              <div className={styles["divmarketoverviewstatsitem2"]}>
                <span className={styles["text"]}>
                  <span>Earn Distribution</span>
                </span>
                <div className={styles["percentage"]}>
                    <img src={compoundImg} alt="pseudo158" className={styles["logo"]} />
                    <span className={styles["logoPercentage"]}>0.00%</span>
                </div>
              </div>
              <div className={styles["divmarketoverviewstatsitem3"]}>
                <span className={styles["text"]}>
                  <span>Reserves</span>
                </span>
                <div className={styles["total"]}>
                    $1.39M
                </div>
              </div>
              <div className={styles["divmarketoverviewstatsitem4"]}>
                <span className={styles["text"]}>
                  <span>Total Borrowing</span>
                </span>
                <div className={styles["total"]}>$231.01M</div>
              </div>
              <div className={styles["divmarketoverviewstatsitem5"]}>
                <span className={styles["text"]}>
                  <span>Borrow APR</span>
                </span>
                <div className={styles["percentage"]}>
                  <img src={usdImg} alt="pseudo158" className={styles["logo"]} />
                  <span className={styles["logoPercentage"]}>3.99%</span>
                </div>
              </div>
              <div className={styles["divmarketoverviewstatsitem6"]}>
                <span className={styles["text"]}>
                  <span>Borrow Distribution</span>
                </span>
                <div className={styles["percentage"]}>
                    <img src={compoundImg} alt="pseudo158" className={styles["logo"]} />
                    <span className={styles["logoPercentage"]}>4.80%</span>
                </div>
              </div>
              <div className={styles["divmarketoverviewstatsitem7"]}>
                <span className={styles["text"]}>
                  <span>Oracle Price</span>
                </span>
                <div className={styles["total"]}>
                    $1.00
                </div>
              </div>
            </div>
            <div className={styles["divinterestratemodel"]}>
              <div className={styles["divinterestratemodelkeys"]}>
                <span className={styles["text1"]}>
                  <span>Utilization</span>
                </span>
                <span className={styles["text2"]}>
                  <span>Borrow APR</span>
                </span>
                <span className={styles["text3"]}>
                  <span>Earn APR</span>
                </span>
              </div>
              <div className={styles["divinterestratemodelkeys1"]}>
                <span className={styles["text4"]}>
                  <span>92.41%</span>
                </span>
                <span className={styles["text5"]}>
                  <span>3.99%</span>
                </span>
                <span className={styles["text6"]}>
                  <span>3.14%</span>
                </span>
              </div>
              {/* <img src="/svg192-r58.svg" alt="SVG192" className={styles["svg4"]} />      */}
              <img src={demoGraph} alt="SVG192" className={styles["svg4"]} />
            </div>
          </div>
        </div>
        <div className={styles["divpanel1"]}>
          <div className={styles["divpanelmarketsassetscontent"]}>
            <div className={styles["table"]}>
              <div className={styles["header-row"]}>
                <span className={styles["main-text1"]}>
                  <span>Collateral Asset</span>
                </span>
                <span className={styles["main-text2"]}>
                  <span>Total Supply</span>
                </span>
                <span className={styles["main-text3"]}>
                  <span>Oracle Price</span>
                </span>
                <span className={styles["main-text4"]}>
                  <span>Reserves</span>
                </span>
                <span className={styles["main-text5"]}>
                  <span>Collateral Factor</span>
                </span>
                <span className={styles["main-text6"]}>
                  <span>Liquidation Factor</span>
                </span>
                <span className={styles["main-text7"]}>
                  <span>Liquidation Penalty</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
