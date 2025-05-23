import { m } from "framer-motion";
// @mui
import IconButton from "@mui/material/IconButton";
// locales

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  // const locales = useLocales();

  // const popover = usePopover();

  // const handleChangeLang = useCallback(
  //   (newLang: string) => {
  //     locales.onChangeLang(newLang);
  //     popover.onClose();
  //   },
  //   [locales, popover]
  // );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        // variants={varHover(1.05)}
        // onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          // ...(popover.open && {
          //   bgcolor: "action.selected",
          // }),
        }}
      >
        {/* <Iconify
          icon={locales.currentLang.icon}
          sx={{ borderRadius: 0.65, width: 28 }}
        /> */}
      </IconButton>

      {/* <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 160 }}
      >
        {locales.allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === locales.currentLang.value}
            onClick={() => handleChangeLang(option.value)}
          >
            <Iconify
              icon={option.icon}
              sx={{ borderRadius: 0.65, width: 28 }}
            />

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover> */}
    </>
  );
}
