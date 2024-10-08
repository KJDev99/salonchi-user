import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";
import { useRouter } from "next/router";
import { request } from "@/shared/api/requests";
import toast from "react-hot-toast";

export default function ChangePassword() {
  const [visible, { toggle }] = useDisclosure(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      return;
    }
    const res = await request.put("user/profile/change-password", {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    });
    if (res.status === 200) {
      toast.success("Parol muvaffaqiyatli yangilandi");
      // router.push("/profile");
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {router.locale === "uz" ? "Parolni o'zgartirish" : "Изменить пароль"}
      </h2>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="pass">
            Eski parol
          </label>
          <PasswordInput
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            // type="password"
            // style={{ padding: "4px 2px" }}
            className={styles.inputt}
            name="old_password"
            placeholder="Old Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="pass">
            Parol yarating
          </label>
          <PasswordInput
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            // type="password"
            // style={{ padding: "4px 2px" }}
            className={styles.inputt}
            name="new_password"
            placeholder="New Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="pass">
            Parol yarating
          </label>
          <PasswordInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputt}
            name="confirm_password"
            placeholder="Confirm Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
        </div>
        <Button
          onClick={() => handleSubmit()}
          variant="filled"
          className={styles.btn}
        >
          {/* {t("slug.in cart")}  */} Saqlash
        </Button>
        {/* <Button type="submit" className={styles.btn}>
          Saqlash
        </Button> */}
      </form>
    </div>
  );
}
