import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Flex,
  Text,
  Button,
  DropdownMenu,
  Box,
  Card,
  Avatar,
  Table,
  Tabs,
  TabNav,
} from "@radix-ui/themes";
import Overview from "./Overview";
import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  CaretSortIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Card>
        <div>
          <header className="flex items-center justify-between p-2 border-b">
            <div className="flex">
              <div className="w-36">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">
                      Alicia Koch
                      <CaretSortIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>Alicia Koch</DropdownMenu.Item>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Acme Inc.</DropdownMenu.Item>
                    <DropdownMenu.Item>Monster.Inc.</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <div className="flex gap-3">
                      <div className="mt-1">
                        <PlusCircledIcon />
                      </div>
                      <p>Create Team</p>
                    </div>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>

              <nav className="flex">
                <Tabs.Root defaultValue="account">
                  <Tabs.List>
                    <Tabs.Trigger value="account">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="documents">Customer</Tabs.Trigger>
                    <Tabs.Trigger value="settings">Products</Tabs.Trigger>
                    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                  </Tabs.List>
                </Tabs.Root>
              </nav>
            </div>
            <div>
              <div className="flex gap-4">
                <input
                  type="search"
                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:w-[100px] lg:w-[300px]"
                  placeholder="Search..."
                ></input>
                <span>
                  <Avatar src="https://ui.shadcn.com/avatars/01.png" />
                </span>
              </div>
            </div>
          </header>
          <h1 className="font-bold text-3xl mt-4 pl-4">Dashboard</h1>
          <div className="flex justify-between pl-4">
            <ul className="flex gap-6 mt-4 pl-4 p-2  opacity-80 bg-gray-100 w-4/12 rounded-lg">
              <button className="bg-white text-black rounded w-20 shadow">
                <li className="font-semibold">Overview</li>
              </button>
              <li className="opacity-50">Analytics</li>
              <li className="opacity-50">Reports</li>
              <li className="opacity-50">Notifications</li>
            </ul>
            <button className="bg-black h-10 w-32 rounded-lg">
              <p className="text-white font-bold">Download</p>
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Card>
              <div className="flex flex-col justify-center items-start h-30 w-60">
                <div className="font-normal p-4 w-full text-xl">
                  Total Revenue
                </div>
                <div className="font-bold p-4 w-full text-3xl">$45,231.89</div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-center items-start h-30 w-60">
                <div className="font-normal p-4 w-full text-xl">
                  Total Revenue
                </div>
                <div className="font-bold p-4 w-full text-3xl">$45,231.89</div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-center items-start h-30 w-60">
                <div className="font-normal p-4 w-full text-xl">
                  Total Revenue
                </div>
                <div className="font-bold p-4 w-full text-3xl">$45,231.89</div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-center items-start h-30 w-60">
                <div className="font-normal p-4 w-full text-xl">
                  Total Revenue
                </div>
                <div className="font-bold p-4 w-full text-3xl">$45,231.89</div>
              </div>
            </Card>
          </div>

          <div className="flex gap-5 mt-8">
            <div>
              <Card>
                <Overview></Overview>
              </Card>
            </div>
            <div className="w-1/2 ">
              <Card>
                <Table.Root>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>
                        Recent Sales
                      </Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <div className="flex gap-4">
                          <Avatar src="https://ui.shadcn.com/avatars/01.png" />
                          <div className="flex flex-col">
                            <div className="font-semibold">Danilo Sousa</div>
                            <div>danilo@example.com</div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <div className="font-semibold text-lg">
                          +$1,999.00
                        </div>{" "}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div className="flex gap-4">
                          <Avatar src="https://ui.shadcn.com/avatars/05.png" />
                          <div className="flex flex-col">
                            <div className="font-semibold">Jackson Lee</div>
                            <div>Jackson@example.com</div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <div className="font-semibold text-lg">
                          +$39.00
                        </div>{" "}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div className="flex gap-4">
                          <Avatar src="https://ui.shadcn.com/avatars/04.png" />
                          <div className="flex flex-col">
                            <div className="font-semibold">Isabella Nguyen</div>
                            <div>Isabella@example.com</div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <div className="font-semibold text-lg">
                          +$299.00
                        </div>{" "}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div className="flex gap-4">
                          <Avatar src="https://ui.shadcn.com/avatars/03.png" />
                          <div className="flex flex-col">
                            <div className="font-semibold">William Kim</div>
                            <div>William@example.com</div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <div className="font-semibold text-lg">
                          +$99.00
                        </div>{" "}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <div className="flex gap-4">
                          <Avatar src="https://ui.shadcn.com/avatars/02.png" />
                          <div className="flex flex-col">
                            <div className="font-semibold">Sofia Davis</div>
                            <div>Sofia@example.com</div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        <div className="font-semibold text-lg">
                          +$39.00
                        </div>{" "}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Root>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
