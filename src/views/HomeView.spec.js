import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HomeView from './HomeView.vue'

describe("Tela Home", () => {
    it("Espera-se que a tela seja renderizada", () => {
        const component = mount(HomeView)

        expect(component).toBeTruthy()

    })

})