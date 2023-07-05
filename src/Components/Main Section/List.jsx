import React from 'react';
import styles from "./List.module.css";
import ProgressBar from "./BorderLinearProgress";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const List = (props) => {

    const { Logo, assetData, assetSubData, supplyData, supplyProgress, toolTipData, capital, price, coin, oracleData, reserveData, collateralFactData, liquidationFactData, liquidationPenData } = props;

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} placement='top' />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'rgba(29, 40, 51, 1)',
          color: '#ffffff',
          maxWidth: 220,
          placement: "top",
          fontSize: theme.typography.pxToRem(12),
          boxShadow: "10 black",
          marginLeft: '450px', 
        },
      }));

  return (
    <div className={styles["container"]}>
        <div className={styles["main"]}>
            <div className={styles["divpanel1"]}>
          <div className={styles["divpanelmarketsassetscontent"]}>
            <div className={styles["table"]}>
              <div className={styles["body"]}>
                <div className={styles["row"]}>
                <div className={styles["pre-data"]}>
                    {assetData}
                  </div>
                  <div className={styles["data"]}>
                    {assetSubData}
                  </div>
                  <div className={styles["supplyTooltip"]}>
                  <HtmlTooltip className={styles["tooltip"]}
                    title={
                    <React.Fragment>
                        <Typography color="inherit">{toolTipData}<span className={styles["values"]}>{capital}</span></Typography>
                        <span className={styles["sub-typo"]}>{"There is "} <b>{price}</b> {"of"} {coin}{' '}
                        {"capacity remaining."}</span>
                    </React.Fragment>
                    }>
                    <div className={styles["data01"]}>
                        {supplyData}
                    </div>
                    <div className={styles["sub-data01"]}>
                    <Box sx={{ flexGrow: 1 }}>
                        <ProgressBar variant="determinate" value={supplyProgress} />
                    </Box>
                    </div>
                  
                  </HtmlTooltip>
                  </div>
                  <div className={styles["data02"]}>
                    {oracleData}
                  </div>
                  <div className={styles["data03"]}>
                    {reserveData}
                  </div>
                  <div className={styles["data04"]}>
                    {collateralFactData}
                  </div>
                  <div className={styles["data05"]}>
                    {liquidationFactData}
                  </div>
                  <div className={styles["data06"]}>
                    {liquidationPenData}
                  </div>
                  <div className={styles["data07"]}>
                  <img src={Logo} alt="Logo" className={styles["main-img"]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default List;
