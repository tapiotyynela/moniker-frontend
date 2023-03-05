import { Text } from "../common/Text";
import { useAuth } from "../hooks/useAuth";

type HeaderProps = {
  nickname: string;
};

export const Header = ({ nickname }: HeaderProps) => {
  const { logout } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        width: "90%",
      }}
    >
      <Text size={20} color="#E2BABA">
        Welcome, {nickname}!
      </Text>
      <Text size={20} color="#E2BABA" onClick={logout}>
        Logout
      </Text>
    </div>
  );
};
