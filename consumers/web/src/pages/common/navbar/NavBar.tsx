import React from "react";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

import Select from "pages/common/Select";
import Checkbox from "@material-ui/core/Checkbox";

import DehazeIcon from "@material-ui/icons/Dehaze";
import status from "utils/enums";
import "./navbar.scss";

const Header = ({
  locationDetails = [],
  submitFilter = () => {},
  closeFilter = () => {},
}: any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [optionList, setOptionList] = React.useState([]);
  const [selectedAddress, setSelectedAddress]: any = React.useState(undefined);
  const [checkBoxValues, setCheckBoxValues]: any = React.useState([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeSelectBox = (key: string) => {
    const filterValues = checkBoxValues.filter((each: string) => each !== key);
    if (filterValues.length === checkBoxValues.length) {
      return setCheckBoxValues([...checkBoxValues, key]);
    }
    setCheckBoxValues(filterValues);
  };

  const changeSelectDropDown = ({
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setSelectedAddress(value);
  };

  React.useEffect(() => {
    if (locationDetails.length) {
      const options = locationDetails.map(({ id, address }: any) => ({
        label: address,
        value: id,
      }));
      setOptionList(options);
    }
  }, [locationDetails]);

  const validateAndSubmit = () => {
    submitFilter({ status: checkBoxValues, address: selectedAddress });
  };

  const clearFieldAndClose = () => {
    setSelectedAddress(undefined);
    setCheckBoxValues([]);
    closeFilter();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const MobileUI = () => {
    return (
      <>
        <Button
          aria-describedby={id}
          variant="contained"
          color="secondary"
          onClick={handleClick}
          startIcon={<DehazeIcon />}
        >
          {""}
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <DesktopUI />
        </Popover>
      </>
    );
  };

  const DesktopUI = () => {
    return (
      <>
        <Card>
          <div style={{ margin: 15, minWidth: 290 }}>
            <div>
              <Select
                options={optionList}
                onChange={changeSelectDropDown}
                value={optionList.filter(
                  (each: any) => each.value === selectedAddress
                )}
                //isDisabled={checkBoxValues.length > 0}
              />
            </div>
            <div>
              <div className="check-box-container">
                <Checkbox
                  checked={Object.values(checkBoxValues).includes(
                    status.requested
                  )}
                  //disabled={selectedAddress}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={() => changeSelectBox(status.requested)}
                />
                <span>Request</span>
                <div className="check-box-container__dot" />
              </div>

              <div className="check-box-container">
                <Checkbox
                  checked={Object.values(checkBoxValues).includes(
                    status.expired
                  )}
                  //disabled={selectedAddress}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={() => changeSelectBox(status.expired)}
                />
                <span>Expired</span>
                <div
                  className="check-box-container__dot"
                  style={{ background: "red" }}
                />
              </div>

              <div className="check-box-container">
                <Checkbox
                  checked={Object.values(checkBoxValues).includes(
                    status.suspended
                  )}
                 // disabled={selectedAddress}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={() => changeSelectBox(status.suspended)}
                />
                <span>Suspended</span>
                <div
                  className="check-box-container__dot"
                  style={{ background: "red" }}
                />
              </div>

              <div className="check-box-container">
                <Checkbox
                  checked={Object.values(checkBoxValues).includes(
                    status.approved
                  )}
                  //disabled={selectedAddress}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={() => changeSelectBox(status.approved)}
                />
                <span>Approved</span>
                <div
                  className="check-box-container__dot"
                  style={{ background: "green" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={validateAndSubmit}
              >
                Apply
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                color="secondary"
                onClick={clearFieldAndClose}
              >
                Clear
              </Button>
            </div>
          </div>
        </Card>
      </>
    );
  };

  return (
    <div style={{ position: "absolute", top: 10, right: 10, zIndex: 1000 }}>
      <div className="mobile-ui-display">
        <MobileUI />
      </div>
      <div className="desktop-ui-display">
        <DesktopUI />
      </div>
    </div>
  );
};

export default Header;
