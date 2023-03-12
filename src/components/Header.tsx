import { Text } from "../common/Text";
import { useAuth } from "../hooks/useAuth";

type HeaderProps = {
  leftText?: string;
  rightText?: string;
  isHome?: boolean;
  onClickLeftText?: () => void;
};

export const Header = ({
  leftText,
  rightText,
  isHome,
  onClickLeftText,
}: HeaderProps) => {
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
      {isHome ? (
        <Text size={20} color="#E2BABA">
          Welcome, {leftText}!
        </Text>
      ) : (
        <Text size={20} color="#E2BABA" onClick={onClickLeftText}>
          {leftText}
        </Text>
      )}
      {isHome && (
        <Text size={20} color="#E2BABA" onClick={logout}>
          {rightText}
        </Text>
      )}
    </div>
  );
};
