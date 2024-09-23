import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";
import { useRouter } from "next/router";

export default function ChangePassword() {
  const [visible, { toggle }] = useDisclosure(false);
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {router.locale === "uz" ? "Parolni o'zgartirish" : "Изменить пароль"}
      </h2>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label className={styles.label} htmlFor="pass">
            Parol yarating
          </label>
          <PasswordInput
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
            className={styles.inputt}
            name="confirm_password"
            placeholder="Confirm Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
        </div>
        <Button
          // onClick={() => {
          //   if () {

          //   } else {
          //     // setAtributErr(true);
          //   }
          // }}
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
