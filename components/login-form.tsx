import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function LoginForm() {
    return (
        <div className="flex flex-col w-full">
            <Card className="max-w-full w-[340px] ">
                <CardBody className="overflow-hidden">
                    <form className="flex flex-col gap-4">
                        <Input
                            isRequired
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <Input
                            isRequired
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                        />

                        <div className="flex justify-end gap-2">
                            <Button fullWidth color="primary">
                                Login
                            </Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
