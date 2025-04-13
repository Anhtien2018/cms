// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthStore } from "@/stores/User/useAuthStore";
import { paths } from "@/helpers/constants";
// hooks
// routes
// locales
// components

// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { user } = useAuthStore();
  // const { user } = useMockedUser();

  // const { t } = useLocales();

  return (
    <Stack
      sx={{
        px: 2,
        py: 5,
        textAlign: "center",
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: "relative" }}>
          {/* <Avatar
            src={user?.photoURL}
            alt={user?.displayName}
            sx={{ width: 48, height: 48 }}
          />
          <Label
            color="success"
            variant="filled"
            sx={{
              top: -6,
              px: 0.5,
              left: 40,
              height: 20,
              position: "absolute",
              borderBottomLeftRadius: 2,
            }}
          >
            Free
          </Label> */}
        </Box>

        <Stack spacing={0.5} sx={{ mt: 1.5, mb: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.fullName}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: "text.disabled" }}>
            {user?.email}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          href={paths.dashboard.dashboard}
          target="_blank"
          rel="noopener"
        >
          {"upgrade_to_pro"}
        </Button>
      </Stack>
    </Stack>
  );
}
