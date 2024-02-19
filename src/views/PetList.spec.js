import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PetsList from './PetsList.vue'

describe("Tela Home", () => {
    it("Espera-se que a tela seja renderizada", () => {
        const component = mount(PetsList)

        expect(component).toBeTruthy()

    })

})