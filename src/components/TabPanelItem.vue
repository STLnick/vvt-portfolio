<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot } from "@headlessui/vue";
import { ChevronUpIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["item"]);
const item = props.item;
</script>

<template>
    <Disclosure v-slot="{ open }">
        <div class="p-4">
            <!-- Panel activator -->
            <DisclosureButton class="flex w-full items-center py-2 dark:text-accent-light">
                <span class="basis-auto">{{ item.title }}</span>
                <ChevronUpIcon
                    :class="open ? 'rotate-180 transform' : ''"
                    class="mx-2 h-9 w-9 fill-secondary-dark transition-all dark:fill-accent-light"
                />
                <div class="w-2/3 grow bg-secondary-lightest p-px"></div>
            </DisclosureButton>
            <!-- Expanded content -->
            <TransitionRoot
                :show="open"
                enter="transition-opacity duration-75"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity duration-150"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <DisclosurePanel
                    class="ml-4 border-l-2 border-l-secondary-light pl-2 pr-8 text-gray-500 transition-all dark:text-secondary-lightest"
                >
                    <a
                        v-if="item.link"
                        :class="[
                            'align-center mt-1 mb-2 flex',
                            'text-primary underline decoration-primary hover:text-primary-dark hover:decoration-primary-dark',
                            'dark:text-accent dark:decoration-accent dark:hover:text-accent-dark hover:dark:decoration-accent-dark',
                        ]"
                        :href="item.link.href"
                    >
                        {{ item.link.text }}
                        <ArrowTopRightOnSquareIcon
                            class="my-auto h-5 w-5 fill-primary-dark dark:fill-accent-dark"
                        />
                    </a>
                    <p v-html="item.content.text"></p>
                </DisclosurePanel>
            </TransitionRoot>
        </div>
    </Disclosure>
</template>
